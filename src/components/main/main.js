import React from "react";

import s from "./main.module.scss";
import pic from "../../img/start.jpg";

const bgImageStyle = {
  background: "url(" + pic + ")",
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  backgroundRepeat: "no-repeat",
};

const Main = () => (
  <section className={s.hero}>
    <div className={s.container}>
      <div className={s.hero__part__text}>
        <h1 className={s.hero__title}>Конфедерация треклокросса</h1>
        <p className={s.hero__text}>
          Треклокросс — это циклокросс на фиксах, без тормозов. Мы уже во второй
          раз проводим серию, где каждый желающий может организовать гонку в
          своем городе.
        </p>
          У нас много чего происхоит:
          Разыен событе и я вское 
      </div>
      <div className={s.hero__part__pic}>
        <div style={bgImageStyle} className={s.hero__image}></div>
      </div>
    </div>
  </section>
);

export default Main;
