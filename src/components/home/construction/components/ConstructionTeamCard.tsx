import { SmartLink } from "@/components/common";
import { TeamItemProps } from "@/types";
import Image from "next/image";

const ConstructionTeamCard: React.FC<TeamItemProps> = ({ img, name, role }) => {
    return (
        <div className="col-xl-4 col-md-6">
            <div className="cnt-team-item mb-30">
                <div className="cnt-team-item-thumb mb-20">
                    <SmartLink href="/contact">
                        <Image className="img-fluid" width={424} height={456} src={img} alt={name} />
                    </SmartLink>
                </div>
                <div className="cnt-team-item-wrap d-flex align-items-center justify-content-between">
                    <div className="cnt-team-item-content">
                        <h4 className="cnt-team-item-title">
                            <SmartLink
                                className="underline-black"
                                href="/contact"
                            >
                                {name}
                            </SmartLink>
                        </h4>
                        <p>{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructionTeamCard;
