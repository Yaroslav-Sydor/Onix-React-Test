import '../styles/main.css';
import Header from "../components/header/header";
import '../styles/global.css'
import Suppliers from "../components/suppliers/suppliers";
import Extra from "../components/main/extra-services/extra";
import Recommended from "../components/main/recommended/recommended";
import Inquire from "../components/main/inquiry/inquire";
import Source from "../components/main/source/source";
import Offer from "../components/main/offer/offer";
import Buner from "../components/main/buner/buner";

function Main() {
  return (
    <div className="App">
      <div className={"container"}>
          <Buner/>
          <Offer/>
          <Source/>
          <Source/>
          <Inquire/>
          <Recommended/>
          <Extra/>
          <Suppliers/>


      </div>


    </div>
  );
}

export default Main;
