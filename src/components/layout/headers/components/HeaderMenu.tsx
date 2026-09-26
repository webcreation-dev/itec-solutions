"use client";
import headerMenuData from "@/data/menu-rendered/menu-data";
import { useIsDarkRoute } from "@/hooks";
import { Submenu } from "@/types/menu-d.ts";
import Image from "next/image";
import Link from "next/link";

export default function HeaderMenus() {
    // Determine if the current route should use dark mode styling
    const isDark = useIsDarkRoute();

    // Renders nested submenus
    const renderSubmenu = (submenus: Submenu[] = []) => {
        return submenus.map((submenu, i) => {
            if (submenu.submenus) {
                return (
                    <li key={i} className="menu-item-has-children">
                        <Link href={submenu.link || "#"}>{submenu.title}</Link>
                        <ul className="tp-submenu submenu">
                            {renderSubmenu(submenu.submenus)}
                        </ul>
                    </li>
                );
            }

            return (
                <li key={i}>
                    <Link href={submenu.link || "#"}>
                        {submenu.title}
                    </Link>
                </li>
            );
        });
    };

    // Returns CSS class based on tag like 'Popular', 'Trending', or 'Hot'
    const getTagClass = (tag: string) => {
        switch (tag) {
            case 'Popular': return 'pop';
            case 'New': return 'new';
            case 'Hot': return 'hot';
            default: return '';
        }
    };
    // Determine megamenu background class based on dark mode
    const headerMegamenuBgClass = isDark ? "megamenu-black-bg" : "megamenu-white-bg";

    return (
        <ul>
            {headerMenuData.map((menu) => (
                <li
                    key={menu.id}
                    className={`${menu.hasDropdown ? "has-dropdown" : ""} ${menu.megaMenu || menu.smallMenu || menu.mediumMenu ? "p-inherit" : ""
                        }`}
                >
                    <Link href={menu.link}>
                        {menu.title}{" "}
                        {menu.plusIcon && (
                            <span>
                                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor"></path>
                                </svg>
                            </span>
                        )}
                    </Link>

                    {menu.megaMenu || menu.smallMenu || menu.mediumMenu ? (
                        <div className={`tp-megamenu-wrapper mega-menu ${headerMegamenuBgClass}`}>
                            <div className="row gx-0">
                                {menu.megaMenu &&
                                    menu?.submenus?.map((submenu: Submenu, i: number) => (
                                        <div key={i} className="col-xl-2">
                                            <div className="tp-megamenu-list">
                                                {submenu.title && (
                                                    <h4 className="tp-megamenu-title">{submenu.title}</h4>
                                                )}
                                                {submenu.megaMenu && (
                                                    <ul>
                                                        {submenu.megaMenu.map((item, j) => (
                                                            <li key={j}>
                                                                <Link href={item.link}>
                                                                    {item.title}
                                                                    {item.tag && (
                                                                        <span style={{ marginLeft: "5px" }} className={getTagClass(item.tag)}>{item.tag}</span>
                                                                    )}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                {menu.smallMenu &&
                                    menu?.submenus?.map((submenu: Submenu, i: number) => (
                                        <div key={i} className="col-xl-2">
                                            <div className="tp-megamenu-list">
                                                {submenu.title && (
                                                    <h4 className="tp-megamenu-title">{submenu.title}</h4>
                                                )}
                                                {submenu.megaMenu && (
                                                    <ul>
                                                        {submenu.megaMenu.map((item, j) => (
                                                            <li key={j}>
                                                                <Link href={item.link}>
                                                                    {item.title}
                                                                    {item.tag && (
                                                                        <span className={getTagClass(item.tag)}>{item.tag}</span>
                                                                    )}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                {menu.mediumMenu && (
                                    <div className="col-xl-10">
                                        <div className="row gx-0">
                                            {menu?.submenus?.map((submenu: Submenu, i: number) => (
                                                <div key={i} className="col-xl-3">
                                                    <div className="tp-megamenu-list">
                                                        {submenu.title && (
                                                            <h4 className="tp-megamenu-title">{submenu.title}</h4>
                                                        )}

                                                        {submenu.megaMenu && (
                                                            <ul>
                                                                {submenu.megaMenu.map((item, j) => (
                                                                    <li key={j}>
                                                                        <Link href={item.link}>
                                                                            {item.title}
                                                                            {item.tag && (
                                                                                <span className={getTagClass(item.tag)}>
                                                                                    {item.tag}
                                                                                </span>
                                                                            )}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}

                                            {/* Thumb Section */}
                                            {menu.menuThumb?.isThumb && (
                                                <div className="col-xl-2">
                                                    <div className="tp-megamenu-list">
                                                        <div className="tp-megamenu-thumb">
                                                            <Image
                                                                src={menu.menuThumb.thumbSrc}
                                                                alt={menu.menuThumb.thumbAlt || ""}
                                                                width={300}
                                                                height={300}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    ) : menu.submenus ? (
                        <ul className="tp-submenu submenu">
                            {renderSubmenu(menu.submenus)}
                        </ul>
                    ) : null}
                </li>
            ))}
        </ul>
    );
}