import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import CreateThread from "./components/CreateThread";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/create-thread" element={<CreateThread />} /> 
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;