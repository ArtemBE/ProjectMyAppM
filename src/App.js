import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content_categories from "./components/Content_categories";
import Footer from "./components/Footer";
import Header from "./components/header";
import About from "./components/About";
import Basket from "./components/Basket";
import CardFull from "./components/CardFull";
import { useSelector } from "react-redux";

function App() {
    let open = useSelector(state=>state.fullCard);
    let scroll = useSelector(state=>state.scroll);
    return (
        <Router>
            <div class="notCard" style={{
                    position: open?'fixed':'relative',
                    transform: open?'translateY(-' + scroll + 'px)':'translateY(0px)',
                }}
            >
                <Header/>
                <Routes>
                    <Route path="/" element={<Content_categories/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                </Routes>
                <Footer/>
            </div>
            {open && <CardFull/>}
        </Router>
    );
}

export default App;
