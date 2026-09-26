import { MenuItem } from "@/types/menu-d.ts";

// Navigation ITEC commune à toutes les pages du site.
const headerMenuData: MenuItem[] = [
    { id: 1, title: "Accueil", link: "/architecture", hasDropdown: false, active: true },
    { id: 2, title: "Ingénierie", link: "/service-details", hasDropdown: false, active: true },
    { id: 3, title: "Construction", link: "/construction", hasDropdown: false, active: true },
    { id: 4, title: "Filiales", link: "/team", hasDropdown: false, active: true },
    { id: 5, title: "Références", link: "/portfolio-col-3", hasDropdown: false, active: true },
    { id: 6, title: "Vision", link: "/about-creative", hasDropdown: false, active: true },
    { id: 7, title: "Contact", link: "/contact", hasDropdown: false, active: true },
];

export default headerMenuData;
