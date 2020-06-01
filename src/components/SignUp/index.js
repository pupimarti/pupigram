import React, { useState } from "react";
import firebase from "firebase/app";
import pupigram from "img/pupigram.png";
import "./css.css";
import Loading from "components/Loading";
import { useHistory } from "react-router-dom";
import createUser from "components/services/createUser";

export default function SignUp(props) {
  const [loading, setLoading] = useState(false);
  const handleSetLoading = (value) => {
    setLoading(value);
  };

  const [data, setData] = useState({
    mail: props.user ? props.user.email : "",
    name: props.user ? props.user.displayName : "",
    user: "",
    password: "",
  });

  const handleSetData = (d) => {
    setData(d);
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    handleSetData({ ...data, [name]: target.value });
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    handleSetLoading(true);
    if (props.user) {
      const create = await createUser(data.user, data.mail, data.name, props.user.photoURL);
      if(create)
        props.setProfile(null);
    } else {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(data.user, data.password)
        .then((r) => props.setUser(r.user))
        .catch((e) => {
          handleSetLoading(false);
          setError(e);
        });
    }
  };

  const handleOnClickGoogle = async (e) => {
    e.preventDefault();
    handleSetLoading(true);
    const provider = new firebase.auth.GoogleAuthProvider();

    await firebase
      .auth()
      .signInWithPopup(provider)
      .then((r) => props.setUser(r.user))
      .catch((e) => {
        handleSetLoading(false);
        setError(e);
      });
  };

  const [error, setError] = useState(null);

  let history = useHistory();
  const logIn = () => {
    history.push("/login");
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleOnClick}>
          <img src={pupigram} alt="logo" className="logo-login" />
          <h4 className="text-register">
            Regístrate para ver fotos y videos de tus amigos.
          </h4>
          {props.user ? (
            <img className="img-user" src={props.user.photoURL} alt="tu-foto" />
          ) : (
            <button onClick={handleOnClickGoogle} className="button follow">
              Iniciar sesión con Google
            </button>
          )}
          <div className="divisor-login">
            <hr />
            o
            <hr />
          </div>
          <input
            type="text"
            placeholder="Correo electrónico"
            name="mail"
            onChange={handleInputChange}
            value={data.mail}
            disabled={props.user}
          />
          <input
            type="text"
            placeholder="Nombre completo"
            name="name"
            onChange={handleInputChange}
            value={data.name}
            disabled={props.user}
          />
          <input
            type="text"
            placeholder="Nombre de usuario"
            name="user"
            onChange={handleInputChange}
            value={data.user}
          />
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleInputChange}
            value={data.password}
            disabled={props.user}
          />
          <button className="button follow" onClick={handleOnClick}>
            {loading ? <Loading /> : "Registrarte"}
          </button>
          {error && <p className="error">{error.message}</p>}
          <p className="conditions">
            Al registrarte, aceptas nuestras Condiciones, la Política de datos y
            la Política de cookies.
          </p>
        </form>
      </div>
      <div className="w100">
        <div className="form login-no-account">
          <p className="no-account">
            ¿Tienes una cuenta? <span onClick={() => logIn()}>Entrar</span>
          </p>
        </div>
      </div>
    </div>
  );
}
