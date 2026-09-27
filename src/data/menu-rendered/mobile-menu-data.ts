interface MenuItem { title: string; href: string; subItems?: MenuItem[]; static?: boolean }

// Même navigation ITEC pour les menus mobiles et off-canvas.
const menuItemsTwo: MenuItem[] = [
    { title: "Accueil", href: "/" },
    { title: "Ingénierie", href: "/ingenierie" },
    { title: "Construction", href: "/construction" },
    { title: "Filiales", href: "/filiales" },
    { title: "Références", href: "/references" },
    { title: "Vision", href: "/vision" },
    { title: "Contact", href: "/contact" },
];

export default menuItemsTwo;
