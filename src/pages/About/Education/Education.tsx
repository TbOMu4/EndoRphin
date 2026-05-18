import { data } from "../data";
import "./Education.scss";
export default function Education() {
  return (
    <div className="education">
      <h2 className="education__title">Освіта</h2>
      <ul className="education__list">
        {data.map((item) => (
          <li className="education__item" key={item.id}>
            <p className="education__description">{item.description}</p>
            <img className="education__image" src={item.img} alt={item.description} />
          </li>
        ))}
      </ul>
    </div>
  );
}
