import Image from "next/image";

const BlogStandardBanner = () => (
    <div className="p-blog-banne-area tp-about-me-banner scale-up-img">
        <Image
            data-speed="0.4"
            className="img-cover scale-up"
            src="/assets/img/breadcrumb/thumb-7.jpg"
            alt="Blog banner"
            width={1920}
            height={600}
            priority
        />
    </div>
);

export default BlogStandardBanner;
