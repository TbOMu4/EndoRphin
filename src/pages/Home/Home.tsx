import { useState } from "react";
import TextPage from "../../components/TextPage/TextPage";
import ServicesItem from "../../components/ServicesList/ServicesItem/ServicesItem";
import Advantages from "./Advantages/Advantages";
import "./Home.scss";
import { data as servicesData } from "../../components/ServicesList/data";
import { data as advantagesData } from "./data"; // або звідти, де вони в тебе лежать
import { sample } from "../../utils/sample";
import Description from "./Description/Description";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
export default function Home() {
  const [randomAdvantages] = useState(() => sample(advantagesData, 3));
  const [randomServices] = useState(() => sample(servicesData, 3));

  return (
    <>
      <TextPage description="This is the home page" />
      <Description />
      <Advantages items={randomAdvantages} />
      <div className="main__container">
        <section className="home__services">
          <h2 className="home__services-title">Наші послуги</h2>
          <ServicesItem items={randomServices} />
          <Link to="/services">
            <Button className="home__button" text="Дізнайтеся більше" />
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}

// import TextPage from "../../components/TextPage/TextPage";
// import ServicesItem from "../../components/ServicesList/ServicesItem/ServicesItem";
// import Advantages from "./Advantages/Advantages";
// // import { data } from "../../components/ServicesList/data";

// export default function Home() {
//   return (
//     <>
//       <TextPage description="This is the home page" />
//       <Advantages />
//       <ServicesItem />
//     </>
//   );
// }
