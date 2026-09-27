"use client";
import { gsap, ScrollTrigger, Flip } from "gsap/all";
import { SplitText } from "gsap/dist/SplitText";
import { isMobile } from "@/utils/device";
import HoverEffect from "hover-effect";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, Flip);

// tp-title-middle-animetion
export const titleMiddleAnimetion = () => {
  const mm = gsap.matchMedia();
  mm.add("(min-width: 768px)", () => {
    const title = document.querySelector(".tp-title-middle-animetion");
    if (!title) return;

    const letters = title.textContent.split("");
    title.textContent = "";
    letters.forEach(char => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      title.appendChild(span);
    });

    // Scroll Animation
    gsap.to(".tp-title-middle-animetion span", {
      y: -220,
      stagger: {
        each: 0.04,
        from: "center"
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".tp-title-middle-wrap",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  });
}
//image border radius scroll anim
export const animateImageBorderRadiusOnScroll = () => {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1200px)", () => {
    gsap.to(".tp-gsap-image", {
      scrollTrigger: {
        trigger: ".tp-gsap-image",
        scrub: 0.3,
        start: "top 95%",
        end: "bottom 100%",
      },
      borderRadius: "400px",
      transformOrigin: "center center",
      ease: "none",
    });
  });
}

// panel pin section animation
export const initPanelPinScrollAnimation = () => {
  const pr = gsap.matchMedia();
  pr.add("(min-width: 1199px)", () => {
    const tl = gsap.timeline();
    const panels = document.querySelectorAll('.tp-panel-pin')
    panels.forEach((section) => {
      tl.to(section, {
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: 'top 10%',
          end: "bottom 99%",
          endTrigger: '.tp-panel-pin-area',
          pinSpacing: false,
          markers: false,
        },
      })
    })
  })
}
// scroll-scale-up-img
export const initScrollScaleUp = () => {
  document.querySelectorAll(".scale-up-img").forEach((section) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });

    const image = section.querySelector<HTMLElement>(".scale-up");
    const scaleTo = image?.dataset.scaleTo ? Number(image.dataset.scaleTo) : 1.15;

    tl.to(image, {
      scale: scaleTo,
      duration: 1,
    });
  })
}
// webgl images hover animation
type HoverWrapper = HTMLElement & {
  _hoverInitialized?: boolean;
};
//apply web gel hover effect
export const applyWebGLHoverEffect = (): void => {
  const wrappers = document.querySelectorAll<HTMLElement>(".tp--hover-img");
  if (!wrappers.length) return;

  wrappers.forEach((el) => {
    const wrapper = el as HoverWrapper;

    if (wrapper._hoverInitialized) return;
    wrapper._hoverInitialized = true;

    const img = wrapper.querySelector<HTMLImageElement>("img");
    if (!img) return;

    const init = (): void => {
      if (!img.src) return;

      const displacement =
        wrapper.dataset.displacement || "/assets/img/imghover/fluid.jpg";

      const effect = new HoverEffect({
        parent: wrapper,
        intensity: wrapper.dataset.intensity
          ? parseFloat(wrapper.dataset.intensity)
          : 0.2,
        speedIn: wrapper.dataset.speedin
          ? parseFloat(wrapper.dataset.speedin)
          : 1,
        speedOut: wrapper.dataset.speedout
          ? parseFloat(wrapper.dataset.speedout)
          : 1,
        easing: wrapper.dataset.easing || "power2.out",
        hover: false,
        image1: img.src,
        image2: img.src,
        displacementImage: displacement,
        imagesRatio:
          img.naturalWidth && img.naturalHeight
            ? img.naturalHeight / img.naturalWidth
            : 1,
      });

      const parentItem = wrapper.closest<HTMLElement>(".tp--hover-item");
      if (!parentItem) return;

      parentItem.addEventListener("mouseenter", () => effect.next());
      parentItem.addEventListener("mouseleave", () => effect.previous());
    };

    if (img.complete) {
      init();
    } else {
      img.addEventListener("load", init, { once: true });
    }
  });
};

//fade animation
export const initFadeReveal = (): void => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.utils.toArray<HTMLElement>(".tp_fade_anim").forEach((item) => {
      const offset = Number(item.dataset.fadeOffset ?? 40);
      const duration = Number(item.dataset.duration ?? 0.75);
      const direction = item.dataset.fadeFrom ?? "bottom";
      const onScroll = (item.dataset.onScroll ?? "1") === "1";
      const delay = parseFloat(item.dataset.delay ?? "0.15");
      const ease = item.dataset.ease ?? "power2.out";

      const vars: gsap.TweenVars = {
        opacity: 0,
        duration,
        delay,
        ease,
        overwrite: "auto",
        x:
          direction === "left"
            ? -offset
            : direction === "right"
              ? offset
              : 0,
        y:
          direction === "top"
            ? -offset
            : direction === "bottom"
              ? offset
              : 0,
      };

      if (onScroll) {
        vars.scrollTrigger = {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true, // even safer
        };
      }

      gsap.from(item, vars);
    });
  });
};

// Define a type for the element with attached properties
interface RevealElement extends HTMLElement {
  split?: SplitText;       // SplitText instance
  anim?: gsap.core.Tween;  // GSAP animation instance
}

