import firebase from 'firebase';
import 'firebase/firestore';
import addNotif from './addNotif';

export default async function addFollow(user, user_follow) {
    const db = firebase.firestore();
    let result = null;
    try {
        await db.collection('users').doc(user)
        .update({
            follows: firebase.firestore.FieldValue.arrayUnion(user_follow)
        });
        await db.collection('users').doc(user_follow)
        .update({
            followers: firebase.firestore.FieldValue.arrayUnion(user)
        });
        addNotif(user_follow, "follow", user);
        result = true;
    } catch (e) {
        result = false;
        console.log("Error getting documents: ", e);
    }
    
    return result;
}