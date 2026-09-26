import { AdobeXDIcon, FigmaLogoIcon, FramerIcon, WebflowIcon } from "@/svg/CounterIcons";
import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";

interface SkillItemProps {
    type: string;
    name: string;
    value: number;
}

const SkillItem: React.FC<{ item: SkillItemProps }> = ({ item }) => {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="tp-about-pp-skill-wrap d-flex align-items-center mb-30">
                <span className="tp-about-pp-skill-icon mr-25">
                    {
                        (item.type === "figma" && <FigmaLogoIcon />) ||
                        (item.type === "adobe-xd" && <AdobeXDIcon />) ||
                        (item.type === "webflow" && <WebflowIcon />) ||
                        (item.type === "framer" && <FramerIcon />)
                    }
                </span>

                <div className="tp-about-pp-skill-content">
                    <span className="tp-text-common-white fw-500 fs-18 tp-text-common-white">
                        {item.name}
                    </span>

                    <h3 className="fs-50 fs-xl-45 fw-500 tp-text-common-white lh-120-per mb-0">
                        <AnimatedCounter min={0} max={item.value} />
                        %
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default SkillItem;