export const initTextRevealAnim = (): void => {
  const elements = document.querySelectorAll<RevealElement>(".tp-text-revel-anim");

  elements.forEach((el) => {
    const getAttr = (attr: string, defaultValue: string) =>
      el.getAttribute(attr) ?? defaultValue;

    const duration = Number(getAttr("data-duration", "1"));
    const onScroll = Number(getAttr("data-on-scroll", "1"));
    const stagger = Number(getAttr("data-stagger", "0.02"));
    const delay = Number(getAttr("data-delay", "0.08"));
    const ease = getAttr("data-ease", "circ.out");

    // Attach SplitText
    el.split = new SplitText(el, { type: "lines,words,chars", linesClass: "tp-revel-line" });

    const animProps: gsap.TweenVars = {
      duration,
      delay,
      ease,
      y: 40,
      stagger,
      opacity: 0,
    };

    // Attach GSAP animation
    el.anim =
      onScroll === 1
        ? gsap.from(el.split.chars, {
          ...animProps,
          scrollTrigger: { trigger: el, start: "top 85%" },
        })
        : gsap.from(el.split.chars, animProps);
  });
};

// Text Invert With Scroll 
export const initScrollTextInvert = (): void => {
  const split = new SplitText(".tp_text_invert", { type: "lines" });
  split.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: 'top 85%',
        end: "bottom center"
      }
    });
  });
};

// Hover reveal effect without jQuery
export const initRevealOnHover = (): void => {
  const hoverItems = document.querySelectorAll<HTMLElement>(".tp-reveal-item");

  function moveImage(e: MouseEvent, item: HTMLElement, childIndex: number) {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const child = item.children[childIndex] as HTMLElement | undefined;
    if (child) {
      child.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
  hoverItems.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      moveImage(e, item, 1);
    });
  });
};

// Button Hover Animation
export const buttonHoverAnimation = () => {
  const buttons = document.querySelectorAll(".tp-btn-rounded");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();

      const mouseEvent = e as MouseEvent;
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;

      const dot = target.querySelector(".tp-btn-circle-dot") as HTMLElement;

      if (dot) {
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
      }
    });
  });
};
// Button Move Animation
export const buttonMoveAnimation = () => {
  const allBtns = gsap.utils.toArray<HTMLElement>(".btn_wrapper, #btn_wrapper");
  const allCircles = gsap.utils.toArray<HTMLElement>(".btn-item");

  if (!allBtns.length || !allCircles.length) return;

  allBtns.forEach((btn, i) => {
    const circle = allCircles[i];

    btn.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();

      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const x = ((relX - rect.width / 2) / rect.width) * 80;
      const y = ((relY - rect.height / 2) / rect.height) * 80;

      gsap.to(circle, {
        duration: 0.5,
        x: x,
        y: y,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(circle, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: "power2.out",
      });
    });
  });
};

// Counter Animation
export const initBounceOnAnim = (): void => {
  const bounceItems = gsap.utils.toArray<HTMLElement>(".bounce_animation .bounce__anim");
  const device_width = window.innerWidth;
  if (bounceItems.length > 0) {
    // Initial state
    gsap.set(bounceItems, { y: -100, opacity: 0 });

    if (device_width < 1023) {
      // Mobile / Tablet
      bounceItems.forEach((item) => {
        const counterTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
          }
        });

        counterTl.to(item, {
          y: 0,
          opacity: 1,
          ease: "bounce",
          duration: 1.5,
        });
      });
    } else {
      // Desktop
      gsap.to(bounceItems, {
        scrollTrigger: {
          trigger: ".bounce_animation",
          start: "top center+=300",
        },
        y: 0,
        opacity: 1,
        ease: "bounce",
        duration: 1.5,
        stagger: {
          each: 0.3,
        }
      });
    }
  }
}

//Hover WebGel Image
interface HoverItemOptions {
  parentSelector: string;
  hoverImgSelector: string;
}
export const initWebglHover = ({
  parentSelector = ".tp--hover-item",
  hoverImgSelector = ".tp--hover-img",
}: HoverItemOptions = { parentSelector: ".tp--hover-item", hoverImgSelector: ".tp--hover-img" }): void => {
  const items = document.querySelectorAll<HTMLElement>(hoverImgSelector);

  if (!items.length) return;

  items.forEach((item) => {
    const imgEl = item.querySelector<HTMLImageElement>("img");
    if (!imgEl) return;

    // Ensure image is loaded
    const runHover = () => {
      const parentItem = item.closest<HTMLElement>(parentSelector);
      if (!parentItem) return;

      const intensity = item.dataset.intensity ? parseFloat(item.dataset.intensity) : undefined;
      const speedIn = item.dataset.speedin ? parseFloat(item.dataset.speedin) : undefined;
      const speedOut = item.dataset.speedout ? parseFloat(item.dataset.speedout) : undefined;
      const displacementImage = item.dataset.displacement;

      const hoverInstance = new HoverEffect({
        parent: item,
        intensity,
        speedIn,
        speedOut,
        image1: imgEl.src,
        image2: imgEl.src,
        displacementImage,
        imagesRatio: imgEl.height / imgEl.width,
        hover: false,
      });

      parentItem.addEventListener("mouseenter", () => hoverInstance.next());
      parentItem.addEventListener("mouseleave", () => hoverInstance.previous());
    };

    if (imgEl.complete) {
      runHover();
    } else {
      imgEl.addEventListener("load", runHover);
    }
  });
};

// rotate-text-anim
export const initRotateTextAnim = (): void => {
  const rotateText = document.querySelector(".rotate-text-anim");
  if (rotateText) {
    // SplitText apply only if element exists
    const headingTitle = new SplitText(rotateText, { type: "chars" });
    const headingChars = headingTitle.chars;

    const tHero = gsap.timeline({
      scrollTrigger: {
        trigger: rotateText,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    tHero.from(headingChars, {
      rotate: 20,
      ease: "back.out",
      opacity: 0,
      duration: 1,
      stagger: 0.1
    });
  }
}

// tp-text-perspective
export const initTextPerspectiveAnim = (): void => {
  gsap.utils.toArray<HTMLElement>(".tp-text-perspective").forEach((splitTextLine) => {
    const delay_value = parseFloat(splitTextLine.getAttribute("data-delay") || "0.5");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: 'top 85%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none'
      }
    });
    const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" });

    tl.from(itemSplitted.lines, {
      duration: 1,
      delay: delay_value,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1
    });
  })
}

