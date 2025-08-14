import type React from "react";
import type { CSSProperties } from "react";

export interface projectInterface {
    id: string;
    title: string;
    desc: string;
    imgSrc: string;
}

export interface blogInterface {
    dateCreated: Date;
    id: string;
    title: string;
    desc: string;
    href: string;
}

export interface timelineInterface {
    yr: number;
    content: {
        title: string;
        desc: string;
    }[];
}

export interface CustomContainerInterface {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}

export interface CustomInputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    className?: string;
    style?: CSSProperties;
}

export interface reviewInterface {
    name: string;
    review: string;
    avatar: string;
}