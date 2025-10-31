import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

//axios 전역 설정 추가
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true; // 쿠키 포함해서 요청

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);