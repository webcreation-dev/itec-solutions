import { PortfolioItemProps } from '@/types';
import { SmartLink } from '@/components/common';
import { ArrowIconThree } from '@/svg';

interface ProjectItemProps extends PortfolioItemProps {
    index: number; // Add index for animation delay
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, categories, slug, location, launchDate, type, index }) => {
    return (
        <div className={`al-project-seo-item mb-10 ${index !== 0 ? "tp_fade_anim" : ""}`}>
            <div className="row align-items-center">
                <div className="col-xl-7 col-lg-6">
                    <div className="al-project-seo-title-box">
                        <h4 className="al-project-seo-title">
                            <SmartLink href={`/portfolio-details/${type}/${slug}`}>{title}</SmartLink>
                        </h4>
                    </div>
                </div>

                <div className="col-xl-5 col-lg-6">
                    <div className="al-project-seo-content d-flex align-items-center justify-content-between">
                        <div className="al-project-seo-info">
                            <h5>{location}</h5>
                            <span>
                                {launchDate} <br /> {categories.join(", ")}
                            </span>
                        </div>
                        <div className="al-project-seo-btn">
                            <SmartLink href={`/portfolio-details/${type}/${slug}`}>
                                <span>
                                    <ArrowIconThree />
                                </span>
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;