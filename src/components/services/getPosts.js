/* import posts from 'components/posts.json' */
import firebase from 'firebase';
import 'firebase/firestore';

export default async function getPosts(posts, user){
    var arr_posts = [];
    /* for(var p of posts){
        if(user){
            if(p.user === user)
                arr_posts.push(p);
            }
        else
            arr_posts.push(p);
    } */

    const db = firebase.firestore();
    await db.collection('posts').orderBy('user').get()
    .then(function (querySnapshot) {
        querySnapshot.forEach((doc) => {
            let post = doc.data();
            post.id = doc.id;
            post.time = post.time.toDate();
            arr_posts.push(post)
        })})
    .catch((e) => console.log(e)); 

    return arr_posts;
}