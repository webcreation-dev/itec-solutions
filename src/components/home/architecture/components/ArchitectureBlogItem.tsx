import { SmartLink } from "@/components/common";
import { HeroArrowRightIcon } from "@/svg";
import { BlogItemProps } from "@/types";
import Link from "next/link";

//  Single Blog Item Component 
const ArchitectureBlogItem: React.FC<BlogItemProps> = ({ delay, fadeFrom, image, categories, title, date, month, desc, slug, type }) => {
  return (
    <div className="col-lg-4 col-md-6 pb-40">
      <div
        className="al-blog-archi-wrapper tp_fade_anim"
        data-delay={delay}
        data-fade-from={fadeFrom}
        data-ease="bounce"
      >
        <div
          className="al-blog-archi-thumb fix mb-35 not-hide-cursor"
          data-cursor="READ<br/>MORE"
        >
          <SmartLink className="cursor-hide" href={`/blog-details/${type}/${slug}`}>
            <img className="w-100" src={image} alt="blog" />
          </SmartLink>
        </div>

        <div className="al-blog-archi-content">
          <div className="al-blog-archi-tag mb-20">
            <Link href="#">
              <span>
                <i className="fa-solid fa-circle-dashed"></i>
              </span>{" "}
              <span>
                {categories.map((cat, i) => (
                  <span key={i}>{cat}</span>
                ))}
              </span>
            </Link>
          </div>

          <h4 className="al-blog-archi-title mb-20">
            <SmartLink href={`/blog-details/${type}/${slug}`}>{title}</SmartLink>
          </h4>

          <div className="al-blog-archi-avatar mb-10 d-flex">
            <h5>
              {date} <br /> <span>{month}</span>
            </h5>
            <p className="al-blog-archi-avatar-para">{desc}</p>
          </div>

          <div className="al-blog-archi-btn">
            <SmartLink className="tp-left-right" href={`/blog-details/${type}/${slug}`}>
              read more{" "}
              <span className="tp-arrow-angle">
                <HeroArrowRightIcon />
              </span>
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureBlogItem;