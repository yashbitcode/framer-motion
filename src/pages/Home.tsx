import ProjectShowCase from "../components/ProjectShowCase";
import TopHeading from "../components/TopHeading";
import { allProjects } from "../constants/constants";

const Home = () => {

    return (
        <div>
            <TopHeading title="Lorem Ipsum." desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officiis libero debitis error dolorum." />
            <ProjectShowCase projects={allProjects} />
        </div>
    );
};

export default Home;
