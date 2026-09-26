"use client";
import { ArrowIconFifteen, ArrowIconSixteen } from '@/svg';
import { SmartLink } from '@/components/common';
import { useIsDarkRoute } from '@/hooks';
import Link from 'next/link';

type ServiceItemProps = {
    title: string;
    bg: string;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ title, bg }) => {
    const isDarkRoute = useIsDarkRoute();

    // -------------------------------
    // Class (dark+light)
    // --------------------------------
    const serviceTextClass = isDarkRoute ? "tp-text-common-white" : "tp-text-common-black-5";
    const ArrowSvgColor: React.ElementType = isDarkRoute
        ? ArrowIconSixteen : ArrowIconFifteen;
    // ---------------------------------

    return (
        <div className="col">
            <div className="tp-service-vp-item tp-reveal-item active p-relative">
                <div className="tp-service-vp-content design-award-content d-flex align-items-center justify-content-between">
                    <h4 className={`tp-ff-inter fw-600 fs-32 fs-xs-24 ls-m-4 ${serviceTextClass}`}>
                        <Link href="#" className="hover-text-black">
                            {title}
                        </Link>
                    </h4>
                    <SmartLink
                        href="/service-details-2"
                        className={`tp-left-right tp-service-vp-btn ${serviceTextClass} d-flex justify-content-center align-items-center rounded-circle`}>
                        <span className="tp-arrow-angle">
                            <ArrowSvgColor />
                        </span>
                    </SmartLink>
                </div>
                <div className="tp-reveal-bg" style={{ backgroundImage: `url(${bg})` }}>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;