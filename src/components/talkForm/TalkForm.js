import React, { useState } from "react";
import { addTalk } from "../../services/AddTalkService";
import toast from "react-hot-toast";
import "./talkForm.css";

export const TalkForm = () => {
  const initialStateValues = {
    fullName: "",
    email: "",
    userTwitter: "",
    userCompany: "",
    talkTitle: "",
    talkLevel: "",
    talkDescription: "",
    speakerDescription: "",
  };
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("values: ", values);
    const response = await addTalk(values);
    console.log(
      "🚀 ~ file: TalkForm.js ~ line 24 ~ handleSubmit ~ response",
      response
    );
    if (response.status === 200) {
      console.log("response.status: ", response.status);
      toast.success(
        "Charla registrada éxitosamente",
        {duration: 3000}
      );
      setValues({ ...initialStateValues });
    } else {
      toast.error(
        "Ha ocurrido un error, por favor contactanos por medio de las redes de @medellinjs",
        {duration: 3000}
      );
    }
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
        <label className="talk-container__form--label">Usuario Twitter (ej: @jhondoe)</label>
        <input
          type="text"
          className="talk-container__form--input"
          name="userTwitter"
          onChange={handleInputChange}
          value={values.userTwitter}
        />
        <label className="talk-container__form--label">Empresa</label>
        <input
          type="text"
          className="talk-container__form--input"
          name="userCompany"
          onChange={handleInputChange}
          value={values.userCompany}
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
          Nivel de la charla
        </label>
        <select
          name="talkLevel"
          onChange={handleInputChange}
          className="talk-container__form--input"
        >
          <option key={1} value="principiante">
            Principiante
          </option>
          <option key={2} value="intermedio">
            Intermedio
          </option>
          <option key={3} value="avanzado">
            Avanzado
          </option>
        </select>
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
        <textarea
          rows="50"
          cols="50"
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
