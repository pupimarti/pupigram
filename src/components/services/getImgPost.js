import firebase from 'firebase';
import 'firebase/storage';

export default async function getImgPost (post){
    const storage = firebase.storage();
    let return_img = null;
    
    await storage.ref('posts/'+post).child('0').getDownloadURL()
    .then(function(res) {
        return_img = res;
    })
    .catch(function(error) {
        console.log('no se encontraron las imagenes del post')
        console.log(error);
        return_img = null;
    });

    return return_img;
}