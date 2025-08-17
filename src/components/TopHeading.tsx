import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { TopHeadingInterface } from "../types/types";

const TopHeading = ({ title, desc, tagLiner }: TopHeadingInterface) => {
    const [selectedIdx, setSelectedIdx] = useState(0);

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

    useEffect(() => {
        if (tagLiner) {
            setTimeout(() => {
                let randomIdx = selectedIdx;

                while (randomIdx === selectedIdx) {
                    randomIdx = +Math.floor(Math.random() * tagLiner.length);
                }

                setSelectedIdx(randomIdx);
            }, 3000);
        }
    }, [selectedIdx]);

    return (
        <div className="flex w-full max-w-xl flex-col gap-3">
            <div className="flex items-end gap-4">
                <motion.h2
                    variants={variant}
                    initial={"initial"}
                    whileInView={"inView"}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className="text-primary text-4xl font-bold text-shadow-lg"
                >
                    {title}
                </motion.h2>
                {tagLiner && (
                    <motion.div
                        layout
                        className="shadow-primary text-secondary relative bottom-1 overflow-hidden rounded-md px-2"
                    >
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                layout
                                key={tagLiner[selectedIdx]}
                                initial={{
                                    y: -20,
                                    filter: "blur(6px)",
                                }}
                                animate={{
                                    y: 0,
                                    filter: "blur(0px)",
                                    x: [0, -4, 4, 0],
                                }}
                                exit={{
                                    y: 20,
                                    filter: "blur(6px)",
                                }}
                                transition={{
                                    duration: 0.5,
                                    x: { delay: 0.55, duration: 0.45 },
                                }}
                                className="inline-block text-nowrap"
                            >
                                {tagLiner[selectedIdx]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
            <motion.p
                variants={variant}
                initial={"initial"}
                whileInView={"inView"}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.2,
                }}
                className="text-secondary text-lg"
            >
                {desc}
            </motion.p>
        </div>
    );
};

export default TopHeading;
