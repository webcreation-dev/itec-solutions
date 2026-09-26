import PortfolioItem from "../components/PortfolioItem";
import portfolioData from "@/data/portfolio-data";
import { OutlineButton } from "@/components/ui";
import Image from "next/image";

const Portfolio = () => {
    // Retrieve IT Consulting portfolio items for rendering
    const portfolios = portfolioData.itConsulting;

    return (
        <section
            className="cst-portfolio-ptb cst-portfolio-bg pt-120 tp-panel-pin-area"
            style={{ backgroundColor: "#050312" }}
        >
            <div className="container container-1524">
                <div className="row">
                    {/* LEFT CONTENT */}
                    <div className="col-lg-6">
                        <div className="cst-portfolio-right tp-panel-pin mb-50">
                            <div className="cst-portfolio-heading z-index-1 p-relative">
                                <span className="cst-section-subtitle color-white mb-15 tp_fade_anim">
                                    Fueled by innovation. Backed by trust.
                                </span>

                                <h4 className="cst-section-title color-white mb-40 tp_fade_anim">
                                    Transforming your business sustainable strategy Agency
                                </h4>

                                <div className="cst-portfolio-btn tp_fade_anim">
                                    <OutlineButton href="/portfolio-col-2" className="cst-btn white-t" text="See All Portfolio" iconColor="currentColor" />
                                </div>
                            </div>

                            <div className="cst-portfolio-thumb z-index-1 p-relative pt-200">
                                <Image
                                    width={510}
                                    height={261}
                                    src="/assets/img/update-2/portfolio/thumb-1.jpg"
                                    alt="Portfolio main"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT ITEMS */}
                    <div className="col-lg-6">
                        <div className="cst-portfolio-wrapper">
                            {portfolios.map((item) => (
                                <PortfolioItem key={item.id} {...item} type="itConsulting" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;