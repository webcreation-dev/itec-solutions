//define interface for PageParams props
export interface PageParamsProps {
    params: Promise<{ id: number }>;
}
// Custom type definitions for the StepItem component
export interface StepItemDT {
    number: string;
    title: string;
    delay: string;
    align: "start" | "center" | "end";
    arrow?: string;
    active?: boolean;
}
// Custom type definitions for the Price Plan
export interface PlanDT {
    name: string;
    price: string | number;
    features: string[];
    active?: boolean;
    description?: string;
}
// Custom type definitions for the Project Item in PhotographerProjectTwo
export interface ProjectItemProps {
    title: string;
    category: string;
    image: string;
    year: string;
}
// Custom type definitions for the Award Item
export interface awardItemDt {
    id: number,
    icon: string,
    title: string,
    year: string,
    className: string,
}

export interface FaqItemDT {
   id: string;
   question: string;
   answer: string;
   show?: boolean;
}