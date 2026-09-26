import { SmartLink } from "@/components/common";
import { TwittorIcon } from "@/svg";
import { TeamItemProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ConstructionTeamCard: React.FC<TeamItemProps> = ({ id, img, name, role, type, slug }) => {
    return (
        <div className="col-xl-4 col-md-6">
            <div className="cnt-team-item mb-30">
                <div className="cnt-team-item-thumb mb-20">
                    <SmartLink href={`/team-details/${type}/${id}-${slug}`}>
                        <Image className="img-fluid" width={424} height={456} src={img} alt={name} />
                    </SmartLink>
                </div>
                <div className="cnt-team-item-wrap d-flex align-items-center justify-content-between">
                    <div className="cnt-team-item-content">
                        <h4 className="cnt-team-item-title">
                            <SmartLink
                                className="underline-black"
                                href={`/team-details/${type}/${id}-${slug}`}
                            >
                                {name}
                            </SmartLink>
                        </h4>
                        <p>{role}</p>
                    </div>
                    <div className="cnt-team-item-social">
                        <Link href="#">
                            <span className="bdr-1">
                                <TwittorIcon />
                            </span>
                            <span className="bdr-2">Twitter</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructionTeamCard;