import '../styles/main.css';
import Header from "../components/header/header";
import '../styles/global.css'
import Suppliers from "../components/suppliers/suppliers";
import Extra from "../components/main/extra-services/extra";
import Recommended from "../components/main/recommended/recommended";

function Main() {
  return (
    <div className="App">
      <div className={"container"}>
          <Suppliers/>
          <Recommended/>
          <Extra/>

      </div>


    </div>
  );
}

export default Main;
