import firebase from 'firebase';
import 'firebase/storage';

export default async function uploadImg(url, img) {
    const storage = firebase.storage().ref().child(url);
    let return_result = false;
    await storage.put(img)
    .then(function(res) {
        console.log(res);
        return_result = true;
    })
    .catch(function(error) {
        console.log("No se pudo subir la imagen de perfil");
        console.log(error);
        return_result = false;
    });
    return return_result;
}