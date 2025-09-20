import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import CustomContainer from "./custom-components/CustomContainer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/Contact";
import NextBlog from "./pages/blogs/mainBlogs/NextBlog";
import TailwindBlog from "./pages/blogs/mainBlogs/TailwindBlog";
import BlogFront from "./components/BlogFront";
import Maskings from "./pages/Maskings";

const AppLayout = () => {
    return (
        <div className="bg-neutral-100 [--pattern-fg:var(--color-gray-950)]/5">
            <CustomContainer className="relative min-h-screen bg-white px-11">
                <div className="absolute top-0 -right-0 h-full bg-white w-7 border-x border-[#f3f3f3] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed" />
                <div className="absolute top-0 -left-0 h-full bg-white w-7 border-x border-[#f3f3f3] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed" />
                <NavBar />
                <div className="mt-8">
                    <Outlet />
                </div>
            </CustomContainer>
        </div>
    );
};


const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "blogs",
                element: <Blogs />,
                children: [
                    {
                        index: true,
                        element: <BlogFront />,
                    },
                    {
                        path: "tailwind",
                        element: <TailwindBlog />,
                    },
                    {
                        path: "next",
                        element: <NextBlog />,
                    },
                ],
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "/masking",
        element: <Maskings />
    }
]);

const App = () => {
    return <RouterProvider router={routes} />;
};

export default App;
