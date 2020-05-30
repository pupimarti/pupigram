import React, {useState} from 'react';
import {useFirebaseApp} from 'reactfire';
import firebase from 'firebase/app';
import './css.css';


export default function Sesion(props) {
    
    const firebaseReact = useFirebaseApp();

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


    const handleOnClick = async (e) => {
        e.preventDefault();
        handleSetLoading(true);
        await firebaseReact.auth().signInWithEmailAndPassword(data.user, data.password);
        
    }

    const handleOnClickGoogle = async (e) => {
        e.preventDefault();
        handleSetLoading(true);
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(r => props.setUser(r.user))
        .catch(e => console.log(e));
    }

    return(
        <div className="login-page">
            <div className="form">
                {!loading
                ?<form className="login-form" onSubmit={handleOnClick}>
                    <input 
                    type="text" 
                    placeholder="Usuario"
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
                    />
                    <button onClick={handleOnClick}>INGRESAR</button>
                    
                    <button onClick={handleOnClickGoogle}>INGRESAR CON GOOGLE</button>
                </form>
                :<div className="cargando"></div>
                }
            </div>
        </div>
    )
}
