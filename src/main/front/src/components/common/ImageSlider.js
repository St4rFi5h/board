import React, { useState, useEffect } from "react";
import "./css/ImageSlider.css";

const images = [
    "/images/boradGame.jpg",
    "/images/climb.jpg",
    "/images/roastPost.jpg",
];

function ImageSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="slider">
            <img src={images[index]} alt="banner" className="slide-img" />
        </div>
    );
}

export default ImageSlider;