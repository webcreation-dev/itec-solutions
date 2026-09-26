import { getCurrentYear } from "@/utils";
import Link from "next/link";

const ITConsultingCopyright = () => {
    return (
        <div className="tp-copyright-app-area tp-copyright-2-border">
            <div className="container container-1430">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="app-copyright-text text-center z-index-1 p-relative">
                            <p>© {getCurrentYear()} Copyrights by Aleric Co. All Rights Reserved. Developed by <Link href="#">ThemePure</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITConsultingCopyright;