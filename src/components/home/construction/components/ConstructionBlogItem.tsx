import { SmartLink } from "@/components/common";
import Image from "next/image";

interface BlogItem {
    userImg: string;
    userName: string;
    role: string;
    blogImg: string;
    title: string;
    category: string;
}

interface ConstructionBlogItemProps {
    item: BlogItem;
    isLast?: boolean;
}

const ConstructionBlogItem: React.FC<ConstructionBlogItemProps> = ({ item, isLast }) => {
    return (
        <div className={`cnt-blog-item-2 ${!isLast ? "bbr mb-30" : "mb-10"}`}>
            <div className="cnt-blog-item-2-user d-flex">
                <div className="cnt-blog-item-2-user-thumb">
                    <Image className="img-fluid" width={64} height={62} src={item.userImg} alt="user avatar" />
                </div>
                <div className="cnt-blog-item-2-user-content">
                    <h4 className="cnt-blog-item-2-user-title">
                        {item.userName}
                    </h4>
                    <p>{item.role}</p>
                </div>
            </div>

            <div className="cnt-blog-item-2-content">
                <div className="cnt-blog-item-2-thumb">
                    <SmartLink href="/references">
                        <Image className="img-fluid" width={351} height={186} src={item.blogImg} alt={item.title} />
                    </SmartLink>
                </div>

                <h4 className="cnt-blog-item-2-title">
                    <SmartLink
                        href="/references"
                        className="underline-black"
                    >
                        {item.title}
                    </SmartLink>
                </h4>

                <p>{item.category}</p>
            </div>
        </div>
    );
};

export default ConstructionBlogItem;
