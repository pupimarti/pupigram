import React, {useState} from 'react';
import firebase from 'firebase/app';
import pupigram from 'img/pupigram.png';
import './css.css';
import Loading from 'components/Loading';
import { useHistory } from "react-router-dom";

export default function LogIn(props) {

    const [loading, setLoading] = useState(false);
    const handleSetLoading = (value) =>{
        setLoading(value);
    }

    const [data, setData] = useState({user: '', password: ''});
    const handleSetData = (d) =>{
        setData(d);
    }

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        handleSetData({...data, [name]: target.value})
    }

    
    const handleOnClickAnonymus = async (e) =>{
        e.preventDefault();
        handleSetLoading(true);

        await firebase.auth().signInWithEmailAndPassword('default@gmail.com', 'default')
        .then(r => props.setUser(r.user))
        .catch(e => {
            handleSetLoading(false);
            setError(e);
        }
        );
    }

    const handleOnClick = async (e) => {
        e.preventDefault();
        handleSetLoading(true);

        await firebase.auth().signInWithEmailAndPassword(data.user, data.password)
        .then(r => props.setUser(r.user))
        .catch(e => {
            handleSetLoading(false);
            setError(e);
        }
        );
        
    }

    const handleOnClickGoogle = async (e) => {
        e.preventDefault();
        handleSetLoading(true);
        const provider = new firebase.auth.GoogleAuthProvider();

        await firebase.auth().signInWithPopup(provider)
        .then(r => props.setUser(r.user))
        .catch(e => {
            handleSetLoading(false);
            setError(e);
        }
        );
    }

    const [error, setError] = useState(null);

    const getError = () => {
        if(error){
            switch (error.code) {
                case "auth/user-not-found":
                    return "El nombre de usuario que has introducido no pertenece a ninguna cuenta. Comprueba tu nombre de usuario y vuelve a intentarlo."
                case "auth/wrong-password":
                    return "Tu contraseña no es correcta. Vuelve a comprobarla."
                default:
                    return "Usuario o contraseña incorrectos."
            }
        }
        return "";
    }

    let history = useHistory();

    const signUp = () => {
        history.push('/signup');
    }

    
    if(props.user)
        signUp();

    return(
        <div className="login-page">
            <div className="form">
                <form className="login-form" onSubmit={handleOnClick}>
                    <img src={pupigram} alt="logo" className="logo-login" />
                    <input 
                    type="text" 
                    placeholder="E-mail"
                    name="user"
                    onChange={handleInputChange}
                    value={data.user}
                    disabled
                    />
                    <input 
                    type="password" 
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleInputChange}
                    value={data.password}
                    disabled
                    />
                    <button className="button follow" onClick={handleOnClickAnonymus}>{loading ? <Loading /> : "Ingresar como anónimo"}</button>
                    <div className="divisor-login">
                        <hr/>
                        o
                        <hr/>
                    </div>
                    <p onClick={handleOnClickGoogle} className="login-google button follow">Iniciar sesión con Google</p>
                    {error && 
                    <p className="error">{getError()}</p>}
                    <p className="forget-password">¿Has olvidado la contraseña?</p>
                </form>
            </div>
            <div className="w100">
                <div className="form login-no-account">
                    <p className="no-account">¿No tienes una cuenta? <span onClick={() => signUp()}>Regístrate</span></p>
                </div>
            </div>
        </div>
    )
}
