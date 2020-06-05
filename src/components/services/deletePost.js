import firebase from 'firebase';
import 'firebase/firestore';

export default async function deletePost(post, user) {
    let result = null;
    const db = firebase.firestore();
    await db.collection('posts').doc(post).delete()
    .then(async () => {
        await db.collection('users').doc(user).update({
            posts: firebase.firestore.FieldValue.arrayRemove(post)
        })
        .then(() => {
            result = true;
        })
    })
    .catch((e) => { 
        result = false;
        console.log(e)
    });
   
    return result;
}
