import { AnalyticsChartIcon, BrandingIcon, ClickAdvertisingIcon, CreativeDesignIcon, DiagnosticLabIcon, DietConsultationIcon, ECommerceSEOIcon, ExteriorDesignIcon, FinancialPlanningIcon, InteriorDesignIcon, MarketResearchIcon, MarketsAndTrendsIcon, PaediatricCareIcon, ProcessOptimizationIcon, ResearchIcon, SEOAnalyticsIcon, SettingsGearIcon, StackedLayersIcon, UIDevelopmentIcon, UiUxIcon, UrbanDesignIcon, WebDevIcon, WebOptimizationIcon, WomensHealthIcon } from "@/svg";
import { aiServiceBoxDt, aiServiceItemDt, BaseService, digitalServiceDT } from "@/types";

// ================================
// Service Data
// ================================

export interface MultiHomeServiceDT {
    [key: string]: BaseService[];
}

export const serviceData: MultiHomeServiceDT = {
    // IT Consulting Home
    itConsulting: [
        {
            id: 1,
            title: "Financial Planning",
            slug: "financial-planning",
            img: "/assets/img/update-2/service/thumb-1.jpg",
            description: "Smart financial growth solutions.",
            icon: FinancialPlanningIcon,
            bgColor: "#7CEBFF",
            delay: ".3",
        },
        {
            id: 2,
            title: "Market Research",
            slug: "market-research",
            img: "/assets/img/update-2/service/thumb-2.jpg",
            description: "Data-driven market analysis.",
            icon: MarketResearchIcon,
            bgColor: "#B4E717",
            delay: ".5",
        },
        {
            id: 3,
            title: "Process Optimization",
            slug: "process-optimization",
            img: "/assets/img/update-2/service/thumb-3.jpg",
            description: "Operational efficiency solutions.",
            icon: ProcessOptimizationIcon,
            bgColor: "#FFD7FC",
            delay: ".7",
        },
    ],
    // SEO Agency Home
    seoAgency: [
        {
            id: 1,
            icon: UIDevelopmentIcon,
            title: "UI Development",
            slug: "ui-development",
            description: "Do you want to take control of your own SEO and save money? If so, then you need to try Aleric.",
            delay: ".3"
        },
        {
            id: 2,
            icon: WebOptimizationIcon,
            title: "Web Optimization",
            slug: "web-optimization",
            delay: ".4",
            description: "Do you want to take control of your own SEO and save money? If so, then you need to try Aleric.",
            bgColor: "#a5d3fa"
        },
        {
            id: 3,
            icon: SEOAnalyticsIcon,
            title: "SEO Analytics",
            slug: "seo-analytics",
            delay: ".5",
            description: "Do you want to take control of your own SEO and save money? If so, then you need to try Aleric.",
            bgColor: "#d1c5f5"
        },
        {
            id: 4,
            icon: ECommerceSEOIcon,
            title: "E-Commerce SEO",
            slug: "e-commerce-seo",
            delay: ".6",
            description: "Do you want to take control of your own SEO and save money? If so, then you need to try Aleric.",
            bgColor: "#a3dcc6"
        },
        {
            id: 5,
            icon: ResearchIcon,
            title: "Keyword Research",
            slug: "keyword-research",
            delay: ".3",
            description: "Do you want to take control of your own SEO and save money? If so, then you need to try Aleric.",
            bgColor: "#dbc5f2"
        },
        {
            id: 6,
            icon: MarketsAndTrendsIcon,
            title: "Markets & Trends",
            slug: "markets-trends",
            delay: ".4",
            description: "Do you want to take control of your own SEO and save money? If so, then you need to try Aleric.",
            bgColor: "#ccdcb3"
        },
        {
            id: 7,
            icon: ClickAdvertisingIcon,
            title: "Click Advertising",
            slug: "click-advertising",
            delay: ".5",
            description: "Do you want to take control of your own SEO and save money? If so, then you need to try Aleric.",
            bgColor: "#f7a5d6"
        },
        {
            id: 8,
            icon: ResearchIcon,
            title: "Branding Ideas",
            slug: "branding-ideas",
            delay: ".6",
            description: "Do you want to take control of your own SEO and save money? If so, then you need to try Aleric.",
            bgColor: "#efd49d"
        },
    ],
    //personal portfolio
    personalPortfolio: [
        {
            id: 1,
            serialNumber: "01.",
            title: "UI/UX Design",
            slug: "ui-ux-design",
            description:
                "Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.",
            image: "/assets/img/service/pp/pp.jpg",
            categories: ["UX Design", "User Testing", "Motion Design"],
        },
        {
            id: 2,
            serialNumber: "02.",
            title: "User Research",
            slug: "user-research",
            description:
                "Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.",
            image: "/assets/img/service/pp/pp-2.jpg",
            categories: ["UX Design", "User Testing", "Motion Design"],
        },
        {
            id: 3,
            serialNumber: "03.",
            title: "Branding",
            slug: "branding",
            description:
                "Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.",
            image: "/assets/img/service/pp/pp-3.jpg",
            categories: ["UX Design", "User Testing", "Motion Design"],
        },
        {
            id: 4,
            serialNumber: "04.",
            title: "3D & Motion",
            slug: "3d-motion",
            description:
                "Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.",
            image: "/assets/img/service/pp/pp-4.jpg",
            categories: ["UX Design", "User Testing", "Motion Design"],
        },
    ],
    webDesignAgency: [
        {
            id: 1,
            title: "Branding Design",
            slug: "branding-design",
            description: "It combines elements like logos, color palettes, typography, & graphic.",
            categories: ["Logo Design", "Graphics Design", "Style Guides"],
        },
        {
            id: 2,
            title: "E-commerce Solution",
            slug: "e-commerce-solution",
            description: "It combines elements like logos, color palettes, typography, & graphic.",
            categories: ["Integration", "Payment Gateway", "Style Guides"],
        },
        {
            id: 3,
            title: "Web Design",
            slug: "web-design",
            description: "It combines elements like logos, color palettes, typography, & graphic.",
            categories: ["UI/UX Design", "Typography", "Style Guides"],
        },
        {
            id: 4,
            title: "Digital Marketing",
            slug: "digital-marketing",
            description: "It combines elements like logos, color palettes, typography, & graphic.",
            categories: ["Affiliate", "Email Marketing", "Campaign"],
        },
        {
            id: 5,
            title: "Web Development",
            slug: "web-development",
            description: "It combines elements like logos, color palettes, typography, & graphic.",
            categories: ["UI/UX Design", "Development", "Q/A Testing"],
        },
    ],
    construction: [
        {
            id: 1,
            title: "Études techniques",
            slug: "etudes-techniques",
            description: "Études de faisabilité, conception et coordination des expertises.",
            icon: UrbanDesignIcon,
            delay: ".3",
        },
        {
            id: 2,
            title: "Génie civil",
            slug: "genie-civil",
            description: "Solutions techniques pour les ouvrages et les infrastructures.",
            icon: InteriorDesignIcon,
            delay: ".4",
        },
        {
            id: 3,
            title: "Maîtrise d&apos;œuvre",
            slug: "maitrise-oeuvre",
            description: "Pilotage, coordination et suivi de l&apos;exécution des travaux.",
            icon: ExteriorDesignIcon,
            delay: ".5",
        },
        {
            id: 4,
            title: "Développement immobilier",
            slug: "developpement-immobilier",
            description: "Accompagnement de projets immobiliers conçus pour durer.",
            icon: CreativeDesignIcon,
            delay: ".6",
        },

    ],
    //ai-agency home service
    aiAgency: [
        {
            id: 1,
            title: "Guaranteed safety",
            slug: "guaranteed-safety",
            description: "Powerful features to help you manage money smarter.",
            icon: StackedLayersIcon,
        },
        {
            id: 2,
            title: "Fast performance",
            slug: "fast-performance",
            description: "Powerful features to help you manage money smarter.",
            icon: AnalyticsChartIcon,
        },
        {
            id: 3,
            title: "AI Integration",
            slug: "ai-integration",
            description: "Powerful features to help you manage money smarter.",
            icon: SettingsGearIcon,
        }
    ],
    creativeAgency: [
        {
            id: 1,
            iconType: "Nexus",
            title: "Branding Design & Identity",
            slug: "branding-design-identity",
            description:
                "We craft distinctive brand identities that communicate your values, build trust, and make your business instantly recognizable.",
            fadeFrom: "left",
        },
        {
            id: 2,
            iconType: "DualPanel",
            title: "Website & Digital Design",
            slug: "website-digital-design",
            description:
                "We design modern, responsive digital experiences that are visually engaging, user-friendly, and conversion-focused.",
            fadeFrom: "bottom",
        },
        {
            id: 3,
            iconType: "QuadCore",
            title: "Strategy & Bold Consulting",
            slug: "strategy-bold-consulting",
            description:
                "We help you define clear business strategies and bold creative directions that drive growth and long-term impact.",
            fadeFrom: "right",
        }
    ],
    medicalFeature: [
        {
            id: 1,
            image: "/assets/img/feature/icon.png",
            title: "Lab Test Booking",
            slug: "lab-test-booking",
            description: "Easily book lab tests online with fast, accurate results and doorstep sample collection.",
            bgColor: "#f1eeff",
            delay: ".3"
        },
        {
            id: 2,
            image: "/assets/img/feature/icon-2.png",
            title: "Insurance Support",
            slug: "insurance-support",
            description: "Get complete assistance with your health insurance claims and coverage for a hassle-free experience.",
            bgColor: "#ebffe4",
            delay: ".5"
        },
        {
            id: 3,
            image: "/assets/img/feature/icon-3.png",
            title: "Health Blog & Tips",
            slug: "health-blog-tips",
            description: "Explore expert health articles and tips to stay informed and maintain a healthier lifestyle.",
            bgColor: "#fff7f3",
            delay: ".7"
        },
        {
            id: 4,
            image: "/assets/img/feature/icon-4.png",
            title: "Insurance Support",
            slug: "insurance-support",
            description: "Access round-the-clock medical assistance and professional guidance whenever you need it.",
            bgColor: "#e7f3ff",
            delay: ".9"
        }
    ],
    medicalService: [
        {
            id: 1,
            title: "Women's Health",
            slug: "womens-health",
            description: "Comprehensive care focused on women's wellness, including reproductive health and routine checkups.",
            delay: ".3",
            icon: WomensHealthIcon
        },
        {
            id: 2,
            title: "Paediatric Care",
            slug: "paediatric-care",
            description: "Specialized healthcare services for infants and children to ensure healthy growth and development.",
            delay: ".5",
            icon: PaediatricCareIcon
        },
        {
            id: 3,
            title: "Diagnostic Lab Tests",
            slug: "diagnostic-lab-tests",
            description: "Accurate and reliable lab testing services to support quick diagnosis and effective treatment.",
            delay: ".7",
            icon: DiagnosticLabIcon
        },
        {
            id: 4,
            title: "Diet Consultation",
            slug: "diet-consultation",
            description: "Personalized nutrition plans and expert guidance to help you maintain a healthy lifestyle.",
            delay: ".9",
            icon: DietConsultationIcon
        },
    ],
    startupAgency: [
        {
            id: 1,
            icon: BrandingIcon,
            title: "Branding Design",
            slug: "branding-design",
            description: "Branding is more than just a logo—it’s the foundation of your startup’s identity, credibility, and growth",
        },
        {
            id: 2,
            icon: UiUxIcon,
            title: "UI/UX Design",
            slug: "ui-ux-design",
            description: "Branding is more than just a logo—it’s the foundation of your startup’s identity, credibility, and growth",
        },
        {
            id: 3,
            icon: WebDevIcon,
            title: "Web Development",
            slug: "web-development",
            description: "Branding is more than just a logo—it’s the foundation of your startup’s identity, credibility, and growth",
        },
        {
            id: 4,
            icon: UiUxIcon,
            title: "Product Design",
            slug: "product-design",
            description: "Branding is more than just a logo—it’s the foundation of your startup’s identity, credibility, and growth",
        },
    ]
};

//digital agency services data
export const digitalAgencyServices: digitalServiceDT[] = [
    {
        title: "Design",
        delay: ".6",
        items: [
            "UI/UX Design",
            "Branding Design",
            "Web Design",
            "Graphics Design",
            "3D Art",
        ],
    },
    {
        title: "Tech",
        delay: ".7",
        items: [
            "Web Development",
            "Software Development",
            "Quality Assurance",
            "Mobile App",
            "iOS App Development",
            "Technical Support",
            "Quality Assurance",
        ],
    },
    {
        title: "Marketing",
        delay: ".8",
        items: [
            "Digital Marketing",
            "Email Marketing",
            "Content Marketing",
            "Video Production",
            "Marketing Automation",
            "Affiliate Marketing",
            "SEO Optimized",
        ],
    },
];

//Ai Startup Services data
export const aiServicesData: aiServiceItemDt[] = [
    { id: 1, title: "Development" },
    { id: 2, title: "Powered Data Analytics" },
    { id: 3, title: "Language Processing" },
    { id: 4, title: "Apps & Platforms" },
    { id: 5, title: "MVP Startups" },
];
//Ai Startup Services data
export const aiServiceBoxesData: aiServiceBoxDt[] = [
    {
        id: 1,
        title: "Consulting",
        img: "/assets/img/service/ai/thumb.jpg",
        delay: ".3",
    },
    {
        id: 2,
        title: "Data Analytics",
        img: "/assets/img/service/ai/thumb-2.jpg",
        delay: ".5",
    },
    {
        id: 3,
        title: "AI Chatbots",
        img: "/assets/img/service/ai/thumb-3.jpg",
        delay: ".7",
    },
    {
        id: 4,
        title: "AI Integration",
        img: "/assets/img/service/ai/thumb-4.jpg",
        delay: ".9",
    },
];
//Business Consulting data
export const businessConsultingServices = [
    {
        id: 1,
        img: "/assets/img/service/cst/thumb.jpg",
        title: "Finance consulting",
        desc: "Finance consulting involves providing expert advice to businesses, individuals, or organizations",
        link: "/service-details-2",
    },
    {
        id: 2,
        img: "/assets/img/service/cst/thumb-2.jpg",
        title: "Marketing consulting",
        desc: "Marketing consulting involves providing expert advice and strategies to businesses to improve",
        link: "/service-details-2",
    },
    {
        id: 3,
        img: "/assets/img/service/cst/thumb-3.jpg",
        title: "Business consulting",
        desc: "Finance consulting involves providing expert advice to businesses, individuals, or organizations",
        link: "/service-details-2",
    },
    {
        id: 4,
        img: "/assets/img/service/cst/thumb-2.jpg",
        title: "Branding Design",
        desc: "Branding is more than just a logo—it’s the foundation of your startup’s identity.",
        link: "/service-details-2",
    }
];

//Medical home features data
export const medicalFeatures = [
    {
        id: 1,
        image: "/assets/img/feature/icon.png",
        title: "Lab Test Booking",
        bgColor: "#f1eeff",
        delay: ".3"
    },
    {
        id: 2,
        image: "/assets/img/feature/icon-2.png",
        title: "Insurance Support",
        bgColor: "#ebffe4",
        delay: ".5"
    },
    {
        id: 3,
        image: "/assets/img/feature/icon-3.png",
        title: "Health Blog & Tips",
        bgColor: "#fff7f3",
        delay: ".7"
    },
    {
        id: 4,
        image: "/assets/img/feature/icon-4.png",
        title: "Insurance Support",
        bgColor: "#e7f3ff",
        delay: ".9"
    }
]
