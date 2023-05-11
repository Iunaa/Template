import Header from "../../organisms/Header/Header";
import PortifolioCard from "../../atoms/PortifolioCard/portifolioCard";

import Logo from "../../../assets/img/logoAgency.svg";
export default function Portifolio() {
  return (
    <>
      <Header logoimg={Logo} />
      <PortifolioCard />
    </>
  );
}
