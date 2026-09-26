
export interface TeamMember {
    id: number;
    name: string;
    slug: string;
    role: string;
    img: string;
    delay?: string;
    extraClass?: string;
    social?: {
        facebook?: string;
        twitter?: string;
        linkedin?: string;
        pinterest?: string;
        instagram?: string;
    };

}

// For multiple homes
export interface TeamMemberDt {
    itConsulting: TeamMember[];
    itSolution: TeamMember[];
}

export interface TeamItemProps extends TeamMember {
    type: string; // add homeKey
}