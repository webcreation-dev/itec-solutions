import { StaticImageData } from "next/image";

export interface MenuItem {
    id: number;
    title: string;
    link: string;
    plusIcon?: boolean;
    megaMenu?: boolean;
    smallMenu?: boolean;
    mediumMenu?: boolean;
    active?: boolean;
    hasDropdown?: boolean;
    children?: boolean;
    submenus?: Submenu[];
    menuThumb?: thumbsDt;
}

export interface Submenu {
    title?: string;
    link?: string;
    plusIcon?: boolean;
    isThumb?: boolean;
    thumbSrc?: string;
    thumbAlt?: string;
    megaMenu?: MegaMenuItem[];
    submenus?: Submenu[];
    tag?: string;
    themeDefault?: string;
}

export interface MegaMenuItem {
    title: string;
    link: string;
    tag?: string;
    themeDefault?: string;
}

export interface thumbsDt {
    title: string,
    link: string,
    plusIcon: boolean,
    isThumb: boolean,
    thumbSrc: string,
    thumbAlt: string
}