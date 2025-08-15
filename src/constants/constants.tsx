import { RiAngularjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa";
import type {
    blogInterface,
    projectInterface,
    reviewInterface,
    timelineInterface,
} from "../types/types";

export const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Project",
        href: "/projects",
    },
    {
        title: "Blogs",
        href: "/blogs",
    },
    {
        title: "Contact",
        href: "/Contact",
    },
];

export const allProjects: projectInterface[] = [
    {
        id: "1",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imgSrc: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
        techUsed: [
            {
                icon: <FaReact />,
                name: "React",
            },
            {
                icon: <RiTailwindCssFill />,
                name: "Tailwind",
            },
            {
                icon: <FaVuejs />,
                name: "Vue",
            },
        ],
    },
    {
        id: "2",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imgSrc: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
        techUsed: [
            {
                icon: <FaHtml5 />,
                name: "HTML",
            },
            {
                icon: <FaCss3Alt />,
                name: "CSS",
            },
            {
                icon: <RiAngularjsFill />,
                name: "Angular",
            },
        ],
    },
    {
        id: "3",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imgSrc: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
        techUsed: [
            {
                icon: <FaReact />,
                name: "React",
            },
            {
                icon: <RiTailwindCssFill />,
                name: "Tailwind",
            },
            {
                icon: <FaVuejs />,
                name: "Vue",
            },
        ],
    },
    {
        id: "4",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imgSrc: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
        techUsed: [
            {
                icon: <FaHtml5 />,
                name: "HTML",
            },
            {
                icon: <FaCss3Alt />,
                name: "CSS",
            },
            {
                icon: <RiAngularjsFill />,
                name: "Angular",
            },
        ],
    },
    {
        id: "5",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imgSrc: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
        techUsed: [
            {
                icon: <FaReact />,
                name: "React",
            },
            {
                icon: <RiTailwindCssFill />,
                name: "Tailwind",
            },
            {
                icon: <FaVuejs />,
                name: "Vue",
            },
        ],
    },
    {
        id: "6",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imgSrc: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
        techUsed: [
            {
                icon: <FaHtml5 />,
                name: "HTML",
            },
            {
                icon: <FaCss3Alt />,
                name: "CSS",
            },
            {
                icon: <RiAngularjsFill />,
                name: "Angular",
            },
        ],
    },
];

export const allBlogs: blogInterface[] = [
    {
        id: "1",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque unde similique eos, quisquam suscipit at architecto minima excepturi odio? Sed.",
        dateCreated: new Date(),
        href: "/blogs/tailwind",
    },
    {
        id: "2",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque unde similique eos, quisquam suscipit at architecto minima excepturi odio? Sed.",
        dateCreated: new Date(),
        href: "/blogs/next",
    },
];

export const timeline: timelineInterface[] = [
    {
        yr: 2025,
        content: [
            {
                title: "Lorem Ipsum",
                desc: "Dolor sit amet consectetur adipiscing elit sed do.",
            },
        ],
    },
    {
        yr: 2024,
        content: [
            {
                title: "Consectetur Elit",
                desc: "Adipiscing elit sed do eiusmod tempor incididunt ut.",
            },
            {
                title: "Eiusmod Tempor",
                desc: "Labore et dolore magna aliqua ut enim ad.",
            },
        ],
    },
    {
        yr: 2023,
        content: [
            {
                title: "Ut Labore",
                desc: "Dolore magna aliqua ut enim ad minim veniam.",
            },
            {
                title: "Minim Veniam",
                desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            },
        ],
    },
    {
        yr: 2022,
        content: [
            {
                title: "Nostrud Exercitation",
                desc: "Ullamco laboris nisi ut aliquip ex ea commodo.",
            },
        ],
    },
    {
        yr: 2021,
        content: [
            {
                title: "Aliquip Ex",
                desc: "Ea commodo consequat duis aute irure dolor in.",
            },
            {
                title: "Duis Aute",
                desc: "Reprehenderit in voluptate velit esse cillum dolore eu.",
            },
        ],
    },
    {
        yr: 2020,
        content: [
            {
                title: "Reprehenderit Voluptate",
                desc: "Fugiat nulla pariatur excepteur sint occaecat cupidatat non.",
            },
        ],
    },
];

export const reviews: reviewInterface[] = [
    {
        name: "Aisha",
        review: "This product truly impressed me—fast delivery, responsive support, and excellent build quality.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    },
    {
        name: "Raj",
        review: "Elegant design with flawless performance. I’ve recommended it to all my friends already.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    },
    {
        name: "Sophia",
        review: "The attention to detail is clear—from packaging to functionality, it's been a delightful experience.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    },
    {
        name: "Omar",
        review: "Impressive craftsmanship—sturdy, stylish, and practical. Highly satisfied with the purchase.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    },
    {
        name: "Liam",
        review: "User-friendly and dependable. The customer service team was quick and helpful, too.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    },
    {
        name: "Priya",
        review: "Exceeded expectations in all ways—quality materials, smooth setup, and great value overall.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    },
];
