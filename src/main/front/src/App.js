import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Main from "./pages/Main";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;