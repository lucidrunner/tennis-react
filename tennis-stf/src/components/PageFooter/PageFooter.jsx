import React from "react";
import Logo from "../Logo/Logo";
import "./PageFooter.css"

const PageFooter = () => {
    return(
        <footer>
            {/* Fundera på routing här också , ta ur länk ur Logo
            och istället */}
            <Logo text="STF" />
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