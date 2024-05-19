import React, { useState } from "react";
import "./Summary.css";
import img1 from "./Group.svg";
import img2 from "./arrow.svg";
import { useCustomization } from "./contexts/Customization";
import { Link } from "react-router-dom";

const SummaryPage = () => {
  const { setHandle, setFront, setBack } =
    useCustomization();

  const [options, setOptions] = useState({
    handle: { label: "Закругленная", value: 3500 },
    front: { label: "ПортоМуар", value: 0 },
    back: { label: "Бастион", value: 5600 },
  });

  const handleOptions = [
    { label: "Закругленная", value: 3000 },
    { label: "КвадратМеталл", value: 4000 },
    { label: "КруглоКвадратная", value: 3000 },
    { label: "ТрапецияЗолото", value: 4000 },
    { label: "КвадратЧерная", value: 4000 },
    { label: "ПолуКруглая", value: 3000 },
  ];

  const frontOptions = [
    { label: "Эконом", value: 15850 },
    { label: "Термодверь", value: 32330 },
    { label: "Трио", value: 7150 },
    { label: "Бастион", value: 6500 },
    { label: "Альба", value: 20750 },
    { label: "Кельт", value: 18750 },
    { label: "Вельс", value: 10050 },
    { label: "Швед", value: 12500 },
    { label: "ПортоМуар", value: 0 },
    { label: "Эконом2", value: 0 },
    { label: "Экстра", value: 6500 },
    { label: "Эврика", value: 6500 },
    { label: "Корсо", value: 9150 },
    { label: "Сенатор", value: 6500 },
    { label: "РоялВуд", value: 6500 },
    { label: "Вена", value: 5500 },
    { label: "Триумф", value: 6500 },
    { label: "Паоло", value: 5500 },
    { label: "Лофт", value: 6500 },
    { label: "Прима", value: 9500 },
  ];

  const backOptions = [
    { label: "Эконом", value: 3000 },
    { label: "Термодверь", value: 5500 },
    { label: "Трио", value: 6000 },
    { label: "Бастион", value: 5600 },
    { label: "Альба", value: 20950 },
    { label: "Кельт", value: 18750 },
    { label: "Вельс", value: 13050 },
    { label: "Швед", value: 11500 },
    { label: "ПортоМуар", value: 5500 },
    { label: "Эконом2", value: 7000 },
    { label: "Экстра", value: 6000 },
    { label: "Эврика", value: 6000 },
    { label: "Корсо", value: 6000 },
    { label: "Сенатор", value: 6500 },
    { label: "РоялВуд", value: 6000 },
    { label: "Вена", value: 6000 },
    { label: "Триумф", value: 6500 },
    { label: "Паоло", value: 6000 },
    { label: "Лофт", value: 6000 },
    { label: "Прима", value: 9500 },
  ];

  const handleOptionClick = (option) => {
    setOptions({ ...options, handle: option });
    setHandle(option.label);
  };

  const frontOptionClick = (option) => {
    setOptions({ ...options, front: option });
    setFront(option.label);
  };

  const backOptionClick = (option) => {
    setOptions({ ...options, back: option });
    setBack(option.label);
  };

  // после уточнения добавить стоимость с размера 
  const totalAmount =
    options.handle.value + options.front.value + options.back.value;

    const sizeOptions = [
      {
        label: "2050x880",
        value: 0
      },
      {
        label: "2050x960",
        value: 0
      },
    ];
    
    const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);
    
    const sizeOptionClick = (option) => {
      setSelectedSize(option);
    };
  
  return (
    <div className="container">
      <div className="option-right__wrapper">
        <div className="option-right">
          <div className="handle">
            <h3 className="option__title">Ручка: {options.handle.label}</h3>
            <div className="option__choose">
              {handleOptions.map((option) => (
                <div
                  key={option.label}
                  className={`item ${options.handle.label === option.label ? "item-active" : ""}`}
                  onClick={() => handleOptionClick(option)}
                >
                  <div className="item__label">{option.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="front">
            <h3 className="option__title">
              Передняя часть: {options.front.label}
            </h3>
            <div className="option__choose">
              {frontOptions.map((option) => (
                <div
                  key={option.label}
                  className={`item ${options.front.label === option.label ? "item-active" : ""}`}
                  onClick={() => frontOptionClick(option)}
                >
                  <div className="item__label">{option.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="back">
            <h3 className="option__title">
              Задняя часть: {options.back.label}
            </h3>
            <div className="option__choose">
              {backOptions.map((option) => (
                <div
                  key={option.label}
                  className={`item ${options.back.label === option.label ? "item-active" : ""}`}
                  onClick={() => backOptionClick(option)}
                >
                  <div className="item__label">{option.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="size">
            <h3 className="option__title">
              Размеры: {selectedSize.label}
            </h3>
            <div className="option__choose">
              {sizeOptions.map((option) => (
                <div
                  key={option.label}
                  className={`item ${selectedSize.label === option.label ? "item-active" : ""}`}
                  onClick={() => sizeOptionClick(option)}
                >
                  <div className="item__label">{option.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer>
          <div className="mainfooter">
            <button onClick={() => window.history.back()} className="back__btn">
              <div className="footer-btn__div">
                <span>
                  <img src={img2} alt="" className="arrow" />
                </span>
                <span id="back-btn__item">Назад</span>
              </div>
            </button>
            <Link
              to="/cart"
              state={{
                Handle: options.handle.label,
                "Front part": options.front.label,
                "Back part": options.back.label,
                "Size": selectedSize.label,
                "Order sum": totalAmount,
              }}
            >
              <button className="footer__btn1" type="submit">
                <div className="footer-btn__div">
                  <span id="zakaz">{totalAmount}₽</span>
                  <span>
                    <img src={img1} alt="" className="cart" />
                  </span>
                </div>
              </button>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SummaryPage;
