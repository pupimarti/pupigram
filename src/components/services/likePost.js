import firebase from "firebase";
import "firebase/firestore";

export default async function likePost(user, post, value) {
  const db = firebase.firestore();
  let result = null;
  try {
    if (value) {
      await db
        .collection("posts")
        .doc(post)
        .update({
          likes: firebase.firestore.FieldValue.arrayUnion(user),
        });
    } else {
      await db
        .collection("posts")
        .doc(post)
        .update({
          likes: firebase.firestore.FieldValue.arrayRemove(user),
        });
    }
    result = true;
  } catch (e) {
    result = false;
    console.log("Error getting documents: ", e);
  }

  return result;
}
