import { UserRound } from "lucide-react";
import { navItems } from "../constants/constants";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const NavBar = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const [scrolled, setScrolled] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest > 20) setScrolled(true);
        else setScrolled(false);
    });

    return (
        <motion.header
            animate={{
                boxShadow: scrolled ? "var(--shadow-primary)" : "none",
                width: scrolled ? "90%" : "100%",
                borderRadius: scrolled ? "100px" : "0%"

            }}
            className="flex sticky mx-auto top-2 items-center justify-between px-3 py-2"
        >
            <div className="shadow-primary rounded-full p-3 text-neutral-600">
                <UserRound />
            </div>

            <nav>
                <ul className="flex">
                    {navItems.map((el, idx) => (
                        <li
                            key={el.title}
                            className="relative px-2 py-1 text-base"
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* <Link to={el.href}>{el.title}</Link> */}
                            <span className="relative z-10">{el.title}</span>

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
