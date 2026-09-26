import { SmartLink } from "@/components/common";
import { getCurrentYear } from "@/utils";
import { CopyrightIcon } from "@/svg";
import Link from "next/link";

const Copyright = () => {
    return (
        <div className="tp-footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-footer-copyright">
                            <p className="mb-0 tp-text-grey-2">
                                <span>
                                    <CopyrightIcon />
                                </span>{" "}
                                Copyright {getCurrentYear()} <Link className="tp-text-common-white hover-text-primary" href="#">ThemePure.</Link> All Right Reserves.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-footer-menu">
                            <ul>
                                <li><Link href="#">Career</Link></li>
                                <li><SmartLink href="/portfolio-col-4">Our Work</SmartLink></li>
                                <li><SmartLink href="/contact">Contact</SmartLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;