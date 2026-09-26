import { photographerFooterMenu } from "@/data/footer-data";
import { getCurrentYear } from "@/utils";
import Link from "next/link";

const PhotographerCopyright = () => {
    return (
        <div
            className="al-copyright-pg-area"
            style={{ backgroundColor: "#121314" }}
        >
            <div className="al-copyright-pg-wrap">
                <div className="container container-1320">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="al-copyright-pg-left text-center text-md-start">
                                <span>Aqlova © {getCurrentYear()}. All rights reserved.</span>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="al-copyright-pg-right-menu text-center text-md-end">
                                {photographerFooterMenu.map((item, index) => (
                                    <Link key={index} href={item.href}>
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotographerCopyright;