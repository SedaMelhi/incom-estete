import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import Hills from '../Hills/Hills';
import Investment from '../Investment/Investment';
import RealEstate from '../RealEstate/RealEstate';
import Sari from '../Sari/Sari';
import Services from '../Services/Services';
const Home = () => {
  return (
    <div>
      <Header />
      <RealEstate />
      <Cards />
      <Investment />
      <Hills />
      <Sari />
      <Services />
    </div>
  );
};
export default Home;
