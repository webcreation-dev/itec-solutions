import { TeamMember } from "@/types/team-d";

export interface MultiHomeTeam {
    [key: string]: TeamMember[];
}

const teamData: MultiHomeTeam = {
    // IT Consulting Home
    itConsulting: [{
        id: 1,
        name: "Ethan Roberts",
        slug: "ethan-roberts",
        role: "Marketing Leader",
        img: "/assets/img/update-2/team/thumb-1.jpg",
        delay: ".3",
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        id: 2,
        name: "Alex Jamie",
        slug: "alex-jamie",
        role: "Brand Strategist",
        img: "/assets/img/update-2/team/thumb-2.jpg",
        delay: ".4",
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        id: 3,
        name: "Taylor Same",
        slug: "taylor-same",
        role: "Creative Director",
        img: "/assets/img/update-2/team/thumb-3.jpg",
        delay: ".5",
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    },
    {
        id: 4,
        name: "Yoyo Casey",
        slug: "yoyo-casey",
        role: "UI/UX Designer",
        img: "/assets/img/update-2/team/thumb-4.jpg",
        delay: ".6",
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
        },
    }],
    itSolution: [
        {
            id: 1,
            name: "James Carter",
            slug: "james-carter",
            role: "Economy Manager",
            img: "/assets/img/team/it/thumb-3.png",
            delay: ".7",
            social: {
                pinterest: "#",
                linkedin: "#",
                instagram: "#",
                facebook: "#",
            },
        },
        {
            id: 2,
            name: "Dianne M. Mason",
            slug: "dianne-m-mason",
            role: "Legal Officer",
            img: "/assets/img/team/it/thumb.png",
            delay: ".3",
            social: {
                pinterest: "#",
                linkedin: "#",
                instagram: "#",
                facebook: "#",
            },
        },
        {
            id: 3,
            name: "Daniel Kim",
            slug: "daniel-kim",
            role: "Hr Specialist",
            img: "/assets/img/team/it/thumb-2.png",
            delay: ".8",
            social: {
                pinterest: "#",
                linkedin: "#",
                instagram: "#",
                facebook: "#",
            },
        },
        {
            id: 4,
            name: "Michael Thomas",
            slug: "michael-thomas",
            role: "CEO Themepure",
            img: "/assets/img/team/it/thumb-4.png",
            delay: ".5",
            extraClass: "mt-60",
            social: {
                pinterest: "#",
                linkedin: "#",
                instagram: "#",
                facebook: "#",
            },
        },
        {
            id: 5,
            name: "Robertson Crushe",
            slug: "robertson-crushe",
            role: "CEO Themepure",
            img: "/assets/img/team/it/thumb-5.png",
            delay: ".9",
            social: {
                pinterest: "#",
                linkedin: "#",
                instagram: "#",
                facebook: "#",
            },
        },
    ],
    construction: [
        {
            id: 1,
            name: "Architectes partenaires",
            slug: "architectes-partenaires",
            role: "Conception et identité des projets",
            img: "/assets/img/update-2/team/home-2/thumb-1.jpg",
            social: {
                twitter: "#",
            },
        },
        {
            id: 2,
            name: "Bureaux d’études associés",
            slug: "bureaux-etudes-associes",
            role: "Études techniques et optimisation",
            img: "/assets/img/update-2/team/home-2/thumb-2.jpg",
            social: {
                twitter: "#",
            },
        },
        {
            id: 3,
            name: "Entreprises qualifiées",
            slug: "entreprises-qualifiees",
            role: "Réalisation et suivi de chantier",
            img: "/assets/img/update-2/team/home-2/thumb-3.jpg",
            social: {
                twitter: "#",
            },
        },
    ],
    startupAgency: [
        {
            id: 1,
            img: "/assets/img/team/thumb.jpg",
            name: "Daniel Scoot",
            slug:"daniel-scoot",
            role: "Product Designer",
            delay: ".9"
        },
        {
            id: 2,
            img: "/assets/img/team/thumb-2.jpg",
            name: "Katherine Victoria",
            slug:"katherine-victoria",
            role: "WordPress Developer",
            delay: ".-9"
        },
        {
            id: 3,
            img: "/assets/img/team/thumb-3.jpg",
            name: "Robertson Crushe",
            slug:"robertson-crushe",
            role: "React Developer",
            delay: ".9"
        },
        {
            id: 4,
            img: "/assets/img/team/thumb-4.jpg",
            name: "Zoey Harper",
            slug:"zoey-harper",
            role: "Senior Developer",
            delay: ".-9"
        },
    ]
}
export default teamData;
