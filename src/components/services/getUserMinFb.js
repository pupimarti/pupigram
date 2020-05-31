import firebase from 'firebase';
import 'firebase/firestore';

export default function getUserMinFb(user) {
    const db = firebase.firestore();
    db.collection('users').doc(user)
    .get()
    .then(function(doc) {
        if(doc.exists){
            console.log(doc.data());
        }
        else{
            console.log('no existe el usuario');
        }
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}