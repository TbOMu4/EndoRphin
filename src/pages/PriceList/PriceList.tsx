import { useState } from "react";
import "./PriceList.scss";
import Footer from "../../components/Footer/Footer";

interface Service {
  name: string;
  duration: string;
  price: string;
  note?: string;
}

interface Category {
  title: string;
  services: Service[];
}

const priceData: Category[] = [
  {
    title: "Масаж",
    services: [
      { name: "Масаж шийно-комірцевої зони", duration: "30 хв", price: "400 грн" },
      { name: "Масаж шийно-комірцевої зони + грудний відділ хребта", duration: "45 хв", price: "500 грн" },
      { name: "Масаж попереково-крижового відділу хребта", duration: "30 хв", price: "400 грн" },
      { name: "Масаж попереково-крижового відділу хребта (з елементами апаратного масажу)", duration: "45 хв", price: "500 грн" },
      { name: "Масаж спини загальний", duration: "50 хв", price: "600 грн" },
      { name: "Масаж спини комбінований (з елементами апаратного масажу)", duration: "70 хв", price: "800 грн" },
      { name: "Масаж усього тіла", duration: "90 хв", price: "1200 грн" },
      { name: "Дренажний масаж спини при бронхіті", duration: "30 хв", price: "400 грн", note: "за призначенням лікаря" },
      { name: "Масаж нижніх кінцівок", duration: "60 хв", price: "600 грн" },
      { name: "Масаж верхніх кінцівок", duration: "20 хв", price: "300 грн" },
      { name: "Масаж стоп", duration: "20 хв", price: "300 грн" },
      { name: "Масаж голови", duration: "20 хв", price: "300 грн" },
    ],
  },
  {
    title: "Міофасціальний масаж",
    services: [
      { name: "Міофасціальний масаж тригерних точок спини", duration: "40 хв", price: "500 грн" },
      { name: "Міофасціальний масаж тригерних точок шийно-комірцевої зони", duration: "20 хв", price: "300 грн" },
      { name: "Міофасціальний масаж тригерних точок грудного відділу хребта", duration: "20 хв", price: "300 грн" },
      { name: "Міофасціальний масаж тригерних точок попереково-крижового відділу хребта", duration: "20 хв", price: "300 грн" },
    ],
  },
  {
    title: "Дитячий масаж",
    services: [
      { name: "Загальний оздоровчий масаж усього тіла (до року)", duration: "45 хв", price: "500 грн" },
      { name: "Загальний оздоровчий масаж усього тіла (1–7 років)", duration: "60 хв", price: "700 грн" },
      { name: "Загальний оздоровчий масаж усього тіла (7–14 років)", duration: "60 хв", price: "800 грн" },
      { name: "Масаж спини (1–7 років)", duration: "30 хв", price: "300 грн" },
      { name: "Масаж спини (7–14 років)", duration: "30 хв", price: "400 грн" },
      { name: "Дренажний масаж спини при бронхіті", duration: "30 хв", price: "300 грн", note: "за призначенням лікаря" },
    ],
  },
  {
    title: "Класичний масаж",
    services: [
      { name: "Масаж шийно-комірцевої зони", duration: "20 хв", price: "300 грн" },
      { name: "Масаж шийно-комірцевої зони + грудний відділ хребта", duration: "30 хв", price: "400 грн" },
      { name: "Масаж спини загальний", duration: "45 хв", price: "500 грн" },
    ],
  },
  {
    title: "Антицелюлітний масаж",
    services: [
      { name: "Антицелюлітний масаж ніг + сідниці + живіт", duration: "60 хв", price: "800 грн" },
      { name: "Антицелюлітний масаж все тіло", duration: "90 хв", price: "1200 грн" },
    ],
  },
  {
    title: "Нейроседативний масаж",
    services: [{ name: "Нейроседативний масаж усього тіла", duration: "80 хв", price: "1000 грн" }],
  },
  {
    title: "Масаж вакуумними банками",
    services: [{ name: "Масаж спини вакуумними банками", duration: "20 хв", price: "300 грн" }],
  },
  {
    title: "Пресотерапія",
    services: [
      { name: "Пресотерапія загальна", duration: "50 хв", price: "500 грн" },
      { name: "Пресотерапія локальна", duration: "30 хв", price: "400 грн" },
    ],
  },
  {
    title: "Фонофорез",
    services: [{ name: "Фонофорез", duration: "30хв", price: "400 грн" }],
  },
  {
    title: "Вібраційний масаж",
    services: [
      { name: "Вібраційний масаж загальний (40 хв)", duration: "40 хв", price: "400 грн" },
      { name: "Вібраційний масаж загальний (30 хв)", duration: "30 хв", price: "300 грн" },
      { name: "Вібраційний масаж спини", duration: "20 хв", price: "200 грн" },
      { name: "Вібраційний масаж спини + елементи класичного масажу", duration: "40 хв", price: "400 грн" },
      { name: "Вібраційний масаж нижніх кінцівок (30 хв)", duration: "30 хв", price: "300 грн" },
      { name: "Вібраційний масаж нижніх кінцівок (20 хв)", duration: "20 хв", price: "200 грн" },
      { name: "Вібраційний масаж нижніх кінцівок + сідниці", duration: "30 хв", price: "300 грн" },
      { name: "Вібраційний масаж живота", duration: "10 хв", price: "100 грн" },
    ],
  },
  {
    title: "Вакуумний масаж з RF-ліфтингом",
    services: [
      { name: "Вакуумний масаж спини (20 хв)", duration: "20 хв", price: "300 грн" },
      { name: "Вакуумний масаж спини (30 хв)", duration: "30 хв", price: "400 грн" },
      { name: "Вакуумний масаж нижня частина тіла — стегна + сідниці (40 хв)", duration: "40 хв", price: "500 грн" },
      { name: "Вакуумний масаж нижня частина тіла — стегна + сідниці (50 хв)", duration: "50 хв", price: "600 грн" },
      { name: "Вакуумний масаж верхня частина тіла — живіт + боки + плечі (30 хв)", duration: "30 хв", price: "400 грн" },
      { name: "Вакуумний масаж верхня частина тіла — живіт + боки + плечі (40 хв)", duration: "40 хв", price: "500 грн" },
      { name: "Вакуумний RF масаж обличчя", duration: "20 хв", price: "500 грн" },
    ],
  },
  {
    title: "Ультразвукова кавітація",
    services: [
      { name: "Кавітація 1 зона (живіт / боки / сідниці)", duration: "20 хв", price: "400 грн" },
      { name: "Кавітація (живіт + боки)", duration: "30 хв", price: "500 грн" },
      { name: "Кавітація (зона на вибір)", duration: "40 хв", price: "600 грн" },
      {
        name: "Кавітація + вакуумний масаж з RF-ліфтингом та інфрачервоним прогрівом + біофотон",
        duration: "60 хв",
        price: "800 грн",
      },
      {
        name: "Кавітація + вакуумний масаж з RF-ліфтингом + біофотон + пресотерапія",
        duration: "90 хв",
        price: "1000 грн",
      },
      {
        name: "Кавітація + вакуумний масаж з RF-ліфтингом + біофотон + пресотерапія (повний)",
        duration: "120 хв",
        price: "1300 грн",
      },
    ],
  },
  {
    title: "Дарсонвалізація",
    services: [
      { name: "Дарсонвалізація обличчя", duration: "15 хв", price: "200 грн" },
      { name: "Дарсонвалізація волосся", duration: "15 хв", price: "200 грн" },
      { name: "Дарсонвалізація м'язів, сухожиль, суглобів (5 хв)", duration: "5 хв", price: "100 грн" },
      { name: "Дарсонвалізація м'язів, сухожиль, суглобів (15 хв)", duration: "15 хв", price: "200 грн" },
      { name: "Дарсонвалізація м'язів, сухожиль, суглобів (20 хв)", duration: "20 хв", price: "250 грн" },
      { name: "Дарсонвалізація м'язів, сухожиль, суглобів (30 хв)", duration: "30 хв", price: "300 грн" },
    ],
  },
  {
    title: "Міостимуляція",
    services: [
      { name: "Міостимуляція м'язів сідниць «Бразильські сіднички»", duration: "30 хв", price: "400 грн" },
      { name: "Міостимуляція м'язів живота «Ідеальний прес»", duration: "30 хв", price: "400 грн" },
      { name: "Міостимуляція стегон (внутрішня / зовнішня поверхня)", duration: "30 хв", price: "400 грн" },
      { name: "Міостимуляція додаткових зон при 30 хв процедурі", duration: "+++", price: "100 грн" },
      { name: "Міостимуляція тіла (більше трьох зон)", duration: "60 хв", price: "600 грн" },
    ],
  },
  {
    title: "Біофотон",
    services: [
      { name: "Біофотон частин тіла (10 хв)", duration: "10 хв", price: "100 грн" },
      { name: "Біофотон частин тіла (20 хв)", duration: "20 хв", price: "200 грн" },
    ],
  },
  {
    title: "Термовібрація",
    services: [
      { name: "Термовібрація частин тіла (10 хв)", duration: "10 хв", price: "100 грн" },
      { name: "Термовібрація частин тіла (20 хв)", duration: "20 хв", price: "200 грн" },
    ],
  },
  {
    title: "Антицелюлітні обгортання",
    services: [
      { name: "Зігріваюче обгортання (в комплексі з апаратною процедурою)", duration: "20 хв", price: "400 грн" },
      { name: "Зігріваюче обгортання (самостійна процедура)", duration: "30 хв", price: "450 грн" },
      { name: "Зігріваюче обгортання (в комбінації з активною сироваткою)", duration: "40 хв", price: "500 грн" },
      { name: "Охолоджуюче обгортання (в комплексі з апаратною процедурою)", duration: "20 хв", price: "400 грн" },
      { name: "Охолоджуюче обгортання (самостійна процедура)", duration: "30 хв", price: "450 грн" },
      { name: "Охолоджуюче обгортання (в комбінації з активною сироваткою)", duration: "40 хв", price: "500 грн" },
      { name: "Лімфодренажний еліксир (в комплексі з апаратною процедурою)", duration: "40 хв", price: "500 грн" },
      { name: "Лімфодренажний еліксир (самостійна процедура)", duration: "40 хв", price: "500 грн" },
      { name: "Лімфодренажний еліксир (в комбінації з активною сироваткою)", duration: "40 хв", price: "550 грн" },
      { name: "Антицелюлітна сироватка (в комплексі з апаратною процедурою)", duration: "40 хв", price: "300 грн" },
      { name: "Антицелюлітна сироватка (самостійна процедура)", duration: "40 хв", price: "400 грн" },
    ],
  },
];

export default function PriceList() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <>
      <section className="price-list">
        <div className="price-list__header">
          <h2 className="price-list__title">Прайс-лист</h2>
          <p className="price-list__subtitle">Вартість масажних послуг</p>
          <p className="price-list__disclaimer">При гострому больовому синдромі необхідна консультація лікаря!</p>
        </div>

        <div className="price-list__categories">
          {priceData.map((category, index) => (
            <div key={index} className={`price-list__category ${activeCategory === index ? "price-list__category--open" : ""}`}>
              <button className="price-list__category-header" onClick={() => toggleCategory(index)} aria-expanded={activeCategory === index}>
                <span className="price-list__category-title">{category.title}</span>
                <span className="price-list__category-count">{category.services.length} послуг</span>
                <span className="price-list__category-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              <div className="price-list__table-wrapper">
                <table className="price-list__table">
                  <thead>
                    <tr>
                      <th>Послуга</th>
                      <th>Тривалість</th>
                      <th>Вартість</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.services.map((service, sIndex) => (
                      <tr key={sIndex}>
                        <td>
                          {service.name}
                          {service.note && <span className="price-list__note"> ({service.note})</span>}
                        </td>
                        <td>{service.duration}</td>
                        <td className="price-list__price">{service.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
