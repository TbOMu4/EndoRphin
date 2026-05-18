import "./Advantages.scss";

type Advantage = {
  id?: string | number;
  title: string;
  description: string;
  icon?: React.ElementType;
};
type Props = {
  items?: Advantage[];
};
export default function Advantages({ items }: Props) {
  return (
    <section className="advantages">
      <div className="advantages__container">
        <div className="advantages__content">
          <h2 className="advantages__title">Наші переваги</h2>
          <ul className="advantages__list">
            {items?.map((item) => {
              const Icon = item.icon;
              return (
                <li className="advantages__item" key={item.id ?? item.title}>
                  <div className="advantages__item-ico">{Icon && <Icon className="advantages__item-icon" aria-hidden="true" focusable={false} />}</div>
                  <h3 className="advantages__item-title">{item.title}</h3>
                  <p className="advantages__item-description">{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

// import { useMemo } from "react";
// import { data } from "../data";
// import "./Advantages.scss";

// const getRandomAdvantages = (count: number = 3) => {
//   const shuffle = <T,>(arr: T[]) => {
//     const a = [...arr];
//     for (let i = a.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [a[i], a[j]] = [a[j], a[i]];
//     }
//     return a;
//   };

//   return shuffle(data).slice(0, count);
// };

// export default function Advantages() {
//   const randomAdvantages = useMemo(() => getRandomAdvantages(), []);
//   return (
//     <section className="advantages">
//       <div className="advantages__container">
//         <div className="advantages__content">
//           <h2 className="advantages__title">Наші переваги</h2>
//           <ul className="advantages__list">
//             {randomAdvantages.map((item, index) => (
//               <li className="advantages__item" key={index}>
//                 <div className="advantages__item-ico">{item.icon && <item.icon className="advantages__item-icon" aria-hidden="true" focusable={false} />}</div>
//                 <h3 className="advantages__item-title">{item.title}</h3>
//                 <p className="advantages__item-description">{item.description}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
