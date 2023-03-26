import { useEffect } from 'react';
import Cards from '../Cards/Cards';
import Damac from '../Damac/Damac';
import Faq from '../Faq/Faq';
import Header from '../Header/Header';
import Hills from '../Hills/Hills';
import Investment from '../Investment/Investment';
import RealEstate from '../RealEstate/RealEstate';
import Sari from '../Sari/Sari';
import Services from '../Services/Services';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <RealEstate />
      <Cards />
      <Investment />
      <Hills />
      <Sari />
      <Damac />
      <Services />
      <Faq />
    </div>
  );
};
export default Home;
