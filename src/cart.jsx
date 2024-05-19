import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import IMask from "imask";
import "./Summary.css";
import "./cart.css";
import img2 from "./arrow.svg";
import img3 from "./approve.svg";
import img4 from "./close.svg";

const Cart = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isPopupActive, setPopupActive] = useState(false);

  const location = useLocation();

  // получение элементов с выборки
  const selectedOptions = location.state;
  const handleSubmitFalse = () => {
    setPopupActive(false);
  };

  const handleSubmit = (e) => {
    setPopupActive(true);
    selectedOptions["Name"] = name;
    if (phone[0] === "+") {
      selectedOptions["Phone number"] = phone.slice(1);
    } else {
      selectedOptions["Phone number"] = phone;
    }
    // Дата и время
    const currentDateObj = new Date();

    // Дата
    const day = currentDateObj.getDate().toString().padStart(2, "0");
    const month = (currentDateObj.getMonth() + 1).toString().padStart(2, "0"); // Месяцы в JavaScript начинаются с 0
    const year = currentDateObj.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    // Время
    const hours = currentDateObj.getHours().toString().padStart(2, "0");
    const minutes = currentDateObj.getMinutes().toString().padStart(2, "0");
    const seconds = currentDateObj.getSeconds().toString().padStart(2, "0");

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    selectedOptions["Date"] = formattedDate;
    selectedOptions["Time"] = formattedTime;
    selectedOptions["Status of application"] = "в обработке";

    console.log(selectedOptions);
    if (name.length > 2 && phone.length > 10) {
      axios
        .post(
          "https://sheet.best/api/sheets/5d11b116-bdab-418c-9148-e819bdf66884",
          selectedOptions,
        )
        .then((response) => {
          console.log(response);
        });
    }
  };

  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    const phoneMask = IMask(document.getElementById("phone-mask"), {
      mask: "+{7}(000)000-00-00",
    });

    // Clean up the IMask instance when the component unmounts
    return () => {
      phoneMask.destroy();
    };
  }, []);

  return (
    <div id="container" className="container" onClick={handleSubmitFalse}>
      <div
        id="option-right__wrapper"
        className="option-right__wrapper"
        onClick={handlePopupClick}
      >
        <div id="option-right" className="option-right">
          <div id="form" className="form">
            <div className="zayavka-title">Ваше имя</div>
            <input
              className="form-input form-name"
              placeholder="Григорий Григорьев"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            <div className="zayavka-title">Телефон</div>
            <input
              className="form-input form-phone"
              placeholder="+7 (985) 233-34-21"
              type="tel"
              id="phone-mask"
              name="phone"
              required
              value={phone}
              onChange={handlePhoneChange}
            />
            <button className="action-btn form-btn" onClick={handleSubmit}>
              <span>Заказать</span>
            </button>
            <Link to="/" className="form-btn">
              <div className="form-btn-div back__btn1">
                <span>
                  <img src={img2} alt="" className="arrow" />
                </span>
                <span id="back-btn__item">Назад</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {isPopupActive && name.length >= 2 && phone.length >= 10 && (
        <div className="PopUp" onClick={handleSubmitFalse}>
          <div className="Pop ActivePopUp" onClick={handlePopupClick}>
            <img className="PopImg" src={img3} alt="" />
            <p className="describe">
              Ваш заказ оформлен, в течение 24 часов с вами свяжется менеджер
            </p>
          </div>
        </div>
      )}
      {isPopupActive && (name.length < 2 || phone.length < 10) && (
        <div className="PopUp">
          <div className="Pop ActivePopUp">
            <img className="PopImg" src={img4} alt="" />
            <p className="describe">
              Пожалуйста, введите валидные данные, чтобы мы могли с вами
              связаться!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
