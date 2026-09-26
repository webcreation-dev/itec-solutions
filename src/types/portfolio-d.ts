// ==============================
// Portfolio Item Interface
// ==============================
export interface PortfolioItemDT {
    id: number;
    img?: string;
    title: string;
    categories: string[];
    clientName: string;
    industry: string;
    location?: string;
    launchDate: string;
    slug: string;
    col?: string;
    itemClass?: string;
    thumbClass?: string;
    year?: string;
    displacement?: boolean;
    showButton?: boolean;
    specialLayout?: boolean;
}

//video production portfolio
export interface VPPortfolioItem {
    video: string;
    titleTop: string;
    titleMiddle: string;
    link: string;
};
// ==============================
// Portfolio Data Interface
// ==============================
export interface PortfolioItemProps extends PortfolioItemDT {
    type: string; // add type
}