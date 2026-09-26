import { SmartLink } from '@/components/common';
import Image from 'next/image';

interface ProjectItemProps {
    title: string;
    image: string;
    href: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, image, href }) => {

    return (
        <div className="al-project-pg-item">
            <div
                className="al-project-pg-thumb not-hide-cursor"
                data-cursor="View<br>Demo"
            >
                <SmartLink className="cursor-hide" href={href}>
                    <Image
                        src={image}
                        alt={title}
                        width={582}
                        height={615}
                    />
                </SmartLink>
            </div>
            <div className="al-project-pg-content">
                <h4 className="al-project-pg-title">
                    <SmartLink href={href}>{title}</SmartLink>
                </h4>
            </div>
        </div>
    );
};

export default ProjectItem;