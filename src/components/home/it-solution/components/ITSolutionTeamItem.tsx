import { ShareNetworkIcon } from "@/svg/TeamIcons";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks";
import { TeamItemProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ITSolutionTeamItem: React.FC<TeamItemProps> = ({ id, name, slug, role, img, delay, extraClass, social, type }) => {
       const isDark = useIsDarkRoute();
        // -------------------------------
        // styles 
        // -------------------------------
        const teamItemStyles = {
            headingText: isDark ? "tp-text-common-white" : "tp-text-common-black-1",
            bodyText: isDark ? "tp-text-grey-2" : "tp-text-common-black-4",
        };
        // -------------------------------
    return (
        <div className={`tp-team-it-item mb-45 ${extraClass || ""} tp_fade_anim`} data-delay={delay}>
            <SmartLink className="tp-team-it-thumb" href={`/team-details/${type}/${id}-${slug}`}>
                <Image className="img-fluid w-100 h-auto" width={366} height={395} src={img} alt={name} />
            </SmartLink>
            <div className="tp-team-it-content p-relative">
                <div className="tp-team-it-socials">
                    <div className="tp-team-it-socials-trigger">
                        <span className="tp-team-it-socials-share">
                            <ShareNetworkIcon />
                        </span>
                    </div>
                    <div className="tp-team-it-socials-wrapper">
                        <ul className="tp-team-it-socials-icon">
                            <li><Link href={social?.pinterest || "#"}><i className="fa-brands fa-pinterest"></i></Link></li>
                            <li><Link href={social?.linkedin || "#"}><i className="fa-brands fa-linkedin"></i></Link></li>
                            <li><Link href={social?.instagram || "#"}><i className="fa-brands fa-instagram"></i></Link></li>
                            <li><Link href={social?.facebook || "#"}><i className="fa-brands fa-facebook"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <h3 className={`fw-600 fs-28 fs-lg-25 ls-m-4 tp-ff-inter mb-10 ${teamItemStyles.headingText}`}>
                    <SmartLink href={`/team-details/${type}/${id}-${slug}`} className="underline-black">
                        {name}
                    </SmartLink>
                </h3>
                <span className={`tp-text-common-black-4 ls-m-2 tp-ff-inter ${teamItemStyles.bodyText}`}>
                    {role}
                </span>
            </div>
        </div>
    );
};

export default ITSolutionTeamItem;