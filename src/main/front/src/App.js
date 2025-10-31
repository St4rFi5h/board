import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/user/Register";
import MainPage from "./pages/main/MainPage";
import axios from "axios";
axios.defaults.withCredentials = true;
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;