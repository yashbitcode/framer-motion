import { Link } from "react-router-dom";
import type { blogInterface } from "../types/types";
import { getTrucateStr } from "../utils/helpers";
import { motion } from "motion/react";

const BlogsShowcase = ({ blogs }: { blogs: blogInterface[] }) => {
    return (
        <div className="flex flex-col gap-6">
            {blogs.map((el, idx) => (
                <motion.div
                    key={el.id}
                    initial={{
                        y: 10,
                        opacity: 0,
                        filter: "blur(10px)",
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 0.3,
                        delay: idx * 0.1,
                    }}
                >
                    <Link
                        to={el.href}
                        className="flex flex-row justify-between"
                    >
                        <div className="flex max-w-lg flex-col items-start gap-2">
                            <h1 className="text-primary text text-xl font-semibold">
                                {el.title}
                            </h1>
                            <p className="text-secondary">
                                {getTrucateStr(el.desc)}
                            </p>
                        </div>

                        <span className="text-secondary">
                            {el.dateCreated.toDateString()}
                        </span>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default BlogsShowcase;
