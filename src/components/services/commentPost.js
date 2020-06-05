import firebase from "firebase";
import "firebase/firestore";

export default async function commentPost(user, post, comment) {
  const db = firebase.firestore();
  let result = null;
  let the_comment = {
    user,
    comment,
    time: firebase.firestore.Timestamp.fromDate(new Date()),
  };
  try {
    await db
      .collection("posts")
      .doc(post)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion(the_comment),
      });
    result = true;
  } catch (e) {
    result = false;
    console.log("Error getting documents: ", e);
  }

  return result;
}
