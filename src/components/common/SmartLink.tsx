"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
    className?: string;
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
};

export default function SmartLink({ className, href, children, onClick }: Props) {
    const pathname = usePathname() || "";
    const isDark = pathname.toLowerCase().startsWith("/dark");

    // External links
    if (href.startsWith("http")) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </Link>
        );
    }

    const cleanHref = href.startsWith("/") ? href : `/${href}`;

    const finalHref = isDark
        ? `/dark${cleanHref.replace(/^\/dark/, "")}` // add /dark if not present
        : cleanHref.replace(/^\/dark/, "");         // remove /dark if exists

    return (
        <Link className={className} href={finalHref} onClick={onClick}>
            {children}
        </Link>
    );
}