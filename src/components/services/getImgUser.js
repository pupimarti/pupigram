import firebase from 'firebase';
import 'firebase/storage';

export default async function getImgUser(user) {
    const storage = firebase.storage();
    let return_img = null;
    await storage.ref('users/'+user).getDownloadURL()
    .then(function(url) {
        return_img = url;
    })
    .catch(function(error) {
        console.log("No se pudo encontrar la imagen de perfil de ", user);
        console.log(error);
        return_img = null;
    });
    return return_img;
}