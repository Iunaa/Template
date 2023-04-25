//import "./assets/components/organisms/Service.jsx"
/*import Service from "./assets/components/organisms/Service.jsx"
import Pricing from "./assets/components/organisms/Pricing.jsx"*/

import Pricing from "./assets/components/organisms/Pricing";
import Service from "./assets/components/organisms/Service";
import TitleAwards from "./assets/components/organisms/Awards/Awards.jsx";
import ListAwards from "./assets/components/organisms/Awards/Awards.jsx";

export default function App() {
  return (
    <>
      <Service />
      <Pricing />
      <TitleAwards />
      <ListAwards />
    </>
  );
}
