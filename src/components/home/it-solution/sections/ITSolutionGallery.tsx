import { ArrowIconFourteen, RoundedAIcon } from "@/svg";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
    "/assets/img/gallery/thumb-3.jpg",
    "/assets/img/gallery/thumb-4.jpg",
    "/assets/img/gallery/thumb-5.jpg",
];

const GalleryImage = ({ src }: { src: string }) => (
    <div className="col-lg-6 col-md-6 mb-10">
        <div className="tp-gallery-it-thumb fix scale-up-img h-100">
            <Image width={469} height={469} className="w-100 scale-up img-fluid h-100" src={src} alt="gallery-img" />
        </div>
    </div>
);

const ITSolutionGallery = () => {
    return (
        <div className="tp-gallery-it-area fix">
            <div className="container-fluid p-0">
                <div className="row gx-10">
                    {/* Left Side */}
                    <div className="col-lg-6">
                        <div className="row gx-10">

                            {/* Featured Card */}
                            <div className="col-lg-6 col-md-6 mb-10">
                                <div
                                    className="tp-gallery-it-thumb-main tp-bg-common-green-3 p-relative fix h-100"
                                    style={{ backgroundImage: `url(/assets/img/gallery/thumb-2.jpg)` }}
                                >
                                    <div className="tp-gallery-it-item-wrap">
                                        <div className="tp-gallery-it-item-icon mb-20">
                                            <span>
                                                <RoundedAIcon />
                                            </span>
                                        </div>

                                        <h4 className="tp-gallery-it-title tp-ff-inter fw-600 fs-30 fs-lg-25 ls-m-6 tp-text-common-black-1">
                                            Unique and <br /> New Business Tips
                                        </h4>

                                        <div className="tp-gallery-it-btn-box">
                                            <span className="tp-ff-inter fw-600 fs-16 ls-m-4 tp-text-common-black-1">
                                                42k people
                                            </span>

                                            <Link
                                                href="/contact"
                                                className="tp-left-right tp-ff-inter fw-600 fs-16 ls-m-4 tp-text-common-black-1"
                                            >
                                                <span className="td-text d-inline-block mr-5">
                                                    Explore
                                                </span>
                                                <span className="tp-arrow-angle">
                                                    <ArrowIconFourteen />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic Images */}
                            {galleryImages.map((img, index) => (
                                <GalleryImage key={index} src={img} />
                            ))}
                        </div>
                    </div>

                    {/* Right Side Big Image */}
                    <div className="col-lg-6 mb-10">
                        <div className="tp-gallery-it-thumb fix scale-up-img h-100">
                            <Image width={948} height={948}
                                className="w-100 scale-up img-fluid h-100"
                                src="/assets/img/gallery/thumb.jpg"
                                alt="gallery-main"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITSolutionGallery;