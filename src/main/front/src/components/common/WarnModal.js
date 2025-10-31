import React from "react";
import "./css/WarnModal.css";

function WarnModal({ message, onClose }) {
    if (!message) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-box">
                <p className="modal-message">{message}</p>
                <button className="modal-btn" onClick={onClose}>
                    확인
                </button>
            </div>
        </div>
    );
}

export default WarnModal;