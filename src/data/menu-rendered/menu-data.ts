import { MenuItem } from "@/types/menu-d.ts";

// Navigation ITEC commune à toutes les pages du site.
const headerMenuData: MenuItem[] = [
    { id: 1, title: "Accueil", link: "/", hasDropdown: false, active: true },
    { id: 2, title: "Ingénierie", link: "/ingenierie", hasDropdown: false, active: true },
    { id: 3, title: "Construction", link: "/construction", hasDropdown: false, active: true },
    { id: 4, title: "Filiales", link: "/filiales", hasDropdown: false, active: true },
    { id: 5, title: "Références", link: "/references", hasDropdown: false, active: true },
    { id: 6, title: "Vision", link: "/vision", hasDropdown: false, active: true },
    { id: 7, title: "Contact", link: "/contact", hasDropdown: false, active: true },
];

export default headerMenuData;
