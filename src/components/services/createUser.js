import firebase from 'firebase';
import 'firebase/firestore';

export default async function createUser(user, email, name, picture) {
    const db = firebase.firestore();
    let result = null;
    await db.collection('users').doc(user)
        .set({
            name,
            email,
            picture,
            verify:false,
            web: "",
            followers: [],
            follows: [],
            desc: "Usuario pupigram",
        })
        .then(async () => {
            await db.collection('users-min').doc(user)
            .set({
                picture,
                verify:false
            })
            .then(() => {
                result = true;
                console.log('creado')
            })
            .catch((e) => {
                result = false;
                console.log("Error getting documents: ", e);
        });
        })
        .catch((e) => {
            result = false;
            console.log("Error getting documents: ", e);
    });
    return result;
}