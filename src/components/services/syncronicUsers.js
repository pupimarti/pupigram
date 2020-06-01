import firebase from 'firebase';
import 'firebase/firestore';

import users_json from 'DB/users.json';

export default async function syncronicUsers() {
    const db = firebase.firestore();
    users_json.forEach(async u => {
        await db.collection('users').doc(u.user)
        .set({
            verify:u.verify,
            picture: u.picture,
            web: u.web,
            name: u.name,
            followers: u.followers,
            follows: u.follows,
            desc: u.desc,
        })
        .then(() => {
            console.log(u.user + ' creado')
        })
        .catch((e) => {
            console.log("Error getting documents: ", e);
    }); 
    });
}

