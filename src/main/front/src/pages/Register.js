import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; // 스타일은 아래에 추가

function Register() {
    const [user, setUser] = useState({
        userId: "",
        userPw: "",
    });

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
            await axios.post("http://localhost:8080/api/user/register", user);
            alert("회원가입 성공!");
            setUser({ userId: "", userPw: "" });
        } catch (err) {
            alert("이미 존재하는 아이디입니다.");
        }
    };

    return (
        <div className="register-container">
            <h2>회원가입</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userId"
                    placeholder="아이디"
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
                <button type="submit">가입하기</button>
            </form>
        </div>
    );
}

export default Register;