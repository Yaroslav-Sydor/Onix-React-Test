import Main from "./pages/main";
import './styles/app.css';
import Header from "./components/header/header";


function App() {
    return (
        <div className="App">
            <header>
                <Header />

            </header>
            <body>
            <Main/>

            </body>
            <footer>

            </footer>

        </div>
    );
}

export default App;
