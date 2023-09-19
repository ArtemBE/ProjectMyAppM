import { BrowserRouter as Router } from "react-router-dom";
import Content_categories from "./components/Content_categories";
import Footer from "./components/Footer";
import Header from "./components/header";

function App({doc}) {
    return (
        <Router>
            <Header/>
            <Content_categories doc={doc}/>
            <Footer/>
        </Router>
    );
}

export default App;
