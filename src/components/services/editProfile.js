import firebase from 'firebase';
import 'firebase/firestore';
/* import uploadImg from './uploadImg'; */

export default async function editProfile(user, name, web, desc) {
    const db = firebase.firestore();
    let result = false;
    await db.collection('users').doc(user)
        .set({
            name,
            web,
            desc,
        }, {merge: true})
        .then(() => {
            console.log('edita3');
            result = true
        })
        .catch((e) => {
            result = false;
            console.log("Error getting documents: ", e);
    });
    return result;
}