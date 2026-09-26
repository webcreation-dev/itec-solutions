"use client";
import { FacebookIcon, LinkedinIcon, TwittorIcon } from "@/svg";
import { SmartLink } from "@/components/common";
import { TeamItemProps } from "@/types";
import { useIsDarkRoute } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

const TeamItem: React.FC<TeamItemProps> = ({ id, name, slug, role, img, delay, social, type }) => {
    // Determine if the current route should use dark mode styling
    const isDark = useIsDarkRoute()

    // Helper classes based on dark mode
    const svgColor = isDark ? "currentcolor" : "#141414";

    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="dgm-team-item mb-40 tp_fade_anim" data-delay={delay}>
                <div className="dgm-team-thumb tp--hover-item p-relative">
                    <SmartLink href={`/team-details/${type}/${id}-${slug}`}>
                        <div
                            className="tp--hover-img"
                            data-displacement="/assets/img/imghover/fluid.jpg"
                            data-intensity="0.6"
                            data-speedin="1"
                            data-speedout="1"
                        >
                            <Image width={357} height={374} src={img} alt={name} />
                        </div>
                    </SmartLink>
                </div>

                <div className="dgm-team-content">
                    <h4 className="dgm-team-title-sm">
                        <SmartLink className="underline-black" href={`/team-details/${type}/${id}-${slug}`}>
                            {name}
                        </SmartLink>
                    </h4>

                    <span>{role}</span>

                    <div className="dgm-team-social">
                        {social?.facebook && <Link href={social?.facebook}><span><FacebookIcon /></span></Link>}{" "}
                        {social?.twitter && <Link href={social?.twitter}><span><TwittorIcon /></span></Link>}{" "}
                        {social?.linkedin && <Link href={social?.linkedin}><span><LinkedinIcon fillColor={svgColor} /></span></Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamItem;