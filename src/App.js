import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content_categories from "./components/Content_categories";
import Footer from "./components/Footer";
import Header from "./components/header";

function App({doc}) {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Content_categories doc={doc}/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
