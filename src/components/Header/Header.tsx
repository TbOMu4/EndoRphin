import { Link } from "react-router-dom";
import Logo2 from "../../assets/logo/logo_4.png";
import "./Header.scss";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${visible ? "header--visible" : "header--hidden"}`}>
      <div className="header__container header__menu menu">
        <Link to="/" className="header__logo">
          <p className="header__logo-text">Твій простір відновлення</p>
          <p className="header__logo-text">з Альоною Музольф</p>
        </Link>

        <Link to="/" className="header__logo">
          <img src={Logo2} alt="Логотип 2" />
        </Link>

        <button type="button" className="menu__icon icon-menu burger-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span></span>
        </button>

        <nav className="header__nav menu__body burger-nav">
          <ul className="header__list menu__list">
            <li className="header__item menu__item">
              <Link className="header__link menu__link" to="/about" onClick={() => setOpen(false)}>
                Про нас
              </Link>
            </li>
            <li className="header__item menu__item">
              <Link className="header__link menu__link" to="/services" onClick={() => setOpen(false)}>
                Послуги
              </Link>
            </li>
            <li className="header__item menu__item">
              <Link className="header__link menu__link" to="/contacts" onClick={() => setOpen(false)}>
                Контакти
              </Link>
            </li>
            <li className="header__item menu__item">
              <Link className="header__link menu__link" to="/price-list" onClick={() => setOpen(false)}>
                Прайс-лист
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// import { Link } from "react-router-dom";
// import Logo2 from "../../assets/logo/logo_4.png";
// import "./Header.scss";
// // import { FaBars, FaTimes } from "react-icons/fa";
// import { useState, useEffect, useRef } from "react";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     if (open) {
//       document.body.classList.add("menu-open");
//     } else {
//       document.body.classList.remove("menu-open");
//     }
//   }, [open]);
//   const [open, setOpen] = useState(false);
//   const [visible, setVisible] = useState(true);
//   const lastScrollY = useRef(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
//         setVisible(true); // скролимо вгору — показуємо
//       } else {
//         setVisible(false); // скролимо вниз — ховаємо
//       }

//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <header className="header">
//       <div className="header__container header__menu menu">
//         <Link to="/" className="header__logo">
//           <p className="header__logo-text">Твій простір відновлення</p>
//           <p className="header__logo-text">з Альоною Музольф</p>
//         </Link>

//         <Link to="/" className="header__logo">
//           <img src={Logo2} alt="Логотип 2" />
//         </Link>
//         <button type="button" className="menu__icon icon-menu burger-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
//           {/* {open ? <FaTimes /> : <FaBars />} */}
//           <span></span>
//         </button>
//         <nav className="header__nav menu__body burger-nav">
//           <ul className="header__list menu__list">
//             <li className="header__item menu__item">
//               <Link className="header__link menu__link" to="/about" onClick={() => setOpen(false)}>
//                 Про нас
//               </Link>
//             </li>
//             <li className="header__item menu__item">
//               <Link className="header__link menu__link" to="/services" onClick={() => setOpen(false)}>
//                 Послуги
//               </Link>
//             </li>
//             <li className="header__item menu__item">
//               <Link className="header__link menu__link" to="/contacts" onClick={() => setOpen(false)}>
//                 Контакти
//               </Link>
//             </li>
//             <li className="header__item menu__item">
//               <Link className="header__link menu__link" to="/price-list" onClick={() => setOpen(false)}>
//                 Прайс-лист
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// import { Link } from "react-router-dom";
// // import Logo1 from "../../assets/logo/logo_3.png";
// import Logo2 from "../../assets/logo/logo_4.png";
// import "./Header.scss";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useState } from "react";
// export default function Header() {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="header">
//       <div className="header__container header__menu menu">
//         <button type="button" className="menu__icon icon-menu burger-button " onClick={() => setOpen(!open)} aria-label="Toggle menu">
//           {open ? <FaTimes /> : <FaBars />}
//           <span></span>
//         </button>
//         <Link to="/" className="header__logo">
//           <p className="header__logo-text">Твій простір відновлення</p>
//           <p className="header__logo-text">з Альоною Музольф</p>
//           {/* <img src={Logo1} alt="Логотип 1" /> */}
//         </Link>
//         <Link to="/" className="header__logo">
//           <img src={Logo2} alt="Логотип 2" />
//         </Link>
//         <nav className={`header__nav menu__body burger-nav `}>
//           <ul className="header__list menu__list">
//             <li className="header__item menu__item">
//               <Link className="header__link menu__link" to="/about">
//                 Про нас
//               </Link>
//             </li>
//             <li className="header__item menu__item">
//               <Link className="header__link menu__link" to="/services">
//                 Послуги
//               </Link>
//             </li>
//             <li className="header__item menu__item">
//               <Link className="header__link menu__link" to="/contacts">
//                 Контакти
//               </Link>
//             </li>
//             <li className="header__item menu__item">
//               <Link className="header__link" to="/price-list">
//                 Прайс-лист
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }
