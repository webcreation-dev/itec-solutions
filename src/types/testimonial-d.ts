
// ================================
// Testimonial data item
// ================================
export interface TestimonialItemDT {
    id: number;
    name: string;
    designation: string;
    avatar: string;
    message: string;
    highlight?: string,
    growth?: string,
    end?: string,
    videoUrl?: string,
}

// ================================
// Testimonial data 
// ================================
export interface TestimonialSection {
    id: number;
    itConsulting?: TestimonialItemDT[];
    seoAgency?: TestimonialItemDT[];
    aiStartup?: TestimonialItemDT[];
    iTSolution?: TestimonialItemDT[];
    personalPortfolio?: TestimonialItemDT[];
    shopModern?: TestimonialItemDT[];
    aiAgency?: TestimonialItemDT[];
    plumbing?: TestimonialItemDT[];
    medical?: TestimonialItemDT[];
    startupAgency?: TestimonialItemDT[];
}