import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">모여모여</div>
            <ul className="navbar-menu">
                <li><a href="/">홈</a></li>
                <li>커뮤니티 후기</li>
                <li>정기 모임</li>

            </ul>
            <div className="navbar-icons">
                <span>♡</span>
                <span>👤</span>
            </div>
        </nav>
    );
}

export default Navbar;