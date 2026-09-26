import PlumbingPortfolioItem from "../components/PlumbingPortfolioItem";
import { plumbingPortfolioItems } from "@/data/portfolio-data-two";

const PlumbingServicePortfolio = () => {
    return (
        <div className="tp-portfolio-area">
            <div className="container-fluid p-0">
                <div className="row gx-12">
                    {plumbingPortfolioItems.map((item, index) => (
                        <PlumbingPortfolioItem {...item} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlumbingServicePortfolio;