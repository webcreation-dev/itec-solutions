import PortfolioShowcaseItemCard from "../components/PortfolioShowcaseItemCard";

const portfolioData = [
    {
        id: 1,
        title: "Polygona Arct Design",
        image: "/assets/img/portfolio/wd/thumb.jpg",
        categories: ["Research", "Development"],
        year: "2025",
        link: "/portfolio-details-gallery",
    },
    {
        id: 2,
        title: "Epic Strategy App",
        image: "/assets/img/portfolio/wd/thumb-2.jpg",
        categories: ["Research", "Development"],
        year: "2025",
        link: "/portfolio-details-gallery",
    },
    {
        id: 3,
        title: "Making Brands Shine",
        image: "/assets/img/portfolio/wd/thumb-3.jpg",
        categories: ["Research", "Development"],
        year: "2025",
        link: "/portfolio-details-gallery",
    },
    {
        id: 4,
        title: "Creating Impact Online",
        image: "/assets/img/portfolio/wd/thumb-4.jpg",
        categories: ["Research", "Development"],
        year: "2025",
        link: "/portfolio-details-gallery",
    },
];

const PortfolioShowcasePortfolio = () => {
    return (
        <div className="tp-portfolio-area pt-140">
            <div className="container-fluid container-1800">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-portfolio-wd-wrap des-portfolio-wrap">
                            {portfolioData.map((item) => (
                                <PortfolioShowcaseItemCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioShowcasePortfolio;