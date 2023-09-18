import Content_categories from "./components/Content_categories";
import Footer from "./components/Footer";
import Header from "./components/header";

function App({doc}) {
    return (
        <>
            <Header/>
            <Content_categories doc={doc}/>
            <Footer/>
        </>
    );
}

export default App;
