import ProjectShowCase from "../components/ProjectShowCase";
import TopHeading from "../components/TopHeading";
import { allProjects } from "../constants/constants";

const Projects = () => {
    return (
        <div>
            <TopHeading
                title="All Projects"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officiis libero debitis error dolorum."
            />
            <div className="mt-6 flex flex-col gap-4">
                <h1>Projects Lorem, ipsum dolor.</h1>
                <ProjectShowCase projects={allProjects} />
            </div>
        </div>
    );
};

export default Projects;
