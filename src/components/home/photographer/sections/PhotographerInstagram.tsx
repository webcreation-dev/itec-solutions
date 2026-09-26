import Image from "next/image";
import Link from "next/link";

const instagramImages = [
    "/assets/img/update/instagram/insta-1.jpg",
    "/assets/img/update/instagram/insta-2.jpg",
    "/assets/img/update/instagram/insta-3.jpg",
    "/assets/img/update/instagram/insta-4.jpg",
    "/assets/img/update/instagram/insta-5.jpg",
];
const PhotographerInstagram = () => {
    return (
        <section
            className="al-insta-pg-area pt-120"
            style={{ backgroundColor: "#121314" }}
        >
            {/* Title */}
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4">
                    <div className="al-insta-pg-title-box text-center mb-60">
                        <h4 className="al-insta-pg-title">
                            FOLLOW ME ON INSTAGRAM <span>@Aleric</span>
                        </h4>
                    </div>
                </div>
            </div>

            {/* Instagram Grid */}
            <div className="row gx-0 row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2">
                {instagramImages.map((image, index) => (
                    <div key={index} className="col-xl">
                        <div className="al-insta-pg-thumb fix">
                            <Link href="#" className={index === 0 ? "hide-cursor" : ""}>
                                <Image
                                    style={{ width: "100%", height: "auto" }}
                                    src={image}
                                    alt={`Instagram ${index + 1}`}
                                    width={270}
                                    height={338}
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PhotographerInstagram;