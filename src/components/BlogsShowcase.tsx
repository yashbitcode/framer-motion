import { Link } from "react-router-dom";
import type { blogInterface } from "../types/types";
import { getTrucateStr } from "../utils/helpers";

const BlogsShowcase = ({ blogs }: { blogs: blogInterface[] }) => {
    return (
        <div className="flex flex-col gap-5">
            {blogs.map((el) => (
                <Link
                    to={el.href}
                    key={el.id}
                    className="flex flex-row justify-between"
                >
                    <div className="flex max-w-lg flex-col items-start gap-2">
                        <h1 className="text-primary text-xl text font-semibold">
                            {el.title}
                        </h1>
                        <p className="text-secondary">{getTrucateStr(el.desc)}</p>
                    </div>

                    <span className="text-secondary">
                        {el.dateCreated.toDateString()}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default BlogsShowcase;
