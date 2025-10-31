import React, { useState } from "react";
import axios from "axios";
import "./css/Register.css";
import WarnModal from "../../components/common/WarnModal";  //모달 임포트
import {useNavigate} from "react-router-dom";   //페이지 이동

function Register() {
    const [user, setUser] = useState({
        userId: "",
        userNm: "",
        userPw: "",
        confirmPw: "",
    });

    const [profileImg, setProfileImg] = useState(null);
    const [preview, setPreview] = useState(process.env.PUBLIC_URL + "/images/empty-profile.png");
    const [modalMsg, setModalMsg] = useState(""); /*모달*/
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };
    /*이미지 업로드 시 프리뷰 설정*/
    const uploadPreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImg(file);
            setPreview(URL.createObjectURL(file));
        }
    };
    /*페이지 이동*/
    const movePage = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        /*비밀번호 일치 체크*/
        if (user.userPw !== user.confirmPw) {
            setModalMsg("비밀번호가 일치하지 않습니다.");
            return;
        }

        const formData = new FormData();
        formData.append("userId", user.userId);
        formData.append("userNm", user.userNm);
        formData.append("userPw", user.userPw);
        if (profileImg) formData.append("file", profileImg);
        try {
            await axios.post("http://localhost:8080/user/register", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setModalMsg("회원가입이 완료되었습니다.");
            setUser({ userId: "", userNm: "", userPw: "", confirmPw: "" });
            setProfileImg(null);
            setPreview(process.env.PUBLIC_URL + "/images/empty-profile.png");

            setTimeout(() => {   //회원가입 후 모달이 바로없어져서 알아낸 방법..
                movePage("/");
            }, 1500);

        } catch (error) {
            console.error(error);
            if (error.response && error.response.data) {
                setModalMsg(error.response.data);
            } else {
                alert("회원가입 중 오류가 발생했습니다."); //에러니깐 이것만 alert 로 띄우자
            }
        }
    };

    return (
        <div className="register-container">
            <h2>회원가입</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="profile-section">
                    <img src={preview} alt="프로필 미리보기" className="profile-preview" />
                    <input type="file" accept="image/*" onChange={uploadPreview} />
                </div>

                <input
                    type="email"
                    name="userId"
                    placeholder="이메일"
                    value={user.userId}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="userNm"
                    placeholder="이름"
                    value={user.userNm}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="userPw"
                    placeholder="비밀번호"
                    value={user.userPw}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPw"
                    placeholder="비밀번호 확인"
                    value={user.confirmPw}
                    onChange={handleChange}
                    required
                />
                <button type="submit">회원가입</button>
            </form>


            {modalMsg && (
                <WarnModal
                    message={modalMsg}
                    onClose={() => setModalMsg("")}
                />
            )}

        </div>
    );
}

export default Register;