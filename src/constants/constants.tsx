import type { blogInterface, projectInterface } from "../types/types";

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
];

export const allBlogs: blogInterface[] = [
    {
        id: "1",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque unde similique eos, quisquam suscipit at architecto minima excepturi odio? Sed.",
        dateCreated: new Date(),
        href: "/blogs/tailwind"
    },
    {
        id: "2",
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque unde similique eos, quisquam suscipit at architecto minima excepturi odio? Sed.",
        dateCreated: new Date(),
        href: "/blogs/next"
    },
    
];