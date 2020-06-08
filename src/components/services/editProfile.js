import firebase from "firebase";
import "firebase/firestore";
import uploadImg from './uploadImg'; 

export default async function editProfile(user, name, web, desc, img = null) {
  const db = firebase.firestore();
  let result = true;
  if (img) {
    result = await uploadImg("users/" + user, img);
  }
  if (result) {
    await db
      .collection("users")
      .doc(user)
      .set(
        {
          name,
          web,
          desc,
        },
        { merge: true }
      )
      .then(() => {
        result = true;
      })
      .catch((e) => {
        result = false;
        console.log("Error getting documents: ", e);
      });
  }
  return result;
}
