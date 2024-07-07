import { Outlet } from "react-router-dom";
import NavBar from "../../SharedItems/NavBar/NavBar";
import Footer from "../../SharedItems/Footer/Footer";

const MainLayOut = () => {
    return (
        <div className="font-poppins">
            <div className="container mx-auto">
                <NavBar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayOut;