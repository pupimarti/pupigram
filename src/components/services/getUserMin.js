import firebase from 'firebase';
import 'firebase/firestore';

export default async function getUserMin(user) {
    const db = firebase.firestore();
    let return_user = null;
    await db.collection('users-min').doc(user)
    .get()
    .then(function(doc) {
        if(doc.exists){
            let user_min = doc.data();
            user_min.user = doc.id;
            return_user = user_min;
        }
        else{
            console.log('no existe el usuario');
        }
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    return return_user;
}