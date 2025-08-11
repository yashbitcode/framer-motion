import TimeLine from "../components/TimeLine";
import TopHeading from "../components/TopHeading";

const About = () => {
    return (
        <div className="min-h-[400vh]">
            <TopHeading
                title="About Me"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, labore cumque nostrum amet exercitationem numquam enim quod nemo vero temporibus."
            />
            <TimeLine />
        </div>
    );
};

export default About;
