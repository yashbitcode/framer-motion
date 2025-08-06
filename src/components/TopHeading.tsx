const TopHeading = ({
    title,
    desc
}: {
    title: string;
    desc: string;
}) => {
    return (
        <div className="flex flex-col gap-3 w-full max-w-xl">
            <h1 className="text-primary font-bold text-4xl">{title}</h1>
            <p className="text-secondary text-lg">{desc}</p>
        </div>
    );
};

export default TopHeading;