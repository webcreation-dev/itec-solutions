import { SmartLink } from '@/components/common';
import { digitalServiceDT } from '@/types';
import { useIsDarkRoute } from '@/hooks';
import Image from 'next/image';

const ServiceItem: React.FC<digitalServiceDT> = ({ delay, title, items }) => {
    const isDark = useIsDarkRoute();

    // Main title text color for dark/light mode
    const serviceItemTitleClass = isDark ? "tp-text-common-white" : "";

    return (
        <div className="col-lg-4 col-md-6">
            <div
                className="tp-service-item p-relative mb-30 tp_fade_anim"
                data-delay={delay}
                data-fade-from="left"
            >
                <Image
                    width={354}
                    height={342}
                    className="tp-service-item-bg"
                    src="/assets/img/service/grid-shape.png"
                    alt="shape"
                />
                <h4 className={`tp-service-item-title ${serviceItemTitleClass}`}>{title}</h4>
                <ul>
                    {items.map((item, i) => (
                        <li key={i}>
                            <SmartLink href="/service-details">{item}</SmartLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceItem;