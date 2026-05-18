import "./TextPage.scss";

interface TextPageProps {
  description: string;
}
// description
export default function TextPage({}: TextPageProps) {
  return (
    <section className="main">
      {/* <div className="main__container"> */}
      <div className="main__text">
        <h1 className="main__title">Твій простір відновлення</h1>
        <h2 className="main__subtitle">з Альоною Музольф</h2>
        {/* <p className="main__description">{description}</p> */}
      </div>
      {/* </div> */}
    </section>
  );
}
