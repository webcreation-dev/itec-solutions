import Image from "next/image";
import Link from "next/link";

interface MedicalHeroDoctorItemProps {
    img: string;
    index: number;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    title?: string;
    count?: string;
    role?: string;
    link?: string;
}

const MedicalHeroTeamItem = ({
    img,
    index,
    activeIndex,
    setActiveIndex,
    title = "Orthopaedic Surgeon",
    count = "15+",
    role = "Doctor",
    link = "/team-details",
}: MedicalHeroDoctorItemProps) => {
    return (
        <div
            onMouseEnter={() => setActiveIndex(index)}
            className={`tp-hero-md-col-custom ${activeIndex === index ? "active" : ""
                }`}
        >
            <div className="tp-hero-md-panel-item p-relative">
                <div className="tp-hero-md-panel-thumb">
                    <Image
                        className="img-fluid"
                        src={img}
                        alt={title}
                        width={507}
                        height={624}
                    />
                </div>

                <div className="tp-hero-md-panel-content">
                    <h4 className="tp-hero-md-panel-title mb-15">
                        <Link href={link} className="underline-black">
                            {title.split(" ").map((word, i) => (
                                <span key={i}>
                                    {word} {i === 0 && <br />}
                                </span>
                            ))}
                        </Link>
                    </h4>

                    <div className="tp-hero-md-panel-meta">
                        <span className="count">{count}</span>
                        <span className="doctor">{role}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalHeroTeamItem;