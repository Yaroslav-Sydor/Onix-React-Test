import '../styles/main.css';
import Header from "../components/header/header";
import '../styles/global.css'
import Suppliers from "../components/suppliers/suppliers";

function Main() {
  return (
    <div className="App">
      <div className={"container"}>
          <Suppliers/>

      </div>


    </div>
  );
}

export default Main;
