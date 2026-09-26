import AnimatedCounter from "@/components/shared/Counter/AnimatedCounter";

interface FactItem {
    icon: React.ReactNode;
    title: string;
    value: number;
}
interface ArchitectureFactItemProps {
    item: FactItem;
    index: number;
    total: number;
}
const ArchitectureFactItem: React.FC<ArchitectureFactItemProps> = ({ item, index, total }) => {
    return (
        <div
            className={`al-fact-archi-count ${index !== total - 1 ? "mb-50" : ""
                }`}
        >
            <span className="al-fact-archi-icon mb-35 d-block">
                {item.icon}
            </span>

            <h5 className="al-fact-archi-subtitle mb-10">
                {item.title}
            </h5>

            <h3 className="al-fact-archi-number">
                <AnimatedCounter min={0} max={item.value}/>
                +
            </h3>
        </div>
    );
};

export default ArchitectureFactItem;