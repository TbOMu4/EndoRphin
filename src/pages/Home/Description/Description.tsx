import whoWillAbout from "../../../assets/about/who-will-1.png";
import myApproach from "../../../assets/about/my_approach-1.png";
import services from "../../../assets/about/services.png";
import choose from "../../../assets/about/choose-1.png";
import { FaUsers, FaLeaf, FaBalanceScale, FaUserCheck, FaHandHoldingHeart, FaSpa, FaHands, FaRunning, FaCogs, FaTint, FaGraduationCap, FaHandshake, FaLock, FaHeart } from "react-icons/fa";
import "./Description.scss";

export default function Description() {
  return (
    <>
      <div className="description">
        <div className="description__container">
          <div className="description__header header-about">
            <h2 className="description__header-title">З любов’ю до Вашого тіла!</h2>
            <h3 className="description__header-subtitle">Твій простір відновлення з Альоною Музольф</h3>
            <p className="description__header-description">Оздоровча реабілітація та масаж</p>
            <p className="description__header-text">М’яке, усвідомлене відновлення тіла через індивідуальний підхід, поєднання ручних і апаратних методик та турботу про ваш комфорт.</p>
          </div>
          <div className="description__block">
            {/* Кому підійде */}
            <div className="description__who-will who-will-description">
              <div>
                <h3 className="who-will-description__title">Кому підійде:</h3>
                <ul className="who-will-description__list">
                  <li className="who-will-description__item">
                    <FaUsers /> Напруга, скутість, дискомфорт у спині чи суглобах
                  </li>
                  <li className="who-will-description__item">
                    <FaLeaf /> Відновлення після травм, операцій або періоду зниження активності
                  </li>
                  <li className="who-will-description__item">
                    <FaBalanceScale /> Хронічна втома, набряки, порушення рухливості
                  </li>
                  <li className="who-will-description__item">
                    <FaLeaf /> Бажання відновитися без різких втручань і перевантажень
                  </li>
                </ul>
              </div>
              <div className="who-will-description__img">
                <img src={whoWillAbout} alt="who will description" />
              </div>
            </div>

            {/* Мій підхід */}
            <div className="description__who-will who-will-description ">
              <div>
                <h3 className="who-will-description__title">Мій підхід</h3>
                <h4>Я працюю у форматі оздоровчої реабілітації. Кожна сесія індивідуальна та може включати:</h4>
                <ul className="who-will-description__list">
                  <li className="who-will-description__item">
                    <FaHandHoldingHeart /> М’які мануальні техніки
                  </li>
                  <li className="who-will-description__item">
                    <FaUserCheck /> Міофасціальна робота
                  </li>
                  <li className="who-will-description__item">
                    <FaSpa /> Дренажні та релаксуючі методи
                  </li>
                  <li className="who-will-description__item">
                    <FaCogs /> Апаратні методики як доповнення
                  </li>
                  <li className="who-will-description__item">
                    <FaLeaf /> Рекомендації для підтримки результату між сеансами
                  </li>
                </ul>
                <p>Мета — допомогти тілу повернути баланс, рух і відчуття легкості. </p>
              </div>
              <div className="who-will-description__img">
                <img src={myApproach} alt="my approach" />
              </div>
            </div>

            {/* Послуги */}
            <div className="description__who-will who-will-description">
              <div>
                <h3 className="who-will-description__title">Послуги:</h3>
                <ul className="who-will-description__list">
                  <li className="who-will-description__item">
                    <FaHands /> Оздоровчий масаж
                  </li>
                  <li className="who-will-description__item">
                    <FaRunning /> Відновлювальні сесії для тіла
                  </li>
                  <li className="who-will-description__item">
                    <FaLeaf /> Робота з напругою та обмеженням руху
                  </li>
                  <li className="who-will-description__item">
                    <FaTint /> Дренажні та релаксуючі процедури
                  </li>
                  <li className="who-will-description__item">
                    <FaCogs /> Комбіновані апаратно-ручні методики
                  </li>
                </ul>
                <p>Формат і тривалість підбираються індивідуально після первинної консультації.</p>
              </div>
              <div className="who-will-description__img">
                <img src={services} alt="services" />
              </div>
            </div>

            {/* Чому обирають мене */}
            <div className="description__who-will who-will-description ">
              <div>
                <h3 className="who-will-description__title">Чому обирають мене:</h3>
                <ul className="who-will-description__list">
                  <li className="who-will-description__item">
                    <FaHandshake /> Персональний підхід і робота «на результат»
                  </li>
                  <li className="who-will-description__item">
                    <FaGraduationCap /> Професійна освіта у сфері реабілітації
                  </li>
                  <li className="who-will-description__item">
                    <FaSpa /> Спокійна, безпечна атмосфера
                  </li>
                  <li className="who-will-description__item">
                    <FaLock /> Власний кабінет і конфіденційність
                  </li>
                  <li className="who-will-description__item">
                    <FaHeart /> Повага до меж і можливостей вашого тіла
                  </li>
                </ul>
              </div>
              <div className="who-will-description__img">
                <img src={choose} alt="choose me" />
              </div>
            </div>
          </div>
          {/* <div className="description__block">
            <div className="description__who-will who-will-description">
              <div>
                <h3 className="who-will-description__title">Кому підійде:</h3>
                <ul className="who-will-description__list">
                  <li className="who-will-description__item">Напруга, скутість, дискомфорт у спині чи суглобах</li>
                  <li className="who-will-description__item">Відновлення після травм, операцій або періоду зниження активності</li>
                  <li className="who-will-description__item">Хронічна втома, набряки, порушення рухливості</li>
                  <li className="who-will-description__item">Бажання відновитися без різких втручань і перевантажень</li>
                </ul>
              </div>
              <div className="who-will-description__img">
                <img src={whoWillAbout} alt="who will description" />
              </div>
            </div>
            <div className="description__who-will who-will-description reverse">
              <div>
                <h3 className="who-will-description__title">Мій підхід</h3>
                <h4>Я працюю у форматі оздоровчої реабілітації — без діагнозів і «лікувальних» формулювань. Кожна сесія індивідуальна та може включати:</h4>
                <ul className="who-will-description__list">
                  <li className="who-will-description__item">м’які мануальні техніки</li>
                  <li className="who-will-description__item">міофасціальну роботу</li>
                  <li className="who-will-description__item">дренажні та релаксуючі методи</li>
                  <li className="who-will-description__item">апаратні методики як доповнення</li>
                  <li className="who-will-description__item">рекомендації для підтримки результату між сеансами</li>
                </ul>
                <p>Мета — допомогти тілу повернути баланс, рух і відчуття легкості. </p>
              </div>
              <div className="who-will-description__img">
                <img src={myApproach} alt="my approach" />
              </div>
            </div>
            <div className="description__who-will who-will-description">
              <div>
                <h3 className="who-will-description__title">Послуги:</h3>
                <ul className="who-will-description__list">
                  <li className="who-will-description__item">Оздоровчий масаж</li>
                  <li className="who-will-description__item">Відновлювальні сесії для тіла</li>
                  <li className="who-will-description__item">Робота з напругою та обмеженням руху</li>
                  <li className="who-will-description__item">Дренажні та релаксуючі процедури</li>
                  <li className="who-will-description__item">Комбіновані апаратно-ручні методики</li>
                </ul>
                <p>Формат і тривалість підбираються індивідуально після первинної консультації.</p>
              </div>
              <div className="who-will-description__img">
                <img src={services} alt="my approach" />
              </div>
            </div>
            <div className="description__who-will who-will-description reverse">
              <div>
                <h3 className="who-will-description__title">Чому обирають мене:</h3>
                <ul className="who-will-description__list">
                  <li className="who-will-description__item">Персональний підхід і робота «на результат»</li>
                  <li className="who-will-description__item">Професійна освіта у сфері реабілітації</li>
                  <li className="who-will-description__item">Спокійна, безпечна атмосфера</li>
                  <li className="who-will-description__item">Власний кабінет і конфіденційність</li>
                  <li className="who-will-description__item">Повага до меж і можливостей вашого тіла</li>
                </ul>
              </div>
              <div className="who-will-description__img">
                <img src={choose} alt="my approach" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
