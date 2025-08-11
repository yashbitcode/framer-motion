import type {
    blogInterface,
    projectInterface,
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
    },
    {
        id: "2",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imgSrc: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
    },
    {
        id: "3",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imgSrc: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
    },
    {
        id: "4",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imgSrc: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
    },
    {
        id: "5",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imgSrc: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
    },
    {
        id: "6",
        title: "Lorem, ipsum.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imgSrc: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
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
