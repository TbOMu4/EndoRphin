import "./Contacts.scss";
import Footer from "../../components/Footer/Footer";

const contacts = [
  // {
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="currentColor">
  //       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  //     </svg>
  //   ),
  //   label: "Адреса",
  //   value: "м. Городок, вул. Шкільна, 10",
  //   // href: "https://maps.google.com/?q=Київ",
  // },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
      </svg>
    ),
    label: "Телефон",
    value: "+380 63 060 6472",
    href: "tel:+380630606472",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    label: "Instagram",
    value: "alena_fedotka",
    href: "https://instagram.com/alena_fedotka",
    deepLink: "instagram://user?username=alena_fedotka",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z" />
      </svg>
    ),
    label: "TikTok",
    value: "muza31025",
    href: "https://tiktok.com/@muza31025",
    deepLink: "tiktok://user/@muza31025",
  },
];

export default function Contacts() {
  return (
    <>
      <section className="contacts">
        {/* decorative blobs */}
        <div className="contacts__blob contacts__blob--tl" aria-hidden="true" />
        <div className="contacts__blob contacts__blob--br" aria-hidden="true" />

        <div className="contacts__inner">
          <h2 className="contacts__title">Контакти</h2>

          <ul className="contacts__list">
            {contacts.map((c, i) => (
              <li key={i} className="contacts__item" style={{ animationDelay: `${i * 0.08}s` }}>
                <a href={c.href} className="contacts__link" target="_blank" rel="noopener noreferrer">
                  <span className="contacts__icon">{c.icon}</span>
                  <span className="contacts__text">
                    <span className="contacts__label">{c.label}</span>
                    <span className="contacts__value">{c.value}</span>
                  </span>
                  <span className="contacts__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="contacts__note">
            <span className="contacts__note-icon">🕐</span>
            <span>Пн – Пт: 9:00 – 19:00 &nbsp;·&nbsp; Сб: 09:00 – 15:00 &nbsp;·&nbsp; Нд: вихідний</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
