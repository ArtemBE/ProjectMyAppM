import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content_categories from "./components/Content_categories";
import Footer from "./components/Footer";
import Header from "./components/header";
import About from "./components/About";
import Basket from "./components/Basket";

function App({doc}) {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Content_categories doc={doc}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/basket" element={<Basket/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
