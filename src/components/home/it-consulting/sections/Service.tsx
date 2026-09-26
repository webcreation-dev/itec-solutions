import ServiceItem from "../components/ServiceItem";
import { serviceData } from "@/data/service-data";

const Service = () => {
    // Retrieve IT Consulting service items for rendering
    const services = serviceData.itConsulting;

    return (
        <section className="cst-service-ptb pb-120">
            <div className="container container-1524">

                {/* Section Heading */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cst-service-heading text-center mb-60">
                            <span className="cst-section-subtitle mb-15 tp_fade_anim">
                                Fueled by innovation. Backed by trust.
                            </span>

                            <h4 className="cst-section-title tp_fade_anim">
                                Transforming your business for sustainable growth and innovation strategy Agency
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="row">
                    {services.map((service) => (
                        <ServiceItem key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;