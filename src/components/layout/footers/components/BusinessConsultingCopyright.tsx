import { CopyrightIcon } from "@/svg";
import Link from "next/link";

const BusinessConsultingCopyright = () => {
    return (
        <div className="tp-footer-cst-bottom">
            <div className="container-fluid container-1524">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <div className="tp-footer-copyright">
                            <p className="mb-10 tp-text-grey-5 tp-ff-dm">
                                <span>
                                    <CopyrightIcon fillColor="currentColor" />
                                </span>{" "}
                                Copyright 2026{" "}
                                <Link href="#" className="hover-text-grey">
                                    ThemePure.
                                </Link>{" "}
                                All Right Reserves.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-5">
                        <div className="tp-footer-copyright text-md-end">
                            <p className="mb-10 tp-text-grey-5 tp-ff-dm">
                                <Link href="#" className="hover-text-grey">
                                    Privacy Policy
                                </Link>{" "}
                                |{" "}
                                <Link href="#" className="hover-text-grey">
                                    Terms & Conditions
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessConsultingCopyright;