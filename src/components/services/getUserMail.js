import firebase from 'firebase';
import 'firebase/firestore';

export default async function getUserMail(mail) {
    const db = firebase.firestore();
    let email = mail;
    if(!mail)
        email = "default@gmail.com";
    
    var result = null;
    await db.collection('users').where("mail", "==", email)
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