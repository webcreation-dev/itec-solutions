interface MenuItem { title: string; href: string; subItems?: MenuItem[]; static?: boolean }

// Même navigation ITEC pour les menus mobiles et off-canvas.
const menuItemsTwo: MenuItem[] = [
    { title: "Accueil", href: "/architecture" },
    { title: "Ingénierie", href: "/service-details" },
    { title: "Construction", href: "/construction" },
    { title: "Vision", href: "/about-modern" },
    { title: "Filiales", href: "/team" },
    { title: "Références", href: "/portfolio-col-3" },
    { title: "À propos", href: "/about-creative" },
    { title: "Contact", href: "/contact" },
];

export default menuItemsTwo;