// scale-image-hover-anim
export const initScaleImageHoverAnim = (): void => {
  const items = document.querySelectorAll<HTMLElement>(".has-scale-image");

  if (!items.length) return;

  items.forEach((item) => {
    const imgSrc = item.getAttribute("data-img");
    const bgColor = item.getAttribute("data-bgcolor");

    // create hidden image div
    const hiddenImageDiv = document.createElement("div");
    hiddenImageDiv.className = "hidden-image";

    if (imgSrc) {
      hiddenImageDiv.style.backgroundImage = `url(${imgSrc})`;
    }

    if (bgColor) {
      hiddenImageDiv.style.backgroundColor = bgColor;
    }

    item.appendChild(hiddenImageDiv);

    // scroll animation
    gsap.to(item, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "back.out(4)",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
      },
    });

    // hover enter
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        duration: 0.3,
        borderRadius: "2px",
        scale: 3,
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      });
    });

    // hover leave
    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        duration: 0.3,
        borderRadius: "6px",
        scale: 1,
        boxShadow: "none",
      });
    });
  });
};

// section-slice-reveal-anim
export const initSectionSliceRevealAnim = (): void => {
  const sections = document.querySelectorAll<HTMLElement>(".section-triger");

  if (!sections.length) return;

  sections.forEach((section) => {
    const slices = section.querySelectorAll<HTMLElement>(".uncover_slice");
    const image = section.querySelector<HTMLElement>(".myimg");

    if (!slices.length || !image) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "50% bottom",
        markers: false,
      },
    });

    tl.to(
      slices,
      {
        height: 0,
        ease: "power4.inOut",
        duration: 0.6,
        stagger: { each: 0.3 },
      },
      "start"
    ).to(
      image,
      {
        scale: 1.3,
        duration: 1.5,
        ease: "power4.inOut",
      },
      "start"
    );
  });
};

// showcase-snap-slider
export const initShowcaseSnapSlider = (): void => {
  const snapSliderHolder = document.querySelector<HTMLElement>(".tp-snap-slider-holder");
  if (!snapSliderHolder) return;

  const snapSlides = gsap.utils.toArray<HTMLElement>(".tp-snap-slide");
  const snapSlidesImgMask = gsap.utils.toArray<HTMLElement>(".tp-snap-slide .img-mask");
  const snapCaptionWrapper = document.querySelector<HTMLElement>(".tp-snap-slider-captions");
  const snapCaptions = gsap.utils.toArray<HTMLElement>(".tp-snap-slide-caption");
  const snapThumbsWrapper = document.querySelector<HTMLElement>(".tp-snap-slider-thumbs");
  const snapThumbs = gsap.utils.toArray<HTMLElement>(".thumb-slide");

  if (!snapSlides.length) return;

  // Fade in images
  gsap.fromTo(
    snapSlidesImgMask,
    { opacity: 0.1 },
    {
      opacity: 1,
      ease: "sine.out",
      scrollTrigger: {
        trigger: snapSliderHolder,
        start: "top 100%",
        end: "+=100%",
        scrub: true,
      },
    }
  );

  // Fade out images
  gsap.fromTo(
    snapSlidesImgMask,
    { opacity: 1 },
    {
      opacity: 0.1,
      ease: "sine.out",
      scrollTrigger: {
        trigger: snapSliderHolder,
        start: "bottom 100%",
        end: "+=100%",
        scrub: true,
      },
    }
  );

  // Pin thumbnails
  if (snapThumbsWrapper) {
    ScrollTrigger.create({
      trigger: snapSlides,
      start: "top top",
      end: () => "+=" + window.innerHeight * (snapSlides.length - 1),
      pin: snapThumbsWrapper,
      scrub: true,
    });
  }

  // Thumbs scroll animation
  if (snapThumbs.length) {
    gsap.fromTo(
      snapThumbs,
      { y: 0 },
      {
        y: -snapThumbs[0].offsetHeight * (snapThumbs.length - 1),
        scrollTrigger: {
          trigger: snapSliderHolder,
          scrub: true,
          start: "top top",
          end: "+=" + window.innerHeight * (snapSlides.length - 1),
        },
        ease: "none",
      }
    );
  }

  // Pin captions
  if (snapCaptionWrapper) {
    ScrollTrigger.create({
      trigger: snapCaptionWrapper,
      start: "top top",
      end: () => "+=" + window.innerHeight * (snapSlides.length - 1),
      pin: true,
      scrub: true,
    });
  }

  // Captions animation
  if (snapCaptions.length) {
    gsap.fromTo(
      snapCaptions,
      { y: 0 },
      {
        y: -snapCaptions[0].offsetHeight * (snapCaptions.length - 1),
        scrollTrigger: {
          trigger: snapSliderHolder,
          scrub: true,
          start: "top top",
          end: "+=" + window.innerHeight * (snapSlides.length - 1),
        },
        ease: "none",
      }
    );
  }

  // Image transition animation
  snapSlides.forEach((slide, i) => {

    const imageWrappers = slide.querySelectorAll<HTMLElement>(".img-mask");
    const isLastSlide = i === snapSlides.length - 1;
    const isFirstSlide = i === 0;

    gsap.fromTo(
      imageWrappers,
      { y: isFirstSlide ? 0 : -window.innerHeight },
      {
        y: isLastSlide ? 0 : window.innerHeight,
        scrollTrigger: {
          trigger: slide,
          scrub: true,
          start: isFirstSlide ? "top top" : "top bottom",
          end: isLastSlide ? "top top" : undefined,
        },
        ease: "none",
      }
    );
  });
};
//text scale animation
export const textScaleAnimBottom = () => {
  const headings = document.querySelectorAll(".text-scale-anim");

  headings.forEach((heading) => {
    const textNodes: (Node | HTMLElement)[] = [];

    heading.childNodes.forEach((node) => {

      // TEXT NODE
      if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent?.split(" ") || [];

        words.forEach((word, index) => {
          const wordSpan = document.createElement("span");
          wordSpan.classList.add("tp-word-span");

          word.split("").forEach((letter) => {
            const letterSpan = document.createElement("span");
            letterSpan.classList.add("tp-letter-span");
            letterSpan.textContent = letter;

            wordSpan.appendChild(letterSpan);
          });

          textNodes.push(wordSpan);

          if (index < words.length - 1) {
            textNodes.push(document.createTextNode(" "));
          }
        });
      }

      // ELEMENT NODE
      else if (node.nodeType === Node.ELEMENT_NODE) {
        textNodes.push(node.cloneNode(true));
      }
    });

    heading.innerHTML = "";

    textNodes.forEach((node) => heading.appendChild(node));

    const letters = heading.querySelectorAll(".tp-letter-span");

    letters.forEach((letter) => {

      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          scaleY: 1.3,
          y: '-14%',
          duration: 0.2,
          ease: 'sine'
        });
      });

      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, {
          scaleY: 1,
          y: '0%',
          duration: 0.2,
          ease: 'sine'
        });
      });
    });
  });
};

