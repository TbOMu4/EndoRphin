import { useState } from "react";
import "./About.scss";
import img from "../../assets/about/img-1.png";
import Footer from "../../components/Footer/Footer";
import { data } from "./data";

export default function About() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const active = data.find((d) => d.id === activeId) ?? null;

  return (
    <>
      <section className="about">
        <div className="about__blob about__blob--tl" aria-hidden="true" />
        <div className="about__blob about__blob--br" aria-hidden="true" />

        <div className="about__container">
          {/* ── Hero ── */}
          <div className="about__hero">
            <div className="about__photo-wrap">
              <div className="about__photo-glow" aria-hidden="true" />
              <img className="about__photo" src={img} alt="Альона Музольф" />
            </div>

            <div className="about__hero-right">
              <h1 className="about__name">Альона Музольф</h1>
              <p className="about__role">сертифікований масажист · магістр фізичної реабілітації</p>

              <div className="about__cards">
                <div className="about__card">
                  <h3 className="about__card-title">
                    <span className="about__card-line" />
                    Про мене
                    <span className="about__card-line" />
                  </h3>
                  <ul className="about__card-list">
                    <li>
                      <span className="about__card-icon">💆</span>
                      <span>Фахівець з фізичної реабілітації та сертифікований масажист</span>
                    </li>
                    <li>
                      <span className="about__card-icon">🏆</span>
                      <span>Понад 14 років практики та більше 15 сертифікатів</span>
                    </li>
                    <li>
                      <span className="about__card-icon">✨</span>
                      <span>Авторська програма комплексного відновлення тіла</span>
                    </li>
                  </ul>
                </div>

                <div className="about__card">
                  <h3 className="about__card-title">
                    <span className="about__card-line" />
                    Освіта
                    <span className="about__card-line" />
                  </h3>
                  <ul className="about__card-list">
                    <li>
                      <span className="about__card-icon">🎓</span>
                      <span>Київський МЕДИЧНИЙ УНІВЕРСИТЕТ УАНМ — Лікувальний масаж</span>
                    </li>
                    <li>
                      <span className="about__card-icon">📜</span>
                      <span>Відкритий міжнародний університет — Фізична реабілітація (магістр)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ── Certificates ── */}
          <div className="about__certs-section">
            <h2 className="about__certs-title">Сертифікати</h2>
            <p className="about__certs-hint">Натисніть на сертифікат, щоб дізнатися більше</p>

            <div className="about__certs-grid">
              {data.map((item, i) => (
                <button
                  key={item.id}
                  className={`about__cert${activeId === item.id ? " about__cert--active" : ""}`}
                  style={{ animationDelay: `${i * 0.04}s` }}
                  onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                  aria-label={item.description}
                >
                  <img src={item.img} alt={item.description} loading="lazy" />
                  <div className="about__cert-overlay">
                    <span className="about__cert-icon">🔍</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {active && (
        <div className="about__modal-backdrop" onClick={() => setActiveId(null)} role="dialog" aria-modal="true">
          <div className="about__modal" onClick={(e) => e.stopPropagation()}>
            <button className="about__modal-close" onClick={() => setActiveId(null)} aria-label="Закрити">
              ×
            </button>
            <img className="about__modal-img" src={active.img} alt={active.description} />
            <p className="about__modal-desc">{active.description}</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
// import TextPage from "../../components/TextPage/TextPage";
// import Education from "./Education/Education";
// import "./About.scss";
// import img from "../../assets/about/img.png";
// import Footer from "../../components/Footer/Footer";

// export default function About() {
//   return (
//     <>
//       <div className="services-list">
//         <TextPage description="This is the services page" />
//       </div>
//       <section className="about">
//         <div className="about__container">
//           <div className="about__description">
//             <div className="about__img">
//               <img src={img} alt="Альона Музольф" />
//             </div>
//             <p className="about__text">
//               <span>Альона Музольф</span> - дипломований спеціаліст, сертифікований масажист, магістр з фізичної реабілітації. Досвід роботи більше 14 років. Мною розроблена авторська програма, яка
//               включає комплекс різних масажів, поєднуючи традиційні техніки масажу, естетику тіла, корекції фігури з нетрадиційними методами. Масаж включає елементи розтягування, глибокого розминання
//               м'язів, роботу з тригерами. Кожен масаж спрямований на досягнення повного розслаблення та відновлення. Успішно практикую апаратні методи корекції та оздоровлення тіла, які включають
//               процедури, що використовують різні види енергії (ультразвук, електричні імпульси, вакуум) для покращення кровообігу, лімфодренажу, зменшення жирових відкладень та целюліту, а також для
//               зміцнення м’язів та підтяжки шкіри. Популярними методами є ультразвукова кавітація, міостимуляція, пресотерапія, вібрація, вакуумний та RF-ліфтинг, які допомагають змоделювати фігуру та
//               покращити стан шкіри без хірургічного втручання. Апаратний масаж - це комплексний підхід до оздоровлення, омолодження тіла та обличчя. Його проведення дозволяє впливати як на існуючу
//               проблему, так і на причини її появи. Завдяки цьому терапевтичний, косметологічний, лікувальний чи профілактичний ефект досягається максимально фізіологічно для організму людини та з
//               гарантією позитивного результату.
//             </p>
//           </div>
//           <div className="about__education">
//             <Education />
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }
