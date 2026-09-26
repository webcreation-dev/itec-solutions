import Image from "next/image";

interface StartupAgencyProcessItemProps {
    step: {
        count: string;
        title: string;
        description: string;
        items: string[];
        delay: string;
    };
}

const StartupAgencyProcessItem = ({ step }: StartupAgencyProcessItemProps) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="tp-process-sa-item mb-70 tp_fade_anim" data-delay={step.delay} data-fade-from="left">
                <div className="tp-process-sa-item-icon p-relative d-inline-block mb-40">
                    <span className="tp-process-sa-item-count fw-700 fs-25 fs-700 tp-text-common-white">{step.count}</span>
                    <Image src="/assets/img/process/circle.png" alt="circle" width={70} height={70} />
                </div>
                <h3 className="fs-35 tp-text-common-white mb-20">{step.title}</h3>
                <p className="fs-18 tp-text-grey-2 mb-30">{step.description}</p>
                <div className="tp-process-sa-list">
                    <ul>
                        {step.items.map((it, i) => (
                            <li key={i}>{it}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyProcessItem;