import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../components/ServicesList/data";
import "./Procedure.scss";
import { MdCancel, MdSpa } from "react-icons/md";
import { FaClock, FaCheckCircle } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
export default function Procedure() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const proc = useMemo(() => data.find((p) => p.slug === slug), [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!proc) {
    return (
      <div className="not__container">
        <p>Процедуру не знайдено.</p>
        <button className="button" onClick={() => navigate("/procedures")}>
          Повернутися до списку
        </button>
      </div>
    );
  }

  return (
    <>
      <section className="procedure">
        <div className="procedure__container">
          <button className="procedure__btn" onClick={() => navigate(-1)}>
            ← Назад
          </button>
          <article className="procedure__content">
            <div className="procedure__header">
              <div className="procedure__info">
                <h1 className="procedure__title">{proc.title}</h1>
                <p className="procedure__description">{proc.description}</p>
              </div>
              <div className="procedure__img">
                <img src={proc.img} alt={proc.title} />
              </div>
            </div>

            <div className="procedure__body">
              {proc.principles && (
                <div className="advantages">
                  <h2 className="procedure__subtitle">Принципи роботи:</h2>
                  <p className="procedure__description">{proc.principles}</p>
                </div>
              )}

              {(proc.advantages || []).length > 0 && (
                <div className="advantages">
                  <h2 className="procedure__subtitle">Переваги та особливості:</h2>
                  <ul>
                    {proc.advantages?.map((item, i) => (
                      <li className="procedure__item" key={i}>
                        <FaCheckCircle />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="procedure__indications">
                <h2 className="procedure__subtitle">Показання для застосування:</h2>
                <ul>
                  {proc.indications?.map((item, i) => (
                    <li className="procedure__item" key={i}>
                      <MdSpa /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="procedure__contraindications">
                <h2 className="procedure__subtitle">Протипоказання:</h2>
                <ul className="procedure__list">
                  {proc.contraindications?.map((item, i) => (
                    <li className="procedure__item" key={i}>
                      <MdCancel /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="procedure__prepare">
                <h2 className="procedure__subtitle">Як потрібно готуватись до процедури?</h2>
                <ul className="procedure__list">
                  {proc.prepare?.map((item, i) => (
                    <li className="procedure__item" key={i}>
                      <FaClock /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