// Text Effect Animation
export const initTextAnim = (): void => {
  const animatedTextElements = document.querySelectorAll<HTMLElement>(".text-anim");

  if (!animatedTextElements.length) return;

  const staggerAmount = 0.03;
  const translateXValue = 20;
  const delayValue = 0.1;
  const easeType = "power2.out";

  animatedTextElements.forEach((element) => {
    const animationSplitText = new SplitText(element, { type: "chars, words" });

    gsap.from(animationSplitText.chars, {
      duration: 1,
      delay: delayValue,
      x: translateXValue,
      autoAlpha: 0,
      stagger: staggerAmount,
      ease: easeType,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      },
    });
  });
};
// tp-video-img-wrap
export const initVideoImgAnim = (): void => {
  const ms = gsap.matchMedia();
  ms.add("(min-width: 768px)", () => {
    gsap.fromTo("#video video",
      {
        scale: 0.14,
        y: -334.66,
        borderRadius: '50rem'
      },
      {
        scale: 1,
        y: 0,
        ease: "power2.out",
        borderRadius: '0rem',
        scrollTrigger: {
          trigger: "#video",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        }
      }
    );
  });
}
// Initialize awards section thumbs animation
export const initAwardsThumbsAnimation = (): void => {
  if (!isMobile()) {
    const thumbsCaption = document.querySelector<HTMLDivElement>('.tp-awards-vp-start-thumbs-caption');
    const thumbParents = document.querySelectorAll<HTMLDivElement>('.tp-awards-vp-start-thumbs-wrapper .tp-awards-vp-start-move-thumb');
    const movingThumbs = document.querySelectorAll<HTMLDivElement>('.tp-awards-vp-move-thumbs-wrapper .tp-awards-vp-move-thumb-inner');
    const endThumbs = document.querySelectorAll<HTMLDivElement>('.tp-awards-vp-end-thumbs-wrapper .tp-awards-vp-end-move-thumb');

    // Reset DOM state: move each thumb back to its start parent first to allow proper re-init
    movingThumbs.forEach((thumb, index) => {
      if (thumbParents[index] && thumb.parentNode !== thumbParents[index]) {
        thumbParents[index].appendChild(thumb);
      }
    });

    // Animate the moving thumbs along with overlapping elements
    function animateThumbs(
      thumbs: HTMLDivElement[],
      endThumbs: HTMLDivElement[],
      parents: HTMLDivElement[]
    ) {
      thumbs.forEach((thumb, index) => {
        const state = Flip.getState(thumb);
        endThumbs[index].appendChild(thumb);

        const moveAnimation = Flip.from(state, {
          duration: 1,
          ease: 'power4.inOut',
        });

        const startOffset = parents[index].dataset.start!;
        const endOffset = parents[index].dataset.stop!;

        ScrollTrigger.create({
          trigger: parents[index],
          start: startOffset,
          end: endOffset,
          scrub: true,
          animation: moveAnimation,
        });
      });

      // Animate the start caption if it exists
      if (thumbsCaption) {
        gsap.to(thumbsCaption, {
          scrollTrigger: {
            trigger: thumbsCaption,
            start: () => {
              const startPin = (window.innerHeight - thumbsCaption.offsetHeight) / 2;
              return `top +=${startPin}`;
            },
            end: () => `+=${window.innerHeight}`,
            pin: true,
            pinSpacing: false,
            scrub: true,
          },
          opacity: 0,
          ease: "power1.inOut",
        });
      }
    }

    animateThumbs(
      Array.from(movingThumbs),
      Array.from(endThumbs),
      Array.from(thumbParents)
    );
  }
};

