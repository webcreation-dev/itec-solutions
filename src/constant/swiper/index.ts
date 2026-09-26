import { SwiperOptions } from "swiper/types";

// brand swiper slider active
export const brand_text_slider_params: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 12000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};

// dgm-brand-active
export const dgm_brand_active = {
    slidesPerView: 6,
    loop: true,
    autoplay: true,
    spaceBetween: 0,
    speed: 1000,
    breakpoints: {
        '1600': { slidesPerView: 6 },
        '1400': { slidesPerView: 5 },
        '1200': { slidesPerView: 4 },
        '992': { slidesPerView: 4 },
        '768': { slidesPerView: 3 },
        '576': { slidesPerView: 3 },
        '0': { slidesPerView: 2 },
    },
    a11y: false,
}
// tp-testimonial-it-slider
export const testimonial_active = {
    slidesPerView: 4,
    loop: true,
    autoplay: false,
    spaceBetween: 30,
    pagination: {
        el: ".tp-testimonial-it-pagenation",
        clickable: true,
    },
    breakpoints: {
        '1200': { slidesPerView: 4 },
        '992': { slidesPerView: 3 },
        '768': { slidesPerView: 1 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
    a11y: false,
}

// brand-slider active
export const al_brand_slide = {
    loop: true,
    freeMode: true,
    spaceBetween: 30,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 4000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};

// al-text-slider-seo-active
export const al_text_slider_seo_active = {
    loop: true,
    freeMode: true,
    slidesPerView: "auto" as const,
    spaceBetween: 55,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 10000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
}
// al-testimonial-seo-active
export const al_testimonial_seo_active = {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    spaceBetween: 50,
    speed: 1000,
    pagination: {
        el: ".al-testimonial-seo-dot",
        clickable: true,
    },
    a11y: false,
};

//  al-text-pg-slider-active
export const al_text_slide_pg = {
    loop: true,
    freeMode: true,
    slidesPerView: "auto" as const,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 4000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};

// al-footer-pg-slide-active
export const al_footer_slide_pg = {
    loop: true,
    freeMode: true,
    slidesPerView: "auto" as const,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 16000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
}

// tp-brand-slide-active
export const tp_brand_slide_active = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto' as const,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 8000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};

// tp-testimonial-slider-active
export const testimonial_slide_active = {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    spaceBetween: 0,
    speed: 1000,
    navigation: {
        prevEl: '.ar-testimonial-prev',
        nextEl: '.ar-testimonial-next',
    },
    pagination: {
        el: "#paginations",
        type: "custom" as const,
        renderCustom: (swiper: unknown, current: number, total: number) => {
            const zero = total > 9 ? "" : "0";
            const index = zero + current;
            const all = zero + total;
            return `<div class="shop-slider-pagination"><span>${index}</span><span>${all}</span></div>`;
        },
    },
};

// tp-testimonial-ai-slide-active
export const tp_testimonial_ai_slide_active = {
    spaceBetween: 80,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: true,
    centeredSlides: true,
    speed: 600,
    effect: "fade",
    navigation: {
        nextEl: '.tp-testimonial-ai-next',
        prevEl: '.tp-testimonial-ai-prev',
    },
};
// tp-service-cst-slider
export const tp_service_slider_active = {
    slidesPerView: 6,
    loop: true,
    autoplay: false,
    spaceBetween: 27,
    breakpoints: {
        '1200': { slidesPerView: 3 },
        '992': { slidesPerView: 2 },
        '768': { slidesPerView: 1 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
    a11y: false,
}
// tp-testimonial-cst-slider
export const tp_testimonial_cst_slider = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    pagination: {
        el: ".tp-testimonial-cst-pagenation",
        clickable: true,
    },
}

// tp-service-it-slider
export const tp_service_it_slider = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    pagination: {
        el: ".tp-service-it-pagenation",
        clickable: true,
    },
    breakpoints: {
        '1200': { slidesPerView: 3 },
        '992': { slidesPerView: 2 },
        '768': { slidesPerView: 2 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    }
};
// construction-brand-slider
export const brand_slider = {
    loop: true,
    freeMode: true,
    slidesPerView: "auto" as const,
    spaceBetween: 165,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 2000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};

// al-text-slider-seo-active
export const architecture_brand_slider = {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto' as const,
    spaceBetween: 100,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 10000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
}

//  al-category-shop-slider-active
export const category_shop_slider: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragClass: 'al-swiper-scrollbar-drag',
        snapOnRelease: true,
    },
    breakpoints: {
        '1200': { slidesPerView: 5 },
        '992': { slidesPerView: 4 },
        '768': { slidesPerView: 3 },
        '576': { slidesPerView: 2 },
        '0': { slidesPerView: 1 },
    },
};

// al-category-shop-slider-active
export const featured_shop_slider: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: ".al-featured-shop-slider-button-next",
        prevEl: ".al-featured-shop-slider-button-prev",
    },
    breakpoints: {
        '1200': { slidesPerView: 3 },
        '992': { slidesPerView: 3 },
        '768': { slidesPerView: 2 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
}
// al-trending-shop-slider-active
export const trending_shop_slider_active: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    pagination: {
        el: ".al-trending-shop-slider-dot",
        clickable: true,
    },
    breakpoints: {
        '1200': { slidesPerView: 2 },
        '992': { slidesPerView: 2 },
        '768': { slidesPerView: 2 },
        '576': { slidesPerView: 2 },
        '0': { slidesPerView: 1 },
    },
}
// al-testimonial-shop-slider-active
export const testimonial_shop_slider_active: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".al-testimonial-shop-slider-dot",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".al-testimonial-shop-next",
        prevEl: ".al-testimonial-shop-prev",
    },
}
// creative-brand-active
export const creative_brand_slider_active: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: 6,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 3000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    breakpoints: {
        '1600': { slidesPerView: 6 },
        '1400': { slidesPerView: 5 },
        '1200': { slidesPerView: 5 },
        '992': { slidesPerView: 4 },
        '768': { slidesPerView: 3 },
        '576': { slidesPerView: 3 },
        '0': { slidesPerView: 2 },
    },
};

//tp-testimonial-pb-slider
export const testimonial_pb_slider_active: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    spaceBetween: 30,
    pagination: {
        el: ".tp-testimonial-pb-pagenation",
        clickable: true,
    },
}

// portfolio-2-slider-active
export const portfolio_2_slider_active: SwiperOptions = {
    slidesPerView: 6,
    loop: true,
    autoplay: false,
    spaceBetween: 24,
    breakpoints: {
        '1200': { slidesPerView: 3 },
        '992': { slidesPerView: 2 },
        '768': { slidesPerView: 1 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
};
// tp-testimonial-2-slider-active
export const testimonial_2_slider_active: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    speed: 1000,
    a11y: false,

    navigation: {
        prevEl: ".tp-shop-prev",
        nextEl: ".tp-shop-next",
    },

    pagination: {
        el: "#paginations",
        type: "custom",
        renderCustom: function (swiper, current, total) {
            const zero = total > 9 ? "" : "0";
            return `
        <div class="shop-slider-pagination">
          <span>${zero + current}</span>
          <span>${zero + total}</span>
        </div>
      `;
        },
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
};

// tp-text-md-slider-active
export const tp_text_md_slider_active: SwiperOptions = {
    loop: true,
    freeMode: true,
    slidesPerView: "auto" as const,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 10000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
};

// tp-testimonial-md-slide-active
export const tp_testimonial_md_slide_active: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    spaceBetween: 0,
    speed: 1000,
    a11y: false,
};

// tp-service-sa-slider
export const tp_service_sa_slider: SwiperOptions = {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 24,
    pagination: {
        el: ".tp-service-sa-pagination",
        clickable: true,
    },
    breakpoints: {
        '1200': { slidesPerView: 3 },
        '992': { slidesPerView: 2 },
        '768': { slidesPerView: 2 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
    a11y: false,
};

// tp-testimonial-sa-slider
export const tp_testimonial_sa_slider: SwiperOptions = {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".tp-service-sa-pagenation",
        clickable: true,
    },
    breakpoints: {
        '1200': { slidesPerView: 3 },
        '992': { slidesPerView: 2 },
        '768': { slidesPerView: 2 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
    a11y: false,
};
// tp-testimonial-sa-slider
export const startup_agency_testimonial_slider: SwiperOptions = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    pagination: {
        el: ".tp-service-sa-pagenation",
        clickable: true,
    },
    breakpoints: {
        '1200': { slidesPerView: 3 },
        '992': { slidesPerView: 2 },
        '768': { slidesPerView: 1 },
        '576': { slidesPerView: 1 },
        '0': { slidesPerView: 1 },
    },
};