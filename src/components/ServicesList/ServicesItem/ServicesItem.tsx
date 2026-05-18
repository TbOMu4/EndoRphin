import "./ServicesItem.scss";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { data as defaultServices } from "../data";

type Service = {
  slug: string;
  title: string;
  description: string;
  img?: string;
};

type Props = {
  items?: Service[];
};

export default function ServicesItem({ items }: Props) {
  const list = items ?? defaultServices;

  return (
    <div className="services__content">
      {list.map((item, index) => (
        <Link key={item.slug} to={`/services/${item.slug}`} className="services__card-link" style={{ animationDelay: `${index * 0.07}s` }}>
          <article className="services__item">
            <div className="services__item-img">
              {item.img && <img src={item.img} alt={item.title} loading="lazy" />}
              <div className="services__item-img-overlay" />
            </div>

            <div className="services__item-body">
              <h3 className="services__item-title">{item.title}</h3>
              <p className="services__item-description">{item.description}</p>
            </div>

            <div className="services__item-actions">
              <Button text="Дізнайтеся більше" />
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

// import "./ServicesItem.scss";
// import Button from "../../Button/Button";
// import { Link } from "react-router-dom";
// import { data as defaultServices } from "../data";

// type Service = {
//   slug: string;
//   title: string;
//   description: string;
//   img?: string;
// };

// type Props = {
//   items?: Service[];
// };

// export default function ServicesItem({ items }: Props) {
//   const list = items ?? defaultServices;

//   return (
//     <div className="services__content">
//       {list.map((item) => (
//         <Link key={item.slug} to={`/services/${item.slug}`}>
//           <article className="services__item">
//             <div className="services__item-img">{item.img && <img src={item.img} alt={item.title} />}</div>
//             <div className="services__item-text">
//               <h3 className="services__item-title">{item.title}</h3>
//               <p className="services__item-description">{item.description}</p>
//             </div>
//             <div className="services__item-actions">
//               <Button text="Дізнайтеся більше" />
//             </div>
//           </article>
//         </Link>
//       ))}
//     </div>
//   );
// }

// import { data } from "../data";
// import "./ServicesItem.scss";
// import Button from "../../Button/Button";
// import { Link } from "react-router-dom";
// export default function ServicesItem() {
//   return (
//     <div className="services__content">
//       {data.map((item) => (
//         <Link key={item.slug} to={`/services/${item.slug}`}>
//           <article className="services__item" key={item.title}>
//             <div className="services__item-img">{item.img && <img src={item.img} alt={item.title} />}</div>
//             <div className="services__item-text">
//               <h3 className="services__item-title">{item.title}</h3>
//               <p className="services__item-description">{item.description}</p>
//             </div>
//             <div className="services__item-actions">
//               <Button text="Дізнайтеся більше" />
//             </div>
//           </article>
//         </Link>
//       ))}
//     </div>
//   );
// }
