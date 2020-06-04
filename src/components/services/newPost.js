import firebase from 'firebase';
import 'firebase/firestore';
import uploadImg from './uploadImg'; 

export default async function newPost(user, img, desc) {
    if(!user || !img || !desc) return null;
    let result = null;
    const db = firebase.firestore();
    await db.collection('posts').add({
        user,
        desc,
        "likes": [],
        "time": firebase.firestore.Timestamp.fromDate(new Date()),
        "comments": []
    }).then(async (e) => {
        result = await uploadImg('posts/'+e.id+'/0', img);
    })
    .catch((e) => { 
        result = false;
        console.log(e)
    });
   
    return result;
}