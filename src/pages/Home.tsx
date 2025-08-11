import BlogsShowcase from "../components/BlogsShowcase";
import ProjectShowCase from "../components/ProjectShowCase";
import TopHeading from "../components/TopHeading";
import { allBlogs, allProjects } from "../constants/constants";

const Home = () => {
    return (
        <div>
            <TopHeading title="Lorem Ipsum." desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officiis libero debitis error dolorum." />
            <div className="mt-6 flex flex-col gap-4">
                <h1>Projects Lorem, ipsum dolor.</h1>
                <ProjectShowCase projects={allProjects.slice(0, 3)} />
            </div>
            <div className="mt-6 flex flex-col gap-4">
                <h1>Blogs Lorem, ipsum dolor.</h1>
                <BlogsShowcase blogs={allBlogs} />
            </div>      
        </div>
    );
};

export default Home;
