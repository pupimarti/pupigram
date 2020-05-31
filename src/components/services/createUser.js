import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

export default function createUser({user, mail, name, picture, password}) {
    const db = firebase.firestore();
    firebase.auth().createUserWithEmailAndPassword(mail, password)
    .then(() => {
        db.collection('users').doc(user)
        .set({
            name,
            mail,
            picture
        })
        .then(() => {
            console.log('creado')
        })
        .catch((e) => {
            console.log("Error getting documents: ", e);
        });
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('no se pudo crear. ' + errorMessage + " - " + errorCode) 
        // ...
      });
}