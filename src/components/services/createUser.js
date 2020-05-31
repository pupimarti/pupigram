import firebase from 'firebase';
import 'firebase/firestore';

export default function createUser({user, mail, name, picture}) {
    const db = firebase.firestore();
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
}