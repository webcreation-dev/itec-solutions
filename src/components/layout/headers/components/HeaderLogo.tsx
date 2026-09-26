import Image from "next/image";
import Link from "next/link";

type HeaderLogoProps = {
    variant?: "single" | "dual"; // single = 1 logo, dual = dark+light
    logo?: string;               // single logo path
    darkLogo?: string;           // dark version
    lightLogo?: string;          // light version
    width?: number;
    height?: number;
};

const HeaderLogo = ({
    variant = "single",
    logo = "/assets/img/logo/logo-black.png",
    darkLogo = "/assets/img/logo/logo-black.png",
    lightLogo = "/assets/img/logo/logo-white.png",
    width = 150,
    height = 36,
}: HeaderLogoProps) => {
    return (
      
            <Link href="/">
                {variant === "dual" ? (
                    <>
                        <Image
                            className="logo-light"
                            src={lightLogo}
                            alt="logo light"
                            width={width}
                            height={height}
                            priority
                        />
                        <Image
                            className="logo-dark"
                            src={darkLogo}
                            alt="logo dark"
                            width={width}
                            height={height}
                            priority
                        />
                    </>
                ) : (
                    <Image
                        src={logo}
                        alt="logo"
                        width={width}
                        height={height}
                        priority
                    />
                )}
            </Link>
    );
};

export default HeaderLogo;