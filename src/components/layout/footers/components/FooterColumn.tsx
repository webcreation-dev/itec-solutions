import Link from "next/link";

interface FooterColumnProps {
    title: string;
    links: { label: string; href: string }[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
    return (
        <div className="dgm-footer-widget app-footer-widget">
            <h4 className="dgm-footer-widget-title">{title}</h4>
            <div className="dgm-footer-widget-menu">
                <ul>
                    {links.map((item, i) => (
                        <li key={i}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterColumn;