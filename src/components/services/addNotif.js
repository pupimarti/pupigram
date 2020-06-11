import firebase from 'firebase';
import 'firebase/firestore';

export default function addNotif(user, type, user_send, post = null, comment = null) {
    if(user === user_send) return;
    const db = firebase.firestore();
    let result = null;
    let notif = {
        user_send,
        type,
        time: firebase.firestore.Timestamp.fromDate(new Date())
    }
    if(post)
        notif.post = post;
    if(comment)
        notif.comment = comment;

    db.collection('notif').doc(user)
    .update({
        notifs: firebase.firestore.FieldValue.arrayUnion(notif),
        visualized: false
    })
    .then(() => result = true)
    .catch((e) => console.log(e))
    
    return result;
}