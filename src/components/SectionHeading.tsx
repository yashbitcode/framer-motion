import { motion } from "motion/react";

const SectionHeading = ({ children }: { children: string }) => {
    return (
        <div className="relative w-fit px-3 py-0.5 text-[1.1rem]">
            {children.split(" ").map((el, idx) => (
                <motion.span
                    key={el + idx}
                    initial={{
                        y: 5,
                        opacity: 0,
                        filter: "blur(10px)",
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.05 * idx,
                    }}
                    className="relative z-10 inline-block"
                >
                    {el}&nbsp;
                </motion.span>
            ))}
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    delay: 1,
                    duration: 0.3,
                }}
                className="absolute inset-0 z-2 h-full bg-neutral-100"
            >
                <div className="absolute -top-[1px] -left-[1px] h-1.5 w-1.5 rounded-full bg-neutral-200" />
                <div className="absolute -top-[1px] -right-[1px] h-1.5 w-1.5 rounded-full bg-neutral-200" />
                <div className="absolute -right-[1px] -bottom-[1px] h-1.5 w-1.5 rounded-full bg-neutral-200" />
                <div className="absolute -bottom-[1px] -left-[1px] h-1.5 w-1.5 rounded-full bg-neutral-200" />
            </motion.div>
        </div>
    );
};

export default SectionHeading;
