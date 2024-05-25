import Button from 'react-bootstrap/Button';
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Message from "./message";
import Header from "./layout/header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./layout/footer";
const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Main></Main>
                </div>
                <div className="col-md-4">
                    <Aside></Aside>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </StrictMode>
);
