import BlogsShowcase from "../components/BlogsShowcase";
import ProjectShowCase from "../components/ProjectShowCase";
import SectionHeading from "../components/SectionHeading";
import Testimonials from "../components/Testimonials";
import TopHeading from "../components/TopHeading";
import { allBlogs, allProjects, sideTagLine } from "../constants/constants";

const Home = () => {
    return (
        <div>
            <TopHeading
                title="Lorem Ipsum."
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officiis libero debitis error dolorum."
                tagLiner={sideTagLine}
            />
            <div className="mt-10 flex flex-col gap-4">
                <SectionHeading>Projects Lorem, ipsum dolor.</SectionHeading>
                <ProjectShowCase projects={allProjects.slice(0, 3)} />
            </div>
            <div className="mt-10 flex flex-col gap-4">
                <SectionHeading>Blogs Lorem, ipsum dolor.</SectionHeading>
                <BlogsShowcase blogs={allBlogs} />
            </div>

            <div className="mt-10 flex flex-col gap-4">
                <SectionHeading>Testimonials Lorem, ipsum dolor.</SectionHeading>
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;
