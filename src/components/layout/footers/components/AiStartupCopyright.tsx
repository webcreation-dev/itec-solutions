import { useIsDarkRoute } from "@/hooks";
import { getCurrentYear } from "@/utils";
import { CopyrightIcon } from "@/svg";
import Link from "next/link";

const AiStartupCopyright = () => {
    const isDarkRoute = useIsDarkRoute();
    const footerTextColor = isDarkRoute ? "tp-text-common-white" : "tp-text-common-black-5";

    return (
        <div className="tp-footer-ai-copyright-border">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-footer-ai-copyright text-center">
                            <p className={`tp-ff-dm fw-500 ${footerTextColor}`}>
                                <span>
                                    <CopyrightIcon />
                                </span>{" "}
                                Copyright {getCurrentYear()} <Link href="#" className="tp-text-theme-secondary">ThemePure.</Link> All Right Reserves. </p>
                        </div>
                    </div>
                </div>z
            </div>
        </div>
    );
};

export default AiStartupCopyright;