export type BlogStandardPost =
    | {
        id: number;
        type: "image";
        image: string;
        category: string;
        date: string;
        title: string;
        text: string;
    }
    | {
        id: number;
        type: "slider";
        images: string[];
        category: string;
        date: string;
        title: string;
        text: string;
    }
    | {
        id: number;
        type: "video";
        image: string;
        videoUrl: string;
        category: string;
        date: string;
        title: string;
        text: string;
    };

export const postboxItems: BlogStandardPost[] = [
    {
        id: 1,
        type: "image",
        image: "/assets/img/blog/postbox/thumb.jpg",
        category: "AI Trends",
        date: "02 Feb, 2025",
        title: "Mastering customer journeys with marketing funnel analytics.",
        text: "In today's digital world, understanding customer journeys is crucial for driving conversions, improving engagement, and maximizing ROI. A well-structured marketing funnel helps businesses track user behavior at every stage—from awareness to loyalty.",
    },
    {
        id: 2,
        type: "slider",
        images: [
            "/assets/img/blog/postbox/thumb-2.jpg",
            "/assets/img/blog/postbox/thumb.jpg",
            "/assets/img/blog/postbox/thumb-3.jpg",
        ],
        category: "AI Trends",
        date: "02 Feb, 2025",
        title: "Our Creative Process for High-Impact Branding.",
        text: "We believe that branding is more than just a logo—it's about crafting a unique identity that resonates with your audience and drives business success. Our strategic and creative approach ensures that every brand we build is impactful, memorable, and results-driven.",
    },
    {
        id: 3,
        type: "video",
        image: "/assets/img/blog/postbox/thumb-3.jpg",
        videoUrl: "https://www.youtube.com/watch?v=go7QYaQR494",
        category: "AI Trends",
        date: "02 Feb, 2025",
        title: "Top 5 Web Design Mistakes That Hurt Conversions.",
        text: "We believe that branding is more than just a logo—it's about crafting a unique identity that resonates with your audience and drives business success. Our strategic and creative approach ensures that every brand we build is impactful, memorable, and results-driven.",
    },
];

export const categories = [
    { name: "Branding", count: 10 },
    { name: "Lifestyle", count: 8 },
    { name: "UI/UX Design", count: 5 },
    { name: "Production", count: 2 },
    { name: "Creative Art", count: 6 },
];

export const recentPosts = [
    { tag: "Web Design", title: "Behind the Scenes: Our Creative Process for High-Impact Branding", date: "02 Feb, 2025" },
    { tag: "Development", title: "Why User-Centered Design is the Key to Digital Success.", date: "02 Feb, 2025" },
    { tag: "Creative", title: "From Concept to Launch: How We Build Scalable Digital Products.", date: "02 Feb, 2025" },
];

export const tags = ["UI/UX Design", "Development", "Web Design", "Branding & Marketing", "Creative Art"];
