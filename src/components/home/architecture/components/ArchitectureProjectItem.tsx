import { SmartLink } from "@/components/common";
import { HeroArrowRightIcon } from "@/svg";

interface ProjectItem {
    img: string;
    year: string;
    title: React.ReactNode;
    colClass: string;
    href: string;
}
interface ArchitectureProjectItemProps {
    item: ProjectItem;
}

const ArchitectureProjectItem: React.FC<ArchitectureProjectItemProps> = ({ item }) => {
    return (
        <div className={`${item.colClass} mb-20 grid-item`}>
            <div className="al-project-archi-wrapper">
                <div className="al-project-archi-thumb fix mb-40">
                    <img
                        data-speed=".8"
                        className="img-cover w-100"
                        src={item.img}
                        alt="project"
                    />
                </div>
                <div className="al-project-archi-content">
                    <div className="al-project-archi-meta mb-15">
                        <h5>- {item.year}</h5>
                    </div>
                    <h3 className="al-project-archi-title-sm m-0">
                        <SmartLink href={item.href}>
                            {item.title}
                        </SmartLink>
                    </h3>
                    <div className="al-project-archi-icon">
                        <SmartLink className="tp-left-right" href={item.href}>
                            <div className="tp-arrow-angle">
                                <HeroArrowRightIcon />
                            </div>
                        </SmartLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ArchitectureProjectItem;
