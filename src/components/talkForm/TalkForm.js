import React from "react";
import "./talkForm.css";

export const TalkForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="talk-container">
      <div className="talk-container__logo">
        <img
          className="talk-container__logo--img"
          src="https://res.cloudinary.com/panda2me/image/upload/v1651547068/talks-medjs/Logo_MedellinJS_zziflu.svg"
          alt="Logo"
        />
      </div>
      <form className="talk-container__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="talk-container__form--input"
          placeholder="Name"
          name="Nombre completo"
          required="true"
        />
        <input
          type="text"
          className="talk-container__form--input"
          placeholder="Email"
          name="name"
          required="true"
        />
        <input
          type="text"
          className="talk-container__form--input"
          placeholder="Handle Twitter, ejm: @jhondoe"
          name="name"
          required="true"
        />
        <input
          type="text"
          className="talk-container__form--input"
          placeholder="Titulo de la charla"
          name="name"
          required="true"
        />
        <textarea
          rows="50"
          cols="50"
          className="talk-container__form--textarea"
          placeholder="Descripción corta de la charla"
          name="name"
          required="true"
        />
        <select className="talk-container__form--input" name="" id="">
          <option value="charla">Charla</option>
          <option value="taller" disabled>Taller</option>
          <option value="ambas" disabled>Charla & taller</option>
        </select>
        <input
          type="text"
          className="talk-container__form--input"
          placeholder="Duración aproximada"
          name="name"
          required="true"
        />
        <input
          type="text"
          className="talk-container__form--input"
          placeholder="Breve descripción sobre usted (trayectoria, ocupación, etc)"
          name="name"
          required="true"
        />
        <div className="talk-container__form--btns">
          <button className="talk-container__form--btns__btn--send">Enviar</button>
          <button className="talk-container__form--btns__btn--clean">Limpiar</button>
        </div>
      </form>
    </div>
  );
};
