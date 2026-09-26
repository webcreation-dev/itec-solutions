import { ArrowIcon, CalendarIcon, CommentIcon } from '@/svg';
import { SmartLink } from '@/components/common';
import { BlogItemProps } from '@/types/blog-d';

const AiBlogItem: React.FC<BlogItemProps> = ({ delay, fadeFrom, image, title, type, slug }) => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div
                className="tp-blog-ai-item tp-round-24 mb-30 tp_fade_anim"
                data-delay={delay}
                data-fade-from={fadeFrom}
                data-ease="bounce"
            >
                <SmartLink
                    href={`/blog-details/${type}/${slug}`}
                    className="tp-round-24 w-100 tp--hover-item fix p-relative d-inline-block"
                >
                    <div
                        className="tp-blog-ai-thumb w-100 tp--hover-img tp-round-24"
                        data-displacement={image}
                        data-intensity="0.6"
                        data-speedin="1"
                        data-speedout="1"
                    >
                        <img
                            className="tp-round-24 w-100"
                            src={image}
                            alt="blog image"
                        />
                    </div>
                </SmartLink>

                <div className="tp-blog-ai-content">
                    <span className="tp-blog-ai-dates tp-round-32 tp-ff-dm mb-15 fw-500 fs-16 tp-text-grey-5 d-inline-block">
                        <CalendarIcon />
                        05 July 2026
                    </span>

                    <h4 className="tp-blog-ai-title tp-ff-jakarta fs-24 fs-md-22 lh-140-per ls-m-4 tp-text-grey-5">
                        <SmartLink
                            href={`/blog-details/${type}/${slug}`}
                            className="underline-white"
                        >
                            {title}
                        </SmartLink>
                    </h4>
                </div>

                <div className="tp-blog-ai-btn d-flex justify-content-between">
                    <SmartLink
                        href={`/blog-details/${type}/${slug}`}
                        className="tp-btn-switch-2-animation p-relative hover-text-white d-inline-block text-uppercase tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm"
                    >
                        <span className="d-flex align-items-center justify-content-center">
                            <span className="btn-text">Read More</span>

                            <span className="btn-icon">
                                <ArrowIcon />
                            </span>

                            <span className="btn-icon">
                                <ArrowIcon />
                            </span>
                        </span>
                    </SmartLink>

                    <span className="tp-blog-ai-comments text-uppercase tp-text-grey-5 lh-1 fs-16 fw-700 tp-ff-dm">
                        <CommentIcon />
                        01 Comments
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AiBlogItem;