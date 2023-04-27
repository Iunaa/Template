//import "./assets/components/organisms/Service.jsx"
/*import Service from "./assets/components/organisms/Service.jsx"
import Pricing from "./assets/components/organisms/Pricing.jsx"*/

import Pricing from "./assets/components/organisms/Pricing";
import Service from "./assets/components/organisms/Service";
import AwardsTitle from "./assets/components/organisms/Awards/AwardsTitle.jsx";
import Awards from "./assets/components/organisms/Awards/Awards.jsx";

export default function App() {
  return (
    <>
      <Service />
      <Pricing />
      <AwardsTitle />
      <Awards />
    </>
  );
}
