import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Header></Header>
                <div className="">
                    <div className="row">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="bg-info">
                    <Footer></Footer>
                </div>
            </StrictMode>
        </>
    )
}

export default Basic;