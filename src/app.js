import Main from "./pages/main";
import './styles/app.css';
import Header from "./components/header/header";
import Navigation from "./components/header/navigation";
import Footer from "./components/footer/footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
