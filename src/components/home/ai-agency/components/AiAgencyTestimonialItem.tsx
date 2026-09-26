import React from 'react';
import { TestimonialStarIcon } from '@/svg';
import { TestimonialItemDT } from '@/types';
import Image from 'next/image';

const AiAgencyTestimonialItem: React.FC<TestimonialItemDT> = ({ avatar, name, designation, message }) => {
    return (
        <div className="app-testimonial-item">

            {/* TOP */}
            <div className="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                <div className="app-testimonial-item-icon">
                    <span>
                        <Image width={50} height={50}
                            src={avatar}
                            alt={name}
                        />
                    </span>
                </div>

                <div className="app-testimonial-item-icon-content">
                    <h4 className="app-testimonial-item-icon-title">
                        {name}
                    </h4>
                    <p>{designation}</p>
                </div>
            </div>

            {/* CONTENT */}
            <div className="app-testimonial-item-content">
                <p>
                    {message.split(/<br\s*\/?>/i).map((line, idx) => (
                        <React.Fragment key={idx}>
                            {idx > 0 && <br />}
                            {line}
                        </React.Fragment>
                    ))}
                </p>

                {/* STARS */}
                <div className="app-testimonial-item-star">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} style={{ marginRight: "4px" }}>
                            <TestimonialStarIcon width='15' height='15'/>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AiAgencyTestimonialItem;