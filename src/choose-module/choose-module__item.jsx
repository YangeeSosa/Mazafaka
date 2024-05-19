import "./choose-module.css";
import imgs from "./choose__door.svg";

function ChooseItem() {
  return (
    <div className="card__container">
      <div className="card__wrapper">
        <div className="card__img">
          <img src={imgs} alt="" />
        </div>

        <div className="card__info">
          <h2 className="card-info__title">
            Противопожарная одностворчатая дверь
          </h2>
          <p className="card-info__subtitle">
            Противопожарная одностворчатая дверь Противопожарная одностворчатая
            дверьПротивопожарная одностворчатая дверьПротивопожарная
            одностворчатая дверьПротивопожарная одностворчатая
            дверьПротивопожарная одностворчатая дверь
          </p>

          {/* checkbox сделать */}
        </div>
      </div>
    </div>
  );
}

export default ChooseItem;
