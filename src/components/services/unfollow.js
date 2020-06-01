import firebase from 'firebase';
import 'firebase/firestore';

export default async function unfollow(user, user_unfollow) {
    const db = firebase.firestore();
    let result = null;
    try {
        await db.collection('users').doc(user)
        .update({
            follows: firebase.firestore.FieldValue.arrayRemove(user_unfollow)
        });
        await db.collection('users').doc(user_unfollow)
        .update({
            followers: firebase.firestore.FieldValue.arrayRemove(user)
        });
        result = true;
    } catch (e) {
        result = false;
        console.log("Error getting documents: ", e);
    }
    
    return result;
}