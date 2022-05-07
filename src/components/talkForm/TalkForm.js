import React, { useState } from "react";
import { addTalk } from "../../services/AddTalkService";
import "./talkForm.css";

export const TalkForm = () => {
  const initialStateValues = {
    fullName: '',
    email: '',
    userTwitter: '',
    talkTitle: '',
    talkDescription: '',
    speakerDescription: '',
  };
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('values: ', values);
    const response =  await addTalk(values);
    console.log("🚀 ~ file: TalkForm.js ~ line 24 ~ handleSubmit ~ response", response);
    setValues({...initialStateValues});
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
          name="fullName"
          onChange={handleInputChange}
          value={values.fullName}
        />
        <label className="talk-container__form--label">Email</label>
        <input
          type="text"
          className="talk-container__form--input"
          name="email"
          onChange={handleInputChange}
          value={values.email}
        />
        <label className="talk-container__form--label">Usuario Twitter</label>
        <input
          type="text"
          className="talk-container__form--input"
          name="userTwitter"
          onChange={handleInputChange}
          value={values.userTwitter}
        />
        <label className="talk-container__form--label">
          Título de la charla
        </label>
        <input
          type="text"
          className="talk-container__form--input"
          name="talkTitle"
          onChange={handleInputChange}
          value={values.talkTitle}
        />
        <label className="talk-container__form--label">
          Descripción corta de la charla
        </label>
        <textarea
          rows="50"
          cols="50"
          className="talk-container__form--textarea"
          name="talkDescription"
          onChange={handleInputChange}
          value={values.talkDescription}
        />
        <label className="talk-container__form--label">
          Breve descripción sobre usted (trayectoria, ocupación, etc)
        </label>
        <input
          type="text"
          className="talk-container__form--textarea"
          name="speakerDescription"
          onChange={handleInputChange}
          value={values.speakerDescription}
        />
        <div className="talk-container__form--btns">
          <button className="talk-container__form--btns__btn--send">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