// tp-service-vp-item
export const initServiceVpAnimation = (): void => {
  const aw = gsap.matchMedia();
  aw.add("(min-width: 991px)", () => {
    const awardItems = document.querySelectorAll('.tp-service-vp-item');
    awardItems.forEach(function (div) {
      div.addEventListener('mouseenter', function () {
        gsap.to(div, {
          width: '100%',
          duration: 2,
          ease: 'expo.out'
        });
      });
      div.addEventListener('mouseleave', function () {
        gsap.to(div, {
          width: '73%',
          duration: 2,
          ease: 'expo.out'
        });
      });
    })
  })
}

//tp-vimeo-video-perspective
export const initPortfolioPerspective = (): void => {
  const projects = document.querySelectorAll<HTMLElement>(
    ".project-item.project-style-3.hover-play"
  );

  if (!projects.length) return;

  // apply perspective
  projects.forEach((project) => {
    project.style.perspective = "1500px";
    project.style.transformStyle = "preserve-3d";
    project.style.overflow = "visible";
  });

  const updateTransform = () => {
    const windowHeight = window.innerHeight;

    projects.forEach((project) => {
      const inner = project.querySelector<HTMLElement>(".project-item-inner");
      if (!inner) return;

      // reset for mobile
      if (window.innerWidth < 1024) {
        inner.style.transform = "none";
        inner.style.transition = "none";

        const img = inner.querySelector<HTMLImageElement>(
          ".tp-portfolio-vp-post-thumbnail img"
        );

        if (img) {
          img.style.transform = "none";
          img.style.transition = "none";
        }

        return;
      }

      const rect = project.getBoundingClientRect();

      let percent =
        (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);

      percent = Math.max(-1, Math.min(percent, 1));

      const rotateX = 30 * -percent + 0.756;
      const scale = (0.996976 - 0.105 * Math.abs(percent)).toFixed(6);

      inner.style.transform = `rotateX(${rotateX.toFixed(
        3
      )}deg) scale3d(${scale}, ${scale}, 1)`;

      inner.style.transition =
        "transform 0.6s cubic-bezier(0.25,1,0.5,1), opacity 0.6s cubic-bezier(0.25,1,0.5,1)";

      inner.style.transformStyle = "preserve-3d";
      inner.style.willChange = "transform, opacity";

      const img = inner.querySelector<HTMLImageElement>(
        ".tp-portfolio-vp-post-thumbnail img"
      );

      if (img) {
        const translateY = 20 * percent;

        img.style.transform = `translateY(${translateY.toFixed(2)}px)`;
        img.style.transition = "transform 0.6s cubic-bezier(0.25,1,0.5,1)";
        img.style.willChange = "transform";
      }
    });
  };

  let ticking = false;

  const handleScroll = () => {
    if (!projects[0] || !document.body.contains(projects[0])) {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      return;
    }

    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateTransform();
        ticking = false;
      });

      ticking = true;
    }
  };

  updateTransform();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
};

// Initialize text scale animation from bottom
export const initTextScaleAnimationFromBottom = (): void => {
  const headings = document.querySelectorAll(".text-scale-anim-bottom");

  headings.forEach((heading) => {
    const textNodes: (Node | HTMLElement)[] = [];

    heading.childNodes.forEach((node) => {

      // TEXT NODE
      if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent?.split(" ") || [];

        words.forEach((word, index) => {
          const wordSpan = document.createElement("span");
          wordSpan.classList.add("tp-word-span");

          word.split("").forEach((letter) => {
            const letterSpan = document.createElement("span");
            letterSpan.classList.add("tp-letter-span");
            letterSpan.textContent = letter;

            wordSpan.appendChild(letterSpan);
          });

          textNodes.push(wordSpan);

          if (index < words.length - 1) {
            textNodes.push(document.createTextNode(" "));
          }
        });
      }

      // ELEMENT NODE
      else if (node.nodeType === Node.ELEMENT_NODE) {
        textNodes.push(node.cloneNode(true));
      }
    });

    heading.innerHTML = "";

    textNodes.forEach((node) => heading.appendChild(node));

    const letters = heading.querySelectorAll(".tp-letter-span");

    letters.forEach((letter) => {

      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          scaleY: 1.3,
          y: '14%',
          duration: 0.2,
          ease: 'sine'
        });
      });

      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, {
          scaleY: 1,
          y: '0%',
          duration: 0.2,
          ease: 'sine'
        });
      });
    });
  });
};

// Portfolio perspective hover animation
export const initPerspectiveHover = (): void => {
  const projects = document.querySelectorAll<HTMLElement>(
    ".project-item.project-style-3.hover-play"
  );

  if (!projects.length) return;

  projects.forEach((project) => {
    project.style.perspective = "1500px";
    project.style.transformStyle = "preserve-3d";
    project.style.overflow = "visible";
  });

  const updateTransform = () => {
    if (window.innerWidth < 1024) {
      projects.forEach((project) => {
        const inner = project.querySelector<HTMLElement>(".project-item-inner");
        const img = inner?.querySelector<HTMLImageElement>(
          ".tp-portfolio-vp-post-thumbnail img"
        );

        if (inner) {
          inner.style.transform = "none";
          inner.style.transition = "none";
        }

        if (img) {
          img.style.transform = "none";
          img.style.transition = "none";
        }
      });

      return;
    }

    const windowHeight = window.innerHeight;

    projects.forEach((project) => {
      const inner = project.querySelector<HTMLElement>(".project-item-inner");

      if (!inner) return;

      const rect = project.getBoundingClientRect();

      let percent =
        (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);

      percent = Math.max(-1, Math.min(percent, 1));

      const rotateX = 30 * -percent + 0.756;
      const scale = (0.996976 - 0.105 * Math.abs(percent)).toFixed(6);

      inner.style.transform = `rotateX(${rotateX.toFixed(
        3
      )}deg) scale3d(${scale}, ${scale}, 1)`;

      inner.style.transition =
        "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)";

      inner.style.transformStyle = "preserve-3d";
      inner.style.willChange = "transform, opacity";

      const img = inner.querySelector<HTMLImageElement>(
        ".tp-portfolio-vp-post-thumbnail img"
      );

      if (img) {
        const translateY = 20 * percent;

        img.style.transform = `translateY(${translateY.toFixed(2)}px)`;
        img.style.transition =
          "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
        img.style.willChange = "transform";
      }
    });
  };

  let ticking = false;

  const handleScrollResize = () => {
    if (!projects[0] || !document.body.contains(projects[0])) {
      window.removeEventListener("scroll", handleScrollResize);
      window.removeEventListener("resize", handleScrollResize);
      return;
    }

    if (!ticking) {
      requestAnimationFrame(() => {
        updateTransform();
        ticking = false;
      });

      ticking = true;
    }
  };

  updateTransform();

  window.addEventListener("scroll", handleScrollResize);
  window.addEventListener("resize", handleScrollResize);
};

