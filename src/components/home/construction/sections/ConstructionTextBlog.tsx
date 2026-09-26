import ConstructionBlogItem from "../components/ConstructionBlogItem";
import { SmartLink } from "@/components/common";
import { ArrowIconThree } from "@/svg";
import Image from "next/image";

// Data
const blogItems = [
    {
        id: 1,
        userImg: "/assets/img/update-2/blog/blog-user-1.png",
        userName: "ITEC Solutions",
        role: "Construction & réalisation",
        blogImg: "/assets/img/update-2/blog/blog-thumb-2.jpg",
        title: "Préparer un chantier : coordonner les intervenants dès l’amont.",
        category: "Méthode projet",
    },
    {
        id: 2,
        userImg: "/assets/img/update-2/blog/blog-user-2.png",
        userName: "ITEC Solutions",
        role: "Développement immobilier",
        blogImg: "/assets/img/update-2/blog/blog-thumb-3.jpg",
        title: "Concevoir un programme immobilier cohérent avec son territoire.",
        category: "Développement",
    },
];

const ConstructionTextBlog = () => {
    return (
        <div className="cnt-blog-ptb pt-140 pb-70">
            <div className="container container-1350">
                <div className="row">
                    {/* Left */}
                    <div className="col-xl-6">
                        <div
                            className="cnt-blog-item p-relative mb-30 tp_fade_anim"
                            data-delay=".3"
                            data-fade-from="left"
                            data-ease="bounce"
                        >
                            <div className="cnt-blog-item-thumb">
                                <Image className="img-fluid" width={648} height={699}
                                    src="/assets/img/update-2/blog/blog-thumb-1.jpg"
                                    alt="thumb"
                                />
                            </div>
                            <div className="cnt-blog-item-content">
                                <span className="cnt-blog-item-sub">Les expertises ITEC</span>

                                <h4 className="cnt-blog-item-title">
                                    <SmartLink
                                        href="/portfolio-col-3"
                                        className="underline-black"
                                    >
                                        Construire, développer <br />
                                        et coordonner <br />
                                        avec méthode.
                                    </SmartLink>
                                </h4>

                                <div className="cnt-blog-item-btn">
                                    <SmartLink
                                        className="upd-btn-black-square cnt-btn-style style-2 btn-transparent"
                                        href="/portfolio-col-3"
                                    >
                                        <i>
                                            <ArrowIconThree />
                                            <ArrowIconThree />
                                        </i>

                                        <span>
                                        <span className="text-1">Voir nos références</span>
                                        <span className="text-2">Voir nos références</span>
                                        </span>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="col-xl-6">
                        <div
                            className="cnt-blog-item-box tp_fade_anim"
                            data-delay=".3"
                            data-fade-from="right"
                            data-ease="bounce"
                        >
                            {blogItems.map((item, index) => (
                                <ConstructionBlogItem
                                    key={item.id}
                                    item={item}
                                    isLast={index === blogItems.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructionTextBlog;
