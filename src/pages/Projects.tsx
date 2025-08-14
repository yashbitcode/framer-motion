import ProjectShowCase from "../components/ProjectShowCase";
import SectionHeading from "../components/SectionHeading";
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
                <SectionHeading>Lorem ipsum dolor sit.</SectionHeading>
                <ProjectShowCase projects={allProjects} />
            </div>
        </div>
    );
};

export default Projects;
