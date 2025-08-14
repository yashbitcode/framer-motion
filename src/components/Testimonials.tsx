import Marquee from "react-fast-marquee";
import { reviews } from "../constants/constants";
import type { reviewInterface } from "../types/types";

const Testimonials = () => {
    return (
        // [mask-image:linear-gradient(to_right,transparent,white_10%,transparent)]
        <div className="[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <Marquee className="py-2" pauseOnHover>
                {reviews.map((el, idx) => (
                    <TestimonialCard key={el.name + idx} {...el} />
                ))}
            </Marquee>
        </div>
    );
};

const TestimonialCard = ({ name, review, avatar }: reviewInterface) => {
    return (
        <div className="text-secondary shadow-primary mx-2 max-w-70 rounded-lg p-4">
            <p>{review}</p>
            <div className="mt-10 flex items-center gap-4">
                <img
                    src={avatar}
                    alt="avatar"
                    className="h-6 w-6 rounded-full"
                />
                <span className="font-semibold">{name}</span>
            </div>
        </div>
    );
};

export default Testimonials;
