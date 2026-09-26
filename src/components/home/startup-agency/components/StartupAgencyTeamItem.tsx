import { SmartLink } from '@/components/common';
import { useIsDarkRoute } from '@/hooks';
import { TeamItemProps } from '@/types';
import Image from 'next/image';

const StartupAgencyTeamItem: React.FC<TeamItemProps> = ({id, delay, img, name, role, type }) => {
    const isDark = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const teamItemStyles = {
        nameColor: isDark ? "tp-text-common-white" : "",
        roleColor: isDark ? "tp-text-grey-2" : "tp-text-grey-1",
    }
    return (
        <div className="col-lg-3 col-md-6">
            <div className="tp-team-sa-item mb-90" data-speed={delay}>
                <div className="tp-team-sa-thumb mb-20 tp--hover-item p-relative">
                    <div className="tp--hover-img" data-displacement={img} data-intensity="0.6" data-speedin="1" data-speedout="1">
                        <Image className="w-100 img-fluid" src={img} alt={name} width={311} height={400} />
                    </div>
                </div>
                <div className="tp-team-sa-content text-center">
                    <h5 className={`tp-ff-heading fw-500 fs-25 mb-5 ${teamItemStyles.nameColor}`}>
                        <SmartLink href={`/team-details/${type}/${id}`} className="underline-black">{name}</SmartLink>
                    </h5>
                    <span className={`fs-16 ${teamItemStyles.roleColor}`}>{role}</span>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyTeamItem;