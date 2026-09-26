import { PlanDT } from "@/types";

export const yearlyPlans: PlanDT[] = [
    {
        name: "Basic",
        price: "Free",
        features: [
            "Email Marketing",
            "E-Commerce SEO",
            "Custom Forms",
            "Traffic Analytics",
        ],
        active: true,
    },
    {
        name: "Essentials",
        price: 99,
        features: [
            "Email Marketing",
            "SSL Security",
            "Sales Automation Tools",
            "Traffic Analytics",
        ],
    },
    {
        name: "Platinum",
        price: 199,
        features: [
            "E-Commerce SEO",
            "SSL Security",
            "24/7 Customer Support",
            "Custom Forms",
        ],
    },
];

export const monthlyPlans: PlanDT[] = [
    {
        name: "Basic",
        price: "Free",
        features: [
            "Email Marketing",
            "E-Commerce SEO",
            "Custom Forms",
            "Traffic Analytics",
        ],
        active: true,
    },
    {
        name: "Essentials",
        price: 36,
        features: [
            "Email Marketing",
            "SSL Security",
            "Sales Automation Tools",
            "Traffic Analytics",
        ],
    },
    {
        name: "Platinum",
        price: 79,
        features: [
            "E-Commerce SEO",
            "SSL Security",
            "24/7 Customer Support",
            "Custom Forms",
        ],
    },
];

//photographer pricing plans
export const pricingPlans: PlanDT[] = [
    {
        name: "Premium",
        price: "$2400",
        description: "Have more active requests at a time?",
        features: [
            "Full-day coverage",
            "2 photographers",
            "Online gallery",
            "High-resolution edited images",
            "Engagement session included",
        ],
    },
    {
        name: "Basic",
        price: "$1200",
        description: "Have more active requests at a time?",
        features: [
            "Full-day coverage",
            "2 photographers",
            "Online gallery",
            "Engagement session included",
        ],
        active: true,
    },
    {
        name: "Deluxe",
        price: "$3500",
        description: "Have more active requests at a time?",
        features: [
            "Full-day coverage",
            "3 photographers",
            "Premium photo album",
            "Pre-wedding photo sessions",
            "Engagement session included",
            "Online Gallery",
        ],
    },
];

//Ai Startup pricing plans
export const aiPricingPlans = [
    {
        title: "Basic Plan",
        desc: "Great For Private Individuals",
        price: "Free",
        delay: ".3"
    },
    {
        title: "Standard Plan",
        desc: "Great For Private Individuals",
        price: "$89/",
        period: "Mo",
        delay: ".5",
    },
    {
        title: "Advanced Plan",
        desc: "Great For Private Individuals",
        price: "$99/",
        period: "Mo",
        delay: ".7",
    },
]; 