import React from "react";
import Search from "./Search";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

function Header() {
    return (
        <div>
        <h1 className="header">💊TonicTracker💊</h1>
        <Search />
        </div>
    )
}

export default Header;