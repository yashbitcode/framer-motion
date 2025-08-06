import type { projectInterface } from "../types/types";
import { motion } from "motion/react";

const ProjectShowCase = ({ projects }: { projects: projectInterface[] }) => {
    return (
        <div className="mt-8 grid grid-cols-3 gap-4">
            {projects.map((el, idx) => (
                <motion.div
                    key={el.id}
                    initial={{
                        opacity: 0,
                        y: 10,
                        filter: "blur(10px)",
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: idx * 0.1,
                    }}
                    className="group hover:shadow-primary rounded-b-2xl"
                >
                    <img
                        src={el.imgSrc}
                        alt="pro-img"
                        className="transition-scale rounded-xl object-cover duration-200 group-hover:scale-[1.02]"
                    />
                    <motion.div className="mt-6 mb-10 transition-all duration-200 group-hover:ml-4">
                        <h1 className="text-secondary text-xl font-semibold">
                            {el.title}
                        </h1>
                        <p className="text-secondary mt-2">{el.desc}</p>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default ProjectShowCase;
