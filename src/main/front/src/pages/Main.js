import React from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import "./Main.css";

function Main() {
    return (
        <>
            <Navbar />
            <ImageSlider />
            <section className="main-content">
                <h2>그 날 투표로 인원모이면 출발</h2>
                <div className="card-list">
                    <div className="card">
                        <h3>나무놀보</h3>
                        <p>나는 오늘 무조건 놀거에요 보드게임하고</p>
                    </div>
                    <div className="card">
                        <h3>로스트포스트</h3>
                        <p>커피에 진심인 사람들</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Main;