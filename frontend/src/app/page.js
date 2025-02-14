import Banner from "./components/Banner";
import ChooseUs from "./components/ChooseUs";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";
import HomeCard from "./components/HomeCard";
import Navbar from "./components/Navbar";
import ProductComponent from "./components/ProductComponent";

export default function Home(){
  return(
    <main>
      <Navbar/>
      <Banner/>
      <HomeCard/>
      <ChooseUs/>
      <ProductComponent/>
      <ContactCard/>
      <Footer/>
    </main>
  )
}