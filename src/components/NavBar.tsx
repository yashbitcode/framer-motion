import { UserRound } from "lucide-react";
import { navItems } from "../constants/constants";
import {
    motion,
    useMotionTemplate,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const [scrolled, setScrolled] = useState(false);

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 100], [5, 10]);
    const width = useTransform(scrollY, [0, 100], [100, 75]);
    const borderRadius = useTransform(scrollY, [0, 100], [0, 50]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) setScrolled(true);
        else setScrolled(false);
    });

    return (
        <motion.header
            style={{
                boxShadow: scrolled ? "var(--shadow-primary)" : "none",
                width: useMotionTemplate`${width}%`,
                borderRadius: useMotionTemplate`${borderRadius}px`,
                y,
            }}
            className="sticky z-20 top-0 mx-auto bg-white/50 flex items-center justify-between px-3 py-2 backdrop-blur-md"
        >
            <Link
                to={"/"}
                className="shadow-primary rounded-full p-3 text-neutral-600"
            >
                <UserRound />
            </Link>

            <nav>
                <ul className="flex">
                    {navItems.map((el, idx) => (
                        <li
                            key={el.title}
                            className="relative px-2 py-1 text-base"
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <Link to={el.href} className="relative z-10">
                                {el.title}
                            </Link>

                            {hovered === idx && (
                                <motion.span
                                    layoutId="hover"
                                    className="absolute inset-0 z-5 h-full w-full rounded-md bg-neutral-100"
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
};

export default NavBar;
