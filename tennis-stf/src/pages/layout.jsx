import React from "react";
import {Outlet} from "react-router-dom";
import StickyHeader from "../components/StickyHeader/StickyHeader";
import PageFooter from "../components/PageFooter/PageFooter";

const Layout = () => {
    return (
        <>
        <StickyHeader />
        <main>
            <Outlet />
        </main>
        <PageFooter />
        </>
    )
}

export default Layout;