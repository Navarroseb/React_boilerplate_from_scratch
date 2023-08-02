import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Content1 from "./components/content1";
import Content2 from "./components/content2";
import Content3 from "./components/content3";
import Footer from "./components/footer";

const App = () => {

    return (
        <>
            {/* Navigation*/}
            <Navbar />
            {/* Header*/}
            <Header />
            {/* Content section 1*/}
            <Content1 />
            {/* Content section 2*/}
            <Content2 />
            {/* Content section 3*/}
            <Content3 />
            {/* Footer*/}
            <Footer />
        </>
    )

};

export default App;