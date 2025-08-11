import { useState } from "react";
import TopHeading from "../components/TopHeading";
import CustomInput from "../custom-components/CustomInput";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { fullname, email, message } = formData;

        if (!fullname || !email || !message) {
            console.log("error");
            return;
        }

        console.log(formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <TopHeading
                title="Contact"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officiis libero debitis error dolorum."
            />

            <form
                onSubmit={handleSubmit}
                className="mx-auto mt-7 flex max-w-lg flex-col gap-5"
            >
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="fullname"
                        className="text-secondary text-base font-semibold"
                    >
                        Full Name
                    </label>
                    <CustomInput
                        id="fullname"
                        name="fullname"
                        placeholder="Eg: Yash"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="text-secondary text-base font-semibold"
                    >
                        Email Address
                    </label>
                    <CustomInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Eg: abc@gmail.com"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="message"
                        className="text-secondary text-base font-semibold"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="shadow-primary resize-none rounded-md px-3 py-1 outline-0"
                        rows={5}
                        onChange={handleChange}
                        placeholder="Eg: Lorem ipsum dolor sit amet consectetur"
                    />
                </div>
                <button className="rounded-md bg-black/90 py-2 text-white">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
