import { motion } from "motion/react";

const TopHeading = ({ title, desc }: { title: string; desc: string }) => {
    const variant = {
        initial: {
            filter: "blur(10px)",
            opacity: 0,
            y: 10,
        },
        inView: {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div className="flex w-full max-w-xl flex-col gap-3">
            <motion.h2
                variants={variant}
                initial={"initial"}
                whileInView={"inView"}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="text-primary text-4xl text-shadow-lg font-bold"
            >
                {title}
            </motion.h2>
            <motion.p
                variants={variant}
                initial={"initial"}
                whileInView={"inView"}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.2
                }}
                className="text-secondary text-lg"
            >
                {desc}
            </motion.p>
        </div>
    );
};

export default TopHeading;
