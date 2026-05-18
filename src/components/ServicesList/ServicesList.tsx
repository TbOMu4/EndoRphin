import TextPage from "../../components/TextPage/TextPage";
import Footer from "../Footer/Footer";
import ServicesItem from "./ServicesItem/ServicesItem";
import "./ServicesList.scss";

export default function ServicesList() {
  return (
    <div className="services-list">
      <TextPage description="This is the services page" />
      <section className="services">
        <div className="services__container">
          <h2 className="t">Масажи</h2>
          <ServicesItem />
        </div>
      </section>
      <Footer />
    </div>
  );
}
