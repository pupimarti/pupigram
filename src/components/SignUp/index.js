import React, { useState } from "react";
import firebase from "firebase/app";
import pupigram from "img/pupigram.png";
import "./css.css";
import Loading from "components/Loading";
import { Link } from "react-router-dom";
import createUser from "components/services/newUser";
import getUser from "components/services/getUser";

export default function SignUp(props) {
  const [loading, setLoading] = useState(false);
  const handleSetLoading = (value) => {
    setLoading(value);
  };

  const [data, setData] = useState({
    email: props.user ? props.user.email : "",
    name: props.user && props.user.displayName ? props.user.displayName : "",
    user: "",
    password: "",
  });

  const handleSetData = (d) => {
    setData(d);
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    if(name === "user")
    {
        let max_length = target.value.slice(0, 20);
        let remove_spaces = max_length.replace(/\s/g, '');
        let remove_symbols = remove_spaces.replace(/[^a-zA-Z0-9_]/g, '');
        handleSetData({...data, [name]: remove_symbols.toLowerCase()})
    }
    else
    handleSetData({ ...data, [name]: target.value });
  };
  

  const handleOnClick = async (e) => {
    e.preventDefault();
    handleSetLoading(true);
    if(await getUser(data.user)){
      setError({message: "El nombre de usuario '" + data.user + "' ya está en uso."})
      handleSetLoading(false);
      return;
    }
    if (props.user) {
      const create = await createUser(
        data.user,
        data.email,
        data.name,
        props.user.photoURL
      );
      if (create) {
        props.setProfile(null);
      } else {
        setError({ message: "Se ha producido un error al registrarse." });
        handleSetLoading(false);
      }
    } else {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(async (r) => {
          const create = await createUser(data.user, data.email, data.name, "");
          if (create) {
            props.setUser(r.user);
            handleSetLoading(false);
          } else {
            setError({ message: "Se ha producido un error al registrarse." });
            handleSetLoading(false);
          }
        })
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

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleOnClick}>
          <img src={pupigram} alt="logo" className="logo-login" />
          <h4 className="text-register">
            Regístrate para ver fotos y videos de tus amigos.
          </h4>
          {props.user ? (
            <div className="profile-register">
              {props.user.photoURL && (
                <img
                  className="img-user"
                  src={props.user.photoURL}
                  alt="tu-foto"
                />
              )}
              <button
                className="button follow"
                onClick={() => props.setUser(null)}
              >
                No registrarme con {data.email}
              </button>
            </div>
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
            name="email"
            onChange={handleInputChange}
            value={data.email}
            disabled={props.user}
          />
          <input
            type="text"
            placeholder="Nombre completo"
            name="name"
            onChange={handleInputChange}
            value={data.name}
          />
          <input
            type="text"
            placeholder="Nombre de usuario"
            name="user"
            onChange={handleInputChange}
            value={data.user}
          />
          {!props.user && (
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleInputChange}
              value={data.password}
            />
          )}
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
            ¿Tienes una cuenta? <Link to="/login">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
