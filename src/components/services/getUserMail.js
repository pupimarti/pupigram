import firebase from 'firebase';
import 'firebase/firestore';

export default async function getUserMail(mail) {
    const db = firebase.firestore();
    var result = null;
    await db.collection('users').where("mail", "==", mail)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            result = {user: doc.id, data:doc.data()};
        });
    })
    .catch(function(error) {
        console.log(error);
        result = error;
    });

    return result;
}