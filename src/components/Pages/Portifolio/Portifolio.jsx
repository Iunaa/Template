import HeaderNav from "../../organisms/HeaderNav/HeaderNav";
import PortifolioBanner from "../../molecules/PortifolioBanner/PortifolioBanner";
import PortifolioCardsWrapper from "../../organisms/PortifolioCardsWrapper/PortifolioCardsWrapper";
import PortifolioPaginacao from "../../molecules/PortifolioPaginacao/PortifolioPaginacao";
import PortifolioFooter from "../../molecules/PortifolioFooter/PortifolioFooter";
import Footer from "../../organisms/Footer/Footer";

import Logo from "../../../assets/img/logoAgency.svg";
export default function Portifolio() {
  return (
    <>
      <HeaderNav logoImg={Logo} />
      <PortifolioBanner />
      <PortifolioCardsWrapper />
      <PortifolioPaginacao />
      <PortifolioFooter />
      <Footer />
    </>
  );
}
