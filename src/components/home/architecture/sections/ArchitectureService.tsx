import ArchitectureServiceItem from "../components/ArchitectureServiceItem";
import { serviceData } from "@/data/service-data";

const ArchitectureService = () => {
    // Retrieve construction service items for rendering
    const services = serviceData.construction;

    return (
        <div className="al-service-archi-area pb-120">
            <div className="container">
                <div className="row">
                    {services.map((service, idx) => (
                        <ArchitectureServiceItem key={idx} {...service} type="construction" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArchitectureService;