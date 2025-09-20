import {
    motion,
    useMotionTemplate,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react";

const springVars = {
    stiffness: 100,
    damping: 20,
};

const Maskings = () => {
    const { scrollYProgress } = useScroll();

    const maskSize = useSpring(
        useTransform(scrollYProgress, [0, 1], [14000, 400]),
        springVars,
    );
    const maskPosition = useSpring(
        useTransform(scrollYProgress, [0, 1], [-1800, 100]),
        springVars,
    );

    const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

    const outerImgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

    return (
        <div className="h-[200vh] bg-black">
            <motion.div
                className="fixed inset-0 h-full w-full bg-[url('/background.webp')] bg-cover bg-fixed"
                style={{
                    scale: imgScale,
                    opacity: outerImgOpacity,
                }}
            />
            <motion.div
                className="fixed inset-0 m-auto flex h-full w-full [mask-image:url('/gta1.svg')] [mask-repeat:no-repeat]"
                style={{
                    maskSize: useMotionTemplate`${maskSize}px`,
                    maskPosition: useMotionTemplate`center ${maskPosition}px`,
                }}
            >
                <motion.div
                    style={{
                        scale: imgScale,
                    }}
                    className="fixed inset-0 h-full w-full bg-[url('/background.webp')] bg-cover bg-fixed"
                />
                <motion.div
                    style={{
                        opacity,
                    }}
                    className="fixed inset-0 h-full w-full bg-white"
                />
            </motion.div>
        </div>
    );
};


export default Maskings;
