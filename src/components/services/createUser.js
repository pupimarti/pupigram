import firebase from 'firebase';
import 'firebase/firestore';

export default async function createUser(user, mail, name, picture) {
    const db = firebase.firestore();
    let result = null;
    await db.collection('users').doc(user)
        .set({
            name,
            mail,
            picture
        })
        .then(() => {
            result = true;
            console.log('creado')
        })
        .catch((e) => {
            result = false;
            console.log("Error getting documents: ", e);
    });
    return result;
}