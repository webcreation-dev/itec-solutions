
interface PersonalPortfolioProcessItemProps {
    id: string;
    title: string;
    desc: string;
    delay?: string;
}
const PersonalPortfolioProcessItem: React.FC<PersonalPortfolioProcessItemProps> = ({ id, title, desc, delay }) => {
    const formattedTitle = title.split("\n").map((line: string, i: number) => (
        <span key={i}>
            {line}
            <br />
        </span>
    ));
    return (
        <div
            className="col-lg-3 col-md-6 col-sm-6"
            data-fade-from="left"
        >
            <div className="tp-process-pp-item text-center mb-30 tp_fade_anim" data-delay={delay}>
                <span className="tp-process-pp-count fw-600 fs-18 mb-40 tp-text-common-black d-inline-block tp-bg-theme-primary">
                    {id}
                </span>
                <h3 className="fs-25 tp-text-common-white lh-140-per mb-20">
                    {formattedTitle}
                </h3>
                <p className="fs-18 lh-140-per tp-text-grey-2">{desc}</p>
            </div>
        </div>
    );
};

export default PersonalPortfolioProcessItem;