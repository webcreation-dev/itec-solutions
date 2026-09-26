export interface BlogItemDT {
    id: number;
    categories: string[];
    title: string;
    slug: string;
    date: string;
    image: string;
    avatar?: string;
    author?: string;
    delay?: string;
    fadeFrom?: string;
    month?:string;
    desc?:string;
}
//business consulting blog defiend data
export interface BusinessConsultingBlogDt {
    id: number;
    img: string;
    title: string;
    day: string;
    monthYear: string;
    fadeFrom: "left" | "right";
}

export interface VPBlogItem {
    img: string;
    titleTop: string;
    titleBottom: string;
    link: string;
};

// ==============================
// Blog Data Interface
// ==============================
export interface BlogItemProps extends BlogItemDT {
    type: string; // added key for identifying the blog category
}