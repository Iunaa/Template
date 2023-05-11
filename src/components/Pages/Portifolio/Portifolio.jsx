import Header from "../../organisms/Header/Header";
import PortifolioCardsWrapper from "../../organisms/PortifolioCardsWrapper/PortifolioCardsWrapper";
import Logo from "../../../assets/img/logoAgency.svg";
export default function Portifolio() {
  return (
    <>
      <Header logoimg={Logo} />
      <PortifolioCardsWrapper />
    </>
  );
}
