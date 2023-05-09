import Header from "../../organisms/Header/Header";
import PortifolioBanner from "../../molecules/PortifolioBanner/PortifolioBanner";
import PortifolioCard from "../../atoms/PortifolioCard/portifolioCard";

import Logo from "../../../assets/img/logoAgency.svg";
export default function Portifolio() {
  return (
    <>
      <Header logoimg={Logo} />
      <PortifolioBanner />
      <PortifolioCard />
    </>
  );
}
