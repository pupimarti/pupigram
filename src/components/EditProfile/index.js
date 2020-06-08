import React, { useState, useContext } from "react";
import "./css.css";

import { Link } from "react-router-dom";
import Profile from "components/Context/AppContext";
import editProfile from "components/services/editProfile";
import Loading from "components/Loading";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function EditProfile() {
  const { profile, setProfile } = useContext(Profile);

  const [data, setData] = useState(profile);

  const handleInputChange = (e) => {
    if (profile.user !== "default") {
      const target = e.target;
      const name = target.name;
      setData({ ...data, [name]: target.value });
    }
  };

  const [loading, setLoading] = useState(false);
  const handleChange = async () => {
    setLoading(true);
    if (await editProfile(profile.user, data.name, data.web, data.desc, img)) {
      NotificationManager.success("Usuario editado con éxito", "Editado", 5000);
      setProfile(data);
      setImg(null);
    } else
      NotificationManager.error(
        "No se ha podido editar el usuario, vuelva a intentarlo más tarde.",
        "Error",
        5000
      );
    setLoading(false);
  };

  const [img, setImg] = useState(null);

  const handleChangeImage = (e) => {
      const url_img = URL.createObjectURL(e.target.files[0]);
      setImg(e.target.files[0]);
      setData({...data, picture:url_img});
  }

  return (
    <div className="content-edit-profile">
      <div className="content-indicators-inputs">
        <div className="content-indicator-input">
          <p className="indicator">Nombre de usuario</p>
          <input
            type="text"
            className="input-edit disabled"
            value={profile.user}
            disabled
          />
        </div>
        <div className="content-indicator-input">
          <p className="indicator">Foto de perfil</p>
          <img src={data.picture} alt="pic-profile" className="perfil-img" />
          <div>
            <label htmlFor="upload-profile" className="button follow">
                Editar foto de perfil
            </label>
            <input type="file" id="upload-profile" className="invisible" onChange={handleChangeImage}/>
          </div>
        </div>
        <div className="content-indicator-input">
          <p className="indicator">Nombre</p>
          <input
            type="text"
            className="input-edit"
            value={data.name}
            name="name"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="content-indicator-input">
          <p className="indicator">Biografía</p>
          <input
            type="text"
            className="input-edit"
            name="desc"
            value={data.desc}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="content-indicator-input">
          <p className="indicator">Sitio web</p>
          <input
            type="text"
            className="input-edit"
            name="web"
            value={data.web}
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
      {profile.user === "default" ? (
        <div className="no-edit-default">
          <div>
            <p>
              El usuario por default no se puede editar, ingresa en otra cuenta
              para poder editar.
            </p>
          </div>
          <Link to={"/" + profile.user}>
            <button className="button unfollow">Volver</button>
          </Link>
        </div>
      ) : (
        <div className="content-buttons-edit">
          <button onClick={() => handleChange()} className="button follow">
            {loading ? <Loading /> : "Guardar"}
          </button>
          <Link to={"/" + profile.user}>
            <button className="button unfollow">Volver</button>
          </Link>
        </div>
      )}
      <NotificationContainer />
    </div>
  );
}
