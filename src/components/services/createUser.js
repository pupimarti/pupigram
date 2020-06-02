import firebase from 'firebase';
import 'firebase/firestore';

export default async function createUser(user, email, name, picture) {
    const db = firebase.firestore();
    let result = null;
    let photo = picture;
    if(!photo || photo === "")
        photo = "https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_ohc=Jf9Z_lzbyhIAX8Goisq&oh=a40f9aed80ddfc70f97243fbb84d4611&oe=5EE4368F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"

    await db.collection('users').doc(user)
        .set({
            name,
            email,
            picture: photo,
            verify:false,
            web: "",
            followers: [],
            follows: [],
            desc: "Usuario pupigram",
        })
        .then(async () => {
            console.log('user cread');
            await db.collection('users-min').doc(user)
            .set({
                picture: photo,
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