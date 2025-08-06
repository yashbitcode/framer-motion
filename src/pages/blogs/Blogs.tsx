import BlogsShowcase from "../../components/BlogsShowcase";
import TopHeading from "../../components/TopHeading";
import { allBlogs } from "../../constants/constants";

const Blogs = () => {
    return (
        <div>
            <TopHeading title="All Blogs" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum alias ad vero perspiciatis consequuntur quam cumque possimus consequatur natus." />
            <div className="mt-7">
                <BlogsShowcase blogs={allBlogs} />
            </div>
        </div>
    );
};

export default Blogs;
