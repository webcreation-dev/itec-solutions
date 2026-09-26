import { SmartLink } from '@/components/common';
import { ServiceArrowIconThree } from '@/svg';
import { itSolutionServiceDt } from '@/types/service-d';
import Image from 'next/image';
import Link from 'next/link';

interface ITSolutionServiceItemProps {
    item: itSolutionServiceDt;
}

const ITSolutionServiceItem: React.FC<ITSolutionServiceItemProps> = ({ item }) => {
    const IconComponent = item.icon;
    return (
        <div className="tp-service-it-item p-relative fix z-index-1">
            <Image
                width={197}
                height={197}
                className="tp-service-it-circale scrool-rotate-img"
                src="/assets/img/service/it/shape.png"
                alt="shape"
            />

            <div className="tp-service-it-item-header mb-80 d-flex justify-content-between">
                <h5 className="tp-service-it-title tp-ff-inter fw-600 fs-28 ls-m-3 tp-text-grey-5">
                    <SmartLink
                        className="underline-black"
                        href="/service-details-2"
                    >
                        {item.title}
                    </SmartLink>
                </h5>

                <span className="tp-service-it-icon">
                    {IconComponent && <IconComponent />}
                </span>
            </div>

            <p className="tp-service-it-para tp-ff-inter text-capitalize ls-m-3 mb-45">
                {item.desc}
            </p>

            <div className="tp-service-it-btn">
                <SmartLink
                    href="/service-details-2"
                    className="tp-btn-it-lg tp-btn-border-white d-inline-block lh-0 tp-round-26 fs-16 text-uppercase ls-m-3 tp-btn-switch-animation tp-text-common-white  tp-ff-inter fw-700"
                >
                    <span className="d-flex align-items-center justify-content-center">
                        <span className="btn-text">Read More</span>
                        <span className="btn-icon">
                            <ServiceArrowIconThree />
                        </span>
                        <span className="btn-icon">
                            <ServiceArrowIconThree />
                        </span>
                    </span>
                </SmartLink>
            </div>

            <div className="tp-service-it-tag">
                <Link href="#">Consulting</Link>
                <Link href="#">App</Link>
                <Link href="#">website</Link>
                <Link href="#">IT Solution</Link>
                <Link href="#">corporate</Link>
            </div>
        </div>
    );
};

export default ITSolutionServiceItem;