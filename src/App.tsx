import NavBar from "./components/NavBar";
import CustomContainer from "./custom-components/CustomContainer";

const App = () => {
    return (
        <div className="bg-neutral-100 ">
            <CustomContainer className="bg-white relative min-h-[200vh] px-5 text-3xl">
                <NavBar />
            </CustomContainer>
        </div>
    );
};

export default App;
