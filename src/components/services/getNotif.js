/* import notif from 'components/notif.json'; */
import firebase from "firebase";
import "firebase/firestore";


export default async function getNotif(user){
    var notifs = null;

    /* for(var n of notif)
        if(n.user === user)
            notifs = n */
    const db = firebase.firestore();
    await db
        .collection("notif")
        .doc(user)
        .get()
        .then((doc) => {
        if (doc.exists) {
            let notif = doc.data();
            notif.vizualized = true;
            notifs = notif;
            db.collection('notif').doc(user)
            .update({
                visualized: true
            });
        } else {
            console.log("no existe el usuario");
            notifs = null;
        }
        })
        .catch((e) => {
        console.log(e);
        notifs = null;
        });

            
    return notifs;
}