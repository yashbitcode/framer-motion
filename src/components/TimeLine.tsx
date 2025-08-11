import { CircleCheck } from "lucide-react";
import { timeline } from "../constants/constants";
import { motion } from "motion/react";

const TimeLine = () => {
    const variant = {
        initial: {
            opacity: 0,
            filter: "blur(10px)",
            y: -10,
        },
        inView: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
        },
    };

    return (
        <div className="mt-6 flex flex-col gap-6">
            <h1>Timeline Lorem, ipsum dolor.</h1>
            <div className="flex flex-col gap-8">
                {timeline.map((el, idx) => (
                    <div className="flex flex-col gap-4" key={el.yr}>
                        <motion.h2
                            key={el.yr}
                            variants={variant}
                            initial="initial"
                            whileInView="inView"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: idx * 0.08,
                            }}
                            className="shadow-primary w-fit rounded-md px-3 py-0.5 text-lg font-semibold"
                        >
                            {el.yr}
                        </motion.h2>
                        <div className="flex flex-col gap-4">
                            {el.content.map((el, idx1) => (
                                <div className="ml-7 flex gap-4" key={el.title}>
                                    <motion.div
                                        variants={variant}
                                        initial="initial"
                                        whileInView="inView"
                                        viewport={{
                                            once: true,
                                            amount: 0.4,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                            delay: idx1 * 0.1,
                                        }}
                                        className="relative top-1"
                                    >
                                        <CircleCheck
                                            size={18}
                                            color="var(--color-secondary)"
                                        />
                                    </motion.div>
                                    <div>
                                        <motion.h3
                                            variants={variant}
                                            initial="initial"
                                            whileInView="inView"
                                            viewport={{
                                                once: true,
                                                amount: 0.5,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                ease: "easeInOut",
                                                delay:idx1 * 0.1,
                                            }}
                                            className="text-primary text-[1.05rem] font-normal"
                                        >
                                            {el.title}
                                        </motion.h3>
                                        <motion.p
                                            variants={variant}
                                            initial="initial"
                                            whileInView="inView"
                                            viewport={{
                                                once: true,
                                                amount: 0.5,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                ease: "easeInOut",
                                                delay: idx1 * 0.15,
                                            }}
                                            className="text-secondary mt-1.5 text-sm"
                                        >
                                            {el.desc}
                                        </motion.p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeLine;
