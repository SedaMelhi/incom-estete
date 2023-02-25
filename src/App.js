import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Investment from "./Investment/Investment";
import RealEstate from "./RealEstate/RealEstate";
import Services from "./Services/Services";
const App = () => {
  return (
    <div className="App">
      <Header/>
      <RealEstate/>
      <Cards/>
      <Investment/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
