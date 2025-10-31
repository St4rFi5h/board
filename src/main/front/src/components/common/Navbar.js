import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import LoginModal from "./LoginModal";

function Navbar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [userNm, setUserNm] = useState(null);

    // 페이지 로드 시 세션확인
    useEffect(() => {
        axios.get("http://localhost:8080/user/session", { withCredentials: true })
            .then(res => setUserNm(res.data.userNm))
            .catch(() => setUserNm(null));
    }, []);

    const handleLogout = async () => {
        await axios.post("http://localhost:8080/user/logout", {}, { withCredentials: true });
        setUserNm(null);
    };

    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">모여모여</Link>
                <ul className="navbar-menu">
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/community">커뮤니티 후기</Link></li>
                    <li><Link to="/club">동호회</Link></li>
                    <li><Link to="/pointshop">포인트샵</Link></li>
                </ul>

                <div className="navbar-icons">
                    {userNm ? (
                        <div>
                            <span>{userNm}님</span>
                            <button onClick={handleLogout}>로그아웃</button>
                        </div>
                    ) : (
                        <button onClick={() => setIsLoginOpen(true)}>로그인</button>
                    )}
                </div>
            </nav>

            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onLoginSuccess={() => {
                    axios.get("http://localhost:8080/user/session", { withCredentials: true })
                        .then(res => setUserNm(res.data.userNm))
                        .catch(() => setUserNm(null));
                }}
            />
        </div>
    );
}

export default Navbar;