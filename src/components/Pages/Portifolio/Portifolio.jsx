import Header from "../../organisms/Header/Header";
import PortifolioBanner from "../../molecules/PortifolioBanner/PortifolioBanner";
import PortifolioCard from "../../atoms/PortifolioCard/portifolioCard";
import PortifolioFooter from "../../molecules/PortifolioFooter/PortifolioFooter";
import Footer from "../../organisms/Footer/Footer";

import Logo from "../../../assets/img/logoAgency.svg";
export default function Portifolio() {
  return (
    <>
      <Header logoimg={Logo} />
      <PortifolioBanner />
      <PortifolioCard />
      <PortifolioFooter />
      <Footer />
    </>
  );
}
