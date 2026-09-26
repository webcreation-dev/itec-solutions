import { SmartLink } from '@/components/common';
import { ProjectItemProps } from '@/types';
import { ArrowIconFour } from '@/svg';

const ProjectItemTwo: React.FC<ProjectItemProps> = ({ title, category, image, year }) => {
    return (
        <div className="al-project-pg-2-item p-relative tp-reveal-item active">
            <SmartLink href="/portfolio-details-creative">
                <div className="al-project-pg-2-inner-item d-flex justify-content-between align-items-center">
                    <div className="al-project-pg-2-content d-flex align-items-start">
                        <div className="al-project-pg-2-year">
                            <span>{year}</span>
                        </div>
                        <div className="al-project-pg-2-title-box">
                            <h4 className="al-project-pg-2-title">
                                {title}
                            </h4>
                            <span>{category}</span>
                        </div>
                    </div>
                    <div className="al-project-pg-2-link">
                        <span>
                            <ArrowIconFour />
                        </span>
                    </div>
                </div>
            </SmartLink>
            {/* Reveal Background */}
            <div
                className="tp-reveal-bg"
                style={{ backgroundImage: `url(${image})` }}
            />
        </div>

    );
};

export default ProjectItemTwo;