// .Split text into characters using SplitType
export const splitTextAnimation = (): (() => void) | void => {
  const text = new SplitType(".text", { types: "chars" });

  if (!text.chars) return;

  const chars = text.chars as HTMLElement[];

  let tl: gsap.core.Timeline | null = null;
  let activeIndex = -1;

  const weightByIndex = (i: number) => String((i + 1) * 70);

  function animate(index: number) {
    if (index === activeIndex) return;
    activeIndex = index;

    tl?.kill();

    tl = gsap.timeline();

    // center
    tl.to(chars[index], {
      fontWeight: weightByIndex(0),
      duration: 0.25,
      ease: "power2.out",
    }, "wave");

    // left side (reverse like original jQuery)
    chars.slice(0, index).reverse().forEach((char, i) => {
      if (tl) {
        tl.to(char, {
          fontWeight: weightByIndex(i),
          duration: 0.25,
          ease: "power2.out",
        }, "wave");
      }
    });

    // right side
    chars.slice(index + 1).forEach((char, i) => {
      if (tl) {
        tl.to(char, {
          fontWeight: weightByIndex(i),
          duration: 0.25,
          ease: "power2.out",
        }, "wave");
      }
    });
  }

  chars.forEach((char, index) => {
    char.addEventListener("mouseenter", () => animate(index));
  });

  return () => {
    tl?.kill();
  };
};

// scroll-rotate-img
export const initScrollRotateImages = (): void => {
  const elements = document.querySelectorAll<HTMLElement>(".scrool-rotate-img");

  elements.forEach((el) => {
    gsap.to(el, {
      rotation: 720,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  });
};

export const initScrollMovingText = (): void => {
  const sections = document.querySelectorAll<HTMLElement>(".moving-text");
  if (!sections.length) return;

  sections.forEach((section, index) => {
    const wrapper = section.querySelector<HTMLElement>(".wrapper-text");
    if (!wrapper) return;

    const sectionWidth = section.offsetWidth;
    const wrapperWidth = wrapper.scrollWidth;

    const isReverse = index % 2 !== 0;

    const xStart = isReverse ? sectionWidth - wrapperWidth : 0;
    const xEnd = isReverse ? 0 : sectionWidth - wrapperWidth;

    gsap.fromTo(
      wrapper,
      { x: xStart },
      {
        x: xEnd,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: 0.3,
        },
      }
    );
  });
};

// scale animation
export const initScrollScaleImages = (): void => {
  const scaleImage = document.querySelectorAll(".mil-scale-img");

  scaleImage.forEach((section) => {
    let value1 = parseFloat(section.getAttribute("data-value-1") || "1");
    const value2 = parseFloat(section.getAttribute("data-value-2") || "1");

    if (window.innerWidth < 1200) {
      value1 = Math.max(.95, value1);
    }

    gsap.fromTo(section, {
      ease: 'sine',
      scale: value1,
    }, {
      scale: value2,
      scrollTrigger: {
        trigger: section,
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    });
  })
}

// tp-service-pp-panel
export const initPinnedServiceScrollPanels = (): void => {
  const sv = gsap.matchMedia();
  sv.add("(min-width: 1199px)", () => {
    const tl = gsap.timeline();
    const projectpanels = document.querySelectorAll('.tp-service-pp-panel');
    const baseOffset = 130;
    const offsetIncrement = 130;

    projectpanels.forEach((section, index) => {
      const topOffset = baseOffset + (index * offsetIncrement);
      tl.to(section, {
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: `top ${topOffset}px`,
          end: "bottom 120%",
          endTrigger: '.tp-service-pp-pin',
          pinSpacing: false,
          markers: false,
        },
      });
    });
  })
}
// hover image-wrapper 
export const initServiceImageSlider = (): void => {
  if (typeof window === "undefined") return;

  const imageWrapper = document.querySelector<HTMLElement>(".image-wrapper");
  const imageSlider = document.querySelector<HTMLElement>(".image-slider");
  const projects = gsap.utils.toArray<HTMLElement>(".projects");
  const indexItems = document.querySelectorAll<HTMLElement>("[data-index-number]");
  const serviceArea = document.querySelectorAll<HTMLElement>(".tp-service-wd");

  if (!imageWrapper || !imageSlider || projects.length === 0) return;

  const projectCount = imageSlider.children.length || 1;
  const movePercent = 100 / projectCount;

  // -----------------------------
  // Hover events for index items
  // -----------------------------
  indexItems.forEach((el) => {
    const indexNumber = Number(el.dataset.indexNumber || 0);

    el.addEventListener("mouseenter", () => {
      gsap.to(imageWrapper, {
        opacity: 1,
        duration: 0.5,
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(imageWrapper, {
        opacity: 0,
        duration: 0.5,
      });
    });

    el.addEventListener("mousemove", () => {
      gsap.to(imageSlider, {
        y: -(movePercent * indexNumber) + "%",
        duration: 0.6,
        ease: "power2.out",
      });
    });
  });

  // -----------------------------
  // Floating image wrapper follow cursor
  // -----------------------------
  serviceArea.forEach((el) => {
    el.addEventListener("mousemove", (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();

      const relativeX = event.clientX - rect.left;
      const relativeY = event.clientY - rect.top;

      const offsetX = -200;
      const offsetY = 0;

      gsap.to(imageWrapper, {
        x: relativeX - offsetX,
        y: relativeY - offsetY,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });
};


// 19. section-triger-slicer

export const initSectionImageSlicer = (): void => {
  const triggerSlices = [...document.querySelectorAll('.section-triger')];

  triggerSlices.forEach((section) => {
    const slices = section.querySelectorAll(".uncover_slice");
    const image = section.querySelector(".myimg");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "50% bottom",
        markers: false,
      }
    });

    tl.to(slices, {
      height: 0,
      ease: 'power6.inOut',
      duration: 0.6,
      stagger: { each: 0.3 }
    }, 'start')
      .to(image, {
        scale: 1.3,
        duration: 1.5,
        ease: 'power6.inOut'
      }, 'start');
  })
}

// portfolio panel
export const initPortfolioPanelAnim = (): void => {
  const tl = gsap.timeline();
  const pr = gsap.matchMedia();
  pr.add("(min-width: 767px)", () => {
    const otherSections = document.querySelectorAll('.des-portfolio-panel')
    otherSections.forEach((section) => {
      gsap.set(otherSections, {
        scale: 1,
      });
      tl.to(section, {
        scale: .8,
        scrollTrigger: {
          trigger: section,
          pin: section,
          scrub: 1,
          start: 'top 0',
          end: "bottom 60%",
          endTrigger: '.des-portfolio-wrap',
          pinSpacing: false,
          markers: false,
        },
      })
    })
  })
}
// ar-scroll-image
export const initScrollImageAnim = (): void => {
  gsap.to(".ar-scroll-image", {
    xPercent: -10,
    scrollTrigger: {
      trigger: ".ar-banner-shape",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });
}

// cnt-portfolio-ptb
export const initPortfolioPinAnim = (): void => {
  const mm = gsap.matchMedia();
  mm.add("(min-width: 992px)", () => {
    // Common ScrollTrigger options
    const baseOptions = {
      scrub: 1,
      start: 'top 0%',
      end: 'bottom 80%',
      endTrigger: '.cnt-portfolio-ptb',
      pinSpacing: false,
      markers: false,
    };
    // For px-step-item
    document.querySelectorAll('.cnt-portfolio-video-wrapper').forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          pin: item,
          ...baseOptions,
        }
      });
    });
    // For px-step-card with left/right rotation
    document.querySelectorAll('.cnt-portfolio-video-card').forEach((card, i) => {
      const rotateValue = i % 2 === 0 ? -5 : 5;
      gsap.to(card, {
        rotate: rotateValue,
        scrollTrigger: {
          trigger: card,
          pin: card,
          ...baseOptions,
          start: 'top 10%',
          end: 'bottom 110%'
        }
      });
    });
  });
}

// tp-skill-pb-panel
export const initSkillPanelAnim = (): void => {
  const skillPanel = document.querySelectorAll(".tp-skill-pb-panel-wrap");

  const pp = gsap.matchMedia();

  pp.add("(min-width: 1200px)", () => {
    if (skillPanel.length) {
      const sections = gsap.utils.toArray(".tp-skill-pb-panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".tp-skill-pb-panel-wrap",
          start: "top top",
          pin: true,
          scrub: 1,
          end: () => {
            const el = document.querySelector(
              ".tp-skill-pb-panel-wrap"
            ) as HTMLElement | null;

            return "+=" + (el?.offsetWidth || 0);
          },
        },
      });
    }
  });
};

// Fade In Animation with Scroll Support
export const applyFadeInAnimation = (): void => {
  const elements = document.querySelectorAll(".has_fade_anim");

  if (!elements.length) return;

  const fadeItems = gsap.utils.toArray<HTMLElement>(".has_fade_anim");

  fadeItems.forEach((el) => {
    const direction = el.getAttribute("data-fade-from") || "bottom";
    const duration = Number(el.getAttribute("data-duration")) || 1.15;
    const offset = Number(el.getAttribute("data-fade-offset")) || 50;
    const delay = Number(el.getAttribute("data-delay")) || 0.15;
    const ease = el.getAttribute("data-ease") || "power2.out";
    const onScroll = el.getAttribute("data-on-scroll") || "1";

    const animationConfig: gsap.TweenVars = {
      opacity: 0,
      duration,
      delay,
      ease,
    };

    // Direction handling
    if (direction === "top") animationConfig.y = -offset;
    if (direction === "bottom") animationConfig.y = offset;
    if (direction === "left") animationConfig.x = -offset;
    if (direction === "right") animationConfig.x = offset;

    // Scroll trigger
    if (onScroll === "1") {
      animationConfig.scrollTrigger = {
        trigger: el,
        start: "top 85%",
      };
    }

    gsap.from(el, animationConfig);
  });
};


// portfolio animation start
export const initPortfolioAnimation = (): void => {
  const itemAnime = document.querySelectorAll('.tp-item-anime');
  const itemAnimeMd = document.querySelectorAll('.tp-item-anime-md');

  // LARGE
  if (itemAnime.length > 0) {
    gsap.set('.tp-item-anime.marque', {
      x: '25%',
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.tp-item-anime-area',
        start: '-1000 10%',
        end: 'bottom 20%',
        scrub: true,
        invalidateOnRefresh: true,
      },
    }).to('.tp-item-anime.marque', {
      x: '-100%',
    });
  }

  // MEDIUM
  if (itemAnimeMd.length > 0) {
    gsap.set('.tp-item-anime-md.marque', {
      x: '2%',
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.tp-item-anime-area-md',
        start: '-100 20%',
        end: 'bottom 20%',
        scrub: true,
        invalidateOnRefresh: true,
      },
    }).to('.tp-item-anime-md.marque', {
      x: '-10%',
    });
  }
};

// // 13. button hover animation
// export const initButtonHoverAnimation = (): void => {

// 	$('.tp-btn-rounded').on('mouseenter', function (e) {
// 		var x = e.pageX - $(this).offset().left;
// 		var y = e.pageY - $(this).offset().top;

// 		$(this).find('.tp-btn-circle-dot').css({
// 			top: y,
// 			left: x
// 		});
// 	});

// 	}

export const initButtonHoverAnimation = (): void => {
  const buttons = document.querySelectorAll<HTMLElement>('.tp-btn-rounded');

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', function (e) {
      const rect = this.getBoundingClientRect();

      const x = e.pageX - (rect.left + window.scrollX);
      const y = e.pageY - (rect.top + window.scrollY);

      const dot = this.querySelector<HTMLElement>('.tp-btn-circle-dot');

      if (dot) {
        dot.style.top = `${y}px`;
        dot.style.left = `${x}px`;
      }
    });
  });
};

// tp-funfact-panel
export const initFunfactAnimation = (): void => {
  if (typeof window === "undefined") return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1200px)", () => {
    const container = document.querySelector<HTMLElement>(".tp-funfact-panel-wrap");
    if (!container) return;

    const sections = gsap.utils.toArray<HTMLElement>(".tp-funfact-panel");
    if (sections.length === 0) return;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 70px",
        pin: true,
        scrub: 1,
        end: () => `+=${container.offsetWidth}`,
      },
    });
  });
};

// portfolio__item animation (safe check)
export const initPortfolioItemAnimation = (): void => {
  const portfolioLists = gsap.utils.toArray<HTMLElement>(".portfolio__item");
  if (portfolioLists.length > 0) {
    portfolioLists.forEach((portfolio) => {
      gsap.set(portfolio, {
        opacity: 0.7,
        transform: "perspective(4000px) translate3d(0px, 0px, 0px) rotateX(90deg) scale(0.5, 0.5)"
      });

      const t1 = gsap.timeline();
      t1.set(portfolio, { position: "relative" });

      t1.to(portfolio, {
        scrollTrigger: {
          trigger: portfolio,
          scrub: 2,
          start: "top bottom+=100",
          end: "bottom center",
          markers: false
        },
        scale: 1,
        rotateX: 0,
        opacity: 1,
        duration: 1.5
      });
    });
  }
};
// Portfolio Animation
export const initPortfolioTextAnimation = (): void => {
  const device_width = window.innerWidth;
	
	if (device_width > 767) {
		const portfolioArea = document.querySelector(".portfolio__area");
		const portfolioText = document.querySelector(".portfolio__text");

		if (portfolioArea && portfolioText) {
			const portfolioLine = gsap.timeline({
				scrollTrigger: {
					trigger: portfolioArea,
					start: "top center-=200",
					pin: portfolioText,
					end: "bottom bottom+=10",
					markers: false,
					pinSpacing: false,
					scrub: 1,
				}
			});

			portfolioLine.to(portfolioText, { scale: 3, duration: 1 });
			portfolioLine.to(portfolioText, { scale: 3, duration: 1 });
			portfolioLine.to(portfolioText, { scale: 1, duration: 1 }, "+=2");

			gsap.to(portfolioText, {
			scrollTrigger: {
				trigger: portfolioArea,
				start: "top center-=100",
				end: "bottom bottom+=10",
				scrub: 1
			},
			opacity: 0
			});
		}
	}
};

// tp-fixed-title-wrap
export const initFixedTitleAnimation = (): void => {
	const pc = gsap.matchMedia();
	pc.add("(min-width: 992px)", () => {
		const wrapper = document.querySelector(".tp-fixed-title-wrap");
		if (wrapper) {
			gsap.timeline({
				scrollTrigger: {
					trigger: wrapper,
					start: "top center-=450",
					end: "bottom 70%",
					pin: ".tp-fixed-title",
					markers: false,
					pinSpacing: false,
					scrub: 1,
				},
			});
		}
	});
};

// Perspective slider animation
export const initPerspectiveSlider = (): void => {
  const innerEl = document.querySelector('.tp-perspective-slider .tp-perspective-main .tp-perspective-inner');
  if (innerEl) {
    gsap.set('.tp-perspective-slider .tp-perspective-main .tp-perspective-inner', { perspective: 60 });

    const slides = gsap.utils.toArray<HTMLElement>('.tp-perspective-slider .tp-perspective-main .tp-perspective-inner .tp-perspective-image');
    slides.forEach((slide) => {
      gsap.fromTo(slide, {
        scaleX: 1,
        z: '0vh'
      }, {
        scaleX: 1,
        z: '-2vh',
        scrollTrigger: {
          trigger: slide,
          start: "top+=150px bottom",
          end: "bottom top",
          immediateRender: false,
          scrub: 0.1,
        }
      });
    });
  }
};
