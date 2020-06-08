import React, { useState, useContext } from "react";
import "./css.css";

import {Link} from "react-router-dom";
import Profile from "components/Context/AppContext";

export default function EditProfile() {
  const { profile } = useContext(Profile);

  const [data, setData] = useState({
    name: profile.name,
    desc: profile.desc,
    picture: profile.picture,
    web: profile.web
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    setData({ ...data, [name]: target.value });
  };

  return (
    <div className="content-edit-profile">
      <div className="content-indicators-inputs">
        <div className="content-indicator-input">
          <p className="indicator">Foto de perfil</p>
          <img src={data.picture} alt="pic-profile" className="perfil-img" />
        </div>
        <div className="content-indicator-input">
          <p className="indicator">Nombre</p>
          <input
            type="text"
            className="input-edit"
            value={data.name}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="content-indicator-input">
          <p className="indicator">Biografía</p>
          <input
            type="text"
            className="input-edit"
            value={data.desc}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="content-indicator-input">
          <p className="indicator">Sitio web</p>
          <input
            type="text"
            className="input-edit"
            value={data.web}
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
      <div className="content-buttons-edit">
          <Link to={"/"+profile.user}><button className="button follow">Guardar</button></Link>
          <Link to={"/"+profile.user}><button className="button unfollow">Volver</button></Link>
      </div>
    </div>
  );
}
