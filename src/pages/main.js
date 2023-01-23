import '../styles/main.css';
import Header from "../components/header/header";
import '../styles/global.css'
import Suppliers from "../components/suppliers/suppliers";
import Extra from "../components/main/extra-services/extra";
import Recommended from "../components/main/recommended/recommended";
import Inquire from "../components/main/inquiry/inquire";

function Main() {
  return (
    <div className="App">
      <div className={"container"}>
          <Inquire/>
          <Recommended/>
          <Extra/>
          <Suppliers/>


      </div>


    </div>
  );
}

export default Main;
