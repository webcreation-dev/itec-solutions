"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Vec2, Texture, Flowmap, Plane } from "ogl";

const PortfolioShowcaseHero = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const background = containerRef.current;
        if (!background) return;

        const vertex = `
            attribute vec2 uv;
            attribute vec2 position;
            varying vec2 vUv;

            void main() {
                vUv = uv;
                gl_Position = vec4(position, 0.0, .45);
            }
        `;

        const fragment = `
            precision highp float;
            uniform sampler2D tImage;
            uniform sampler2D tFlow;
            varying vec2 vUv;

            void main() {
                vec3 flow = texture2D(tFlow, vUv).rgb;
                vec2 uv = vUv;
                uv += (flow.rg * flow.b * 50.0);
                vec3 tex = texture2D(tImage, uv).rgb;
                gl_FragColor.rgb = tex;
                gl_FragColor.a = 1.0;
            }
        `;

        const imageSrc = "/assets/img/cta/ai/bg-showcase.jpg";

        const renderer = new Renderer();
        const gl = renderer.gl;

        // Style the canvas to sit absolutely in the background
        gl.canvas.style.position = "absolute";
        gl.canvas.style.top = "0";
        gl.canvas.style.left = "0";
        gl.canvas.style.width = "100%";
        gl.canvas.style.height = "100%";
        gl.canvas.style.zIndex = "1";
        background.appendChild(gl.canvas);

        const mouse = new Vec2(0.5);
        const lastMouse = new Vec2(0.5);
        const velocity = new Vec2();
        let aspect = 1;

        function resize() {
            if (!background) return;
            const rect = background.getBoundingClientRect();
            aspect = rect.width / rect.height;
            gl.canvas.width = rect.width;
            gl.canvas.height = rect.height;
            renderer.setSize(rect.width, rect.height);
        }

        window.addEventListener("resize", resize, false);
        resize();

        const flowmap = new Flowmap(gl, { falloff: 0.3, dissipation: 0.95, size: 1000 });

        const geometry = new Plane(gl);

        const texture = new Texture(gl);
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
            texture.image = img;
            texture.minFilter = gl.LINEAR;
            texture.magFilter = gl.LINEAR;
            texture.wrapS = gl.CLAMP_TO_EDGE;
            texture.wrapT = gl.CLAMP_TO_EDGE;
        };
        img.src = imageSrc;

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                tImage: { value: texture },
                tFlow: flowmap.uniform
            }
        });

        const mesh = new Mesh(gl, { geometry, program });

        function updateMouse(event: MouseEvent) {
            if (!background) return;
            const rect = background.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = 1 - (event.clientY - rect.top) / rect.height;
            mouse.set(x, y);
        }

        function updateTouch(event: TouchEvent) {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                if (!background) return;
                const rect = background.getBoundingClientRect();
                const x = (touch.clientX - rect.left) / rect.width;
                const y = 1 - (touch.clientY - rect.top) / rect.height;
                mouse.set(x, y);
            }
        }

        background.addEventListener("mousemove", updateMouse, false);
        background.addEventListener("touchmove", updateTouch, false);

        const spring = 0.04;
        const friction = 0.8;
        const springVel = new Vec2();
        let animationId: number;

        function update() {
            springVel.copy(mouse).sub(lastMouse).multiply(spring);
            velocity.add(springVel).multiply(friction);
            lastMouse.add(velocity);

            flowmap.mouse.copy(lastMouse);
            flowmap.velocity.copy(velocity);
            flowmap.aspect = aspect;

            flowmap.update();
            renderer.render({ scene: mesh });
            animationId = requestAnimationFrame(update);
        }

        animationId = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            if (background) {
                background.removeEventListener("mousemove", updateMouse);
                background.removeEventListener("touchmove", updateTouch);
                if (gl.canvas.parentNode === background) {
                    background.removeChild(gl.canvas);
                }
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="tp-portfolio-area pre-header tp-bg-common-black-5 tp-portfolio-showcase-full-bg bg-position tp-image-distortion z-index-1"
            data-background="/assets/img/cta/ai/bg-showcase.jpg"
        >
            <div className="container-fluid container-1824 containers" style={{ position: "relative", zIndex: 2 }}>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="tp-cta-ai-wrap text-center">
                            <span className="tp-portfolio-showcase-full-subtitle">
                                Best-in-class local <br /> benefits for everyone, everywhere
                            </span>
                            <h2 className="tp-hero-vp-title tp-ff-morganite-bold text-uppercase tp-text-common-white ls-0 text-scale-anim-bottom">
                                Our Portfolio
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioShowcaseHero;