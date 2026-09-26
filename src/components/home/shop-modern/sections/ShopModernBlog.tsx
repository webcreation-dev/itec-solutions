import ShopModernBlogItem from "../components/ShopModernBlogItem";
import { ShopBorderShape } from "@/svg/BorderLine";
import { SmartLink } from "@/components/common";
import { blogData } from "@/data/blog-data";

const ShopModernBlog = () => {
    // Retrieve architecture blog items for rendering
    const blogs = blogData.shopModern;

    return (
        <div className="al-blog-shop-area pt-110 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="al-section-shop-title-wrapper mb-50 text-center">
                            <span className="al-section-shop-subtitle">
                                Our Blog & News
                                <ShopBorderShape />
                            </span>
                            <h3 className="al-section-shop-title">
                                Latest News & Articles
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {blogs.map((blog) => (
                        <ShopModernBlogItem key={blog.id} {...blog} type="shopModern" />
                    ))}
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="al-blog-shop-more mt-10 text-center">
                            <SmartLink
                                href="/blog-grid"
                                className="al-shop-btn al-shop-btn-border al-shop-btn-border-sm"
                            >
                                Discover More
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopModernBlog;