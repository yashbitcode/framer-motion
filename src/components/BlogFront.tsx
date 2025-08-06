import { allBlogs } from "../constants/constants";
import BlogsShowcase from "./BlogsShowcase";
import TopHeading from "./TopHeading";

const BlogFront = () => {
    return (
        <>
            <TopHeading
                title="All Blogs"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum alias ad vero perspiciatis consequuntur quam cumque possimus consequatur natus."
            />
            <div className="mt-7">
                <BlogsShowcase blogs={allBlogs} />
            </div>
        </>
    );
};

export default BlogFront;
