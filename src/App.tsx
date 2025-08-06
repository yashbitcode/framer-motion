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
            },
            {
                path: "blogs/tailwind",
                element: <TailwindBlog />,
            },
            {
                path: "blogs/next",
                element: <NextBlog />,
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
