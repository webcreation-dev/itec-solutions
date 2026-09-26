import { SmartLink } from '@/components/common';
import { PlumbingButtonArrow } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';

interface portfolioItemProps {
    img: string;
    title: string;
}

const PlumbingPortfolioItem: React.FC<portfolioItemProps> = ({ img, title }) => {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="tp-portfolio-pb-item mb-10 p-relative z-index-1 fix">
                {/* thumb */}
                <div className="tp-portfolio-pb-thumb">
                    <Image width={467} height={575}
                        className="w-100 img-fluid"
                        src={img}
                        alt="portfolio image"
                    />
                </div>

                {/* content */}
                <div className="tp-portfolio-pb-content">
                    {/* title */}
                    <h3 className="tp-portfolio-pb-title tp-ff-inter tp-text-grey-5 fw-600 fs-28 lh-1 mb-25">
                        <SmartLink
                            href="/portfolio-details-two"
                            className="underline-white"
                        >
                            {title}
                        </SmartLink>
                    </h3>
                    {/* tags */}
                    <div className="tp-portfolio-pb-tag mb-30">
                        <Link
                            href="#"
                            className="fw-500 tp-ff-inter mr-5 fs-16 text-uppercase tp-text-grey-5 d-inline-block"
                        >
                            Kitchen
                        </Link>
                        <Link
                            href="#"
                            className="fw-500 tp-ff-inter fs-16 text-uppercase tp-text-grey-5 d-inline-block"
                        >
                            Plumbing
                        </Link>
                    </div>
                    {/* button */}
                    <SmartLink
                        href="/portfolio-details-two"
                        className="tp-left-right d-inline-block tp-left-right-pb tp-bg-theme-secondary tp-round-36 tp-btn-pb-spacing lh-1 tp-ff-inter fw-700 fs-16 tp-text-grey-5 hover-text-white"
                    >
                        <span className="td-text d-inline-block mr-5">
                            View More
                        </span>
                        <span className="tp-arrow-angle tp-arrow-angle-pb">
                            <PlumbingButtonArrow />
                        </span>
                    </SmartLink>
                </div>
            </div>
        </div>
    );
};

export default PlumbingPortfolioItem;