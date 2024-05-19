import "./choose-module.css";
import Choose__item from "./choose-module__item";
import Footer from "../footer";

function Choose__block() {
  return (
    <div className="container">
      <h1 className="choose__title">Выбор модели</h1>
      <div className="search__field">
        <input className="search" type="search" placeholder="МК-677"></input>
      </div>
      <YourComponent />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

function YourComponent() {
  const itemsCount = 5;

  const items = Array.from({ length: itemsCount }, (_, index) => (
    <Choose__item key={index} />
  ));

  return <div className="choose-field">{items}</div>;
}

export default Choose__block;
