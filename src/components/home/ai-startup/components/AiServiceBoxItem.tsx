import { SmartLink } from '@/components/common';
import { aiServiceBoxDt } from '@/types';
import Image from 'next/image';

const AiServiceBoxItem: React.FC<aiServiceBoxDt> = ({ delay, img, title }) => {
    return (
        <div
            className="col-lg-3 col-md-6 col-sm-6 tp_fade_anim"
            data-delay={delay}
            data-duration="2"
            data-fade-from="bottom"
            data-ease="bounce"
        >
            <div className="tp-service-ai-box mb-40">
                <div className="tp-service-ai-main">
                    <div className="tp-service-ai-wrap fix p-relative">
                        <div className="tp-service-ai-thumb">
                            <Image className="img-fluid" width={405} height={251} src={img} alt={title} />
                        </div>
                        <div className="tp-service-ai-content-2">
                            <SmartLink
                                href="/service-details-2"
                                className="tp-ff-jakarta fw-700 fs-28 hover-text-white tp-text-grey-5 underline-black"
                            >
                                {title}
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiServiceBoxItem;