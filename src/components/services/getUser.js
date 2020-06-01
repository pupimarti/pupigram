import firebase from 'firebase';
import 'firebase/firestore';

export default async function getUser(user) {
    const db = firebase.firestore();
    let return_user = null;
    await db.collection('users').doc(user)
    .get()
    .then(function(doc) {
        if(doc.exists){
            let user_min = doc.data();
            user_min.user = doc.id;
            return_user = user_min;
        }
        else{
            console.log('no existe el usuario');
            return_user = null;
        }
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        return_user = null;
    });
    return return_user;
}