import firebase from 'firebase';
import 'firebase/firestore';
import default_img from 'img/default.jpg';
import uploadImg from './uploadImg';

export default async function createUser(user, email, name, picture) {
    let result = null;
    let photo = picture;
    if(!photo || photo === "")
        photo = default_img;
        
    await fetch(photo)
    .then(res => res.blob()) // Gets the response and returns it as a blob
    .then(async blob => {
    const img_profile = await uploadImg('users/'+user, blob);
    if(img_profile){
        result = await createProfileUser(user, name, email);
    }
    else
        result = false;
    });
   
    return result;
}

const createProfileUser = async (user, name, email) => {
    const db = firebase.firestore();
    let result = false;
    await db.collection('users').doc(user)
        .set({
            name,
            email,
            verify:false,
            web: "",
            posts: [],
            followers: [],
            follows: [],
            desc: "Usuario pupigram",
        })
        .then(async () => {
            result = await createNotifsUser(user);
        })
        .catch((e) => {
            result = false;
            console.log("Error getting documents: ", e);
    });
    return result;
}

const createNotifsUser = async user => {
    const db = firebase.firestore();
    let result = false;
    await db.collection('notif').doc(user)
        .set({
            notifs: [],
            visualized: true
        })
        .then(() => {
            result = true
        })
        .catch((e) => {
            result = false;
            console.log("Error getting documents: ", e);
    });
    return result;
}