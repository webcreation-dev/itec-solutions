"use client";
import WebDesignAgencyPortfolioItem from "../components/WebDesignAgencyPortfolioItem";
import { PortfolioArrowLineDivider } from "@/svg/BorderLine";
import portfolioData from "@/data/portfolio-data";
import { useIsDarkRoute } from "@/hooks";

// tags
const portfolioTags = ["Dribbble", "99Design", "Behance", "GitHub"];

const WebDesignAgencyPortfolio = () => {
    // Retrieve web design agency portfolio items for rendering
    const portfolios = portfolioData.webDesignAgency;

    const isDarkTheme = useIsDarkRoute();
    // -------------------------------
    // Theme-based styles 
    // -------------------------------
    const themeClasses = {
        textPrimary: isDarkTheme ? "tp-text-common-white" : "tp-text-common-black",
        shapeFill: isDarkTheme ? "#525252" : "#030303",
    };
    // -------------------------------

    return (
        <div className="tp-portfolio-area pt-115">
            <div className="container-fluid container-1800">
                <div className="row">
                    <div className="col-12">
                        {/* Title */}
                        <div className="tp-portfolio-wd-title-wrap text-center mb-70">
                            <h2 className={`tp-portfolio-wd-title tp-ff-teko fw-600 text-uppercase tp-text-perspective ${themeClasses.textPrimary}`}>
                                Latest Work
                            </h2>

                            <div
                                className="tp-portfolio-tag tp-portfolio-wd-tag ml-200 tp_fade_anim"
                                data-delay=".4"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <PortfolioArrowLineDivider fillColor={themeClasses.shapeFill} />
                                {portfolioTags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Items */}
                        <div className="tp-portfolio-wd-wrap des-portfolio-wrap">
                            {portfolios.map((item, index) => (
                                <WebDesignAgencyPortfolioItem key={index} {...item} type="webDesignAgency" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDesignAgencyPortfolio;