/* import posts from 'components/posts.json' */
import firebase from 'firebase';
import 'firebase/firestore';

export default async function getPosts(user){
    var arr_posts = [];
    const db = firebase.firestore();
    if(user){
        await db.collection('posts').where("user", "==", user).orderBy('time').get()
        .then(function (querySnapshot) {
            querySnapshot.forEach((doc) => {
                let post = doc.data();
                post.id = doc.id;
                post.time = post.time.toDate();
                arr_posts.push(post)
            })})
        .catch((e) => console.log(e)); 
    }
    else{
        await db.collection('posts').orderBy('time').get()
        .then(function (querySnapshot) {
            querySnapshot.forEach((doc) => {
                let post = doc.data();
                post.id = doc.id;
                post.time = post.time.toDate();
                arr_posts.push(post)
            })})
        .catch((e) => console.log(e)); 
    }

    return arr_posts;
}