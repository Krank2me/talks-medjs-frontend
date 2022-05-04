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
        <label className="talk-container__form--label">Nombre completo</label>
        <input
          type="text"
          className="talk-container__form--input"
          name="name"
          required="true"
        />
        <label className="talk-container__form--label">Email</label>
        <input
          type="text"
          className="talk-container__form--input"
          name="email"
          required="true"
        />
        <label className="talk-container__form--label">Usuario Twitter</label>
        <input
          type="text"
          className="talk-container__form--input"
          name="twitter"
        />
        <label className="talk-container__form--label">Título de la charla</label>
        <input
          type="text"
          className="talk-container__form--input"
          name="talk"
          required="true"
        />
        <label className="talk-container__form--label">Descripción corta de la charla</label>
        <textarea
          rows="50"
          cols="50"
          className="talk-container__form--textarea"
          name="description"
          required="true"
        />
        <label className="talk-container__form--label">Tipo de evento</label>
        <select className="talk-container__form--input" name="" id="">
          <option value="charla">Charla</option>
          <option value="taller" disabled>Taller</option>
          <option value="ambas" disabled>Charla & taller</option>
        </select>
        <label className="talk-container__form--label">Duración aproximada</label>
        <input
          type="text"
          className="talk-container__form--input"
          name="duration"
          required="true"
        />
        <label className="talk-container__form--label">Breve descripción sobre usted (trayectoria, ocupación, etc)</label>
        <input
          type="text"
          className="talk-container__form--textarea"
          name="personalInfo"
        />
        <div className="talk-container__form--btns">
          <button className="talk-container__form--btns__btn--send">Enviar</button>
        </div>
      </form>
    </div>
  );
};
