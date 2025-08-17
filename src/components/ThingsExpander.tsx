import type { stuffInterface } from "../types/types";
import { motion } from "motion/react";

const ThingsExpander = ({ thingsUsed }: { thingsUsed: stuffInterface[] }) => {
    return (
        <div className="flex">
            {thingsUsed.map((el, idx) => (
                <motion.div
                    key={el.name + idx}
                    layout
                    initial={{
                        width: "2rem",
                    }}
                    whileHover={{
                        width: "auto",
                        zIndex: thingsUsed.length + 1,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    className="shadow-primary relative flex h-8 items-center overflow-hidden rounded-full  text-xl bg-neutral-50"
                    style={{
                        left: `${idx * -8}px`,
                        zIndex: idx,
                    }}
                >
                    <div className="pl-1.5 h-5 w-5 text-primary">{el.icon}</div>
                    <motion.div layout className="pl-3 pr-2 text-[0.9rem] font-semibold text-primary whitespace-nowrap">
                        {el.name}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

{/* <motion.div
    key={el.name + idx}
    layout
    initial={{ width: "2rem" }}
    whileHover={{
        width: "auto",
        zIndex: thingsUsed.length + 1,
    }}
    transition={{ duration: 0.3 }}
    className="shadow-primary relative flex h-8 items-center overflow-hidden rounded-full bg-white text-xl"
    style={{
        left: `${idx * -8}px`,
        zIndex: idx,
    }}
>
    <div className="ml-1.5 flex h-5 w-5 items-center justify-center">
        {el.icon}
    </div>
    <motion.span layout className="pr-3 pl-2 text-[0.9rem] whitespace-nowrap">
        {el.name}
    </motion.span>
</motion.div>; */}

export default ThingsExpander;
