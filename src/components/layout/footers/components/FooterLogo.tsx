import Image from "next/image";
import Link from "next/link";

type FooterLogoProps = {
    logo?: string;          // light version
    width?: number;
    height?: number;
};

const FooterLogo = ({
    logo = "/assets/img/logo/logo-white.png",
    width = 150,
    height = 36,
}: FooterLogoProps) => {
    return (
        <Link href="/">
            <Image
                src={logo}
                alt="logo"
                width={width}
                height={height}
                priority
            />
        </Link>
    );
};

export default FooterLogo;