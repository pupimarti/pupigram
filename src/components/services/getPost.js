/* import posts from 'components/posts.json' */

/* export default function getPost(id, posts) {
  for (var p of posts) {
    if (p.id === id) return p;
  }
  return null;
}
 */
import firebase from "firebase";
import "firebase/firestore";

export default async function getPost(post) {
  let return_post = null;
  const db = firebase.firestore();
  await db
    .collection("posts")
    .doc(post)
    .get()
    .then((doc) => {
      if (doc.exists) {
        let post_ = doc.data();
        post_.id = doc.id;
        post_.time = post_.time.toDate();
        return_post = post_;
      } else {
        console.log("no existe el usuario");
        return_post = null;
      }
    })
    .catch((e) => {
      console.log(e);
      return_post = null;
    });

  return return_post;
}
