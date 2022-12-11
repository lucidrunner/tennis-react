import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./PageFooter.scss"

const PageFooter = () => {
    const { pathname } = useLocation();
    return (
        <footer>
            <Logo to={pathname} text="STF" />
            <address>
                Skänninge Tennisförening <br />
                Villa Villekulla 123<br />
                Skänninge <br />
                Sverige <br />
            </address>
        </footer>
    )
}

export default PageFooter;