// ================================
// Common Service Type (Base)

import { ElementType, ReactNode } from "react";

// ================================
export interface BaseService {
    id: number;
    title: string;
    slug: string;
    description: string;
    img?: string;
    icon?: React.ElementType;
    bgColor?: string;
    delay?: string;
    image?: string;
    categories?: string[];
    serialNumber?: string;
    fadeFrom?: "left" | "bottom" | "right";
    iconType?: "Nexus" | "DualPanel" | "QuadCore";
}
// ================================
// All Service Data Structure
// ===============================
export interface ServiceItemProps extends BaseService {
    type: string; // add type
}

//digital agency service data type
export interface digitalServiceDT {
    title: string;
    delay: string;
    items: string[];
}
//Ai Startup Service data
export interface aiServiceItemDt {
    id: number;
    title: string;
}

export interface aiServiceBoxDt {
    id: number;
    title: string;
    img: string;
    delay: string;
}
//business consulting service defiend data type
export interface consultingServiceDt {
    id: number;
    title: string;
    img: string;
    link: string;
    desc: string;
}
//IT solution service data type
export interface itSolutionServiceDt {
    title: ReactNode;
    desc: string;
    icon: ElementType;
}