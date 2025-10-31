import React, { useState } from "react";
import "./css/LoginModal.css";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginModal({ isOpen, onClose, onLoginSuccess = () => {} }) {
    const [user, setUser] = useState({ userId: "", userPw: "" });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user.userId || !user.userPw) {
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }

        try {

            await axios.post("http://localhost:8080/user/login", user, { withCredentials: true });
            alert("로그인 성공");
            onLoginSuccess?.();
            onClose();
        } catch (err) {
            alert(err.response?.data || "로그인 실패");
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>로그인</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="userId"
                        placeholder="이메일"
                        value={user.userId}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="userPw"
                        placeholder="비밀번호"
                        value={user.userPw}
                        onChange={handleChange}
                    />
                    <div className="modal-actions">
                        <button type="submit" className="login-btn">
                            로그인
                        </button>
                        <Link to="/register">
                            <button type="button" className="sub-btn">
                                회원가입
                            </button>
                        </Link>
                        <button type="button" className="sub-btn">
                            비밀번호 찾기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;