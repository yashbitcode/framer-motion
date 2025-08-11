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
