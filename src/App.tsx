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

const AppLayout = () => {
    return (
        <div className="bg-neutral-100">
            <CustomContainer className="relative min-h-screen bg-white px-5">
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
                        element: <BlogFront />
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
]);

const App = () => {
    return <RouterProvider router={routes} />;
};

export default App;
