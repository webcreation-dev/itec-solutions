import BlogStandardPostItem from "./BlogStandardPostItem";
import { BlogStandardPost } from "./data";

interface BlogStandardPostsProps {
    posts: BlogStandardPost[];
}

const BlogStandardPosts = ({ posts }: BlogStandardPostsProps) => (
    <>
        {posts.map((post) => (
            <BlogStandardPostItem key={post.id} post={post} />
        ))}
    </>
);

export default BlogStandardPosts;
