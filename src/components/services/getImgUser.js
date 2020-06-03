import firebase from 'firebase';
import 'firebase/storage';

export default async function getImgUser(user) {
    let return_img = null;
    const storage_users = localStorage.getItem('img_users');
    let img_users = JSON.parse(storage_users);
    if(img_users && img_users.forEach((u) => {
        if(u.user === user){
            return_img = u.url;
            return;
        }
    }));
    if(!return_img){
        console.log('vine a buscar img');
        const storage = firebase.storage();
        await storage.ref('users/'+user).getDownloadURL()
        .then(function(url) {
            const user_img = {user,url};
            if(!img_users)
                img_users = [];
            img_users.push(user_img);
            localStorage.setItem('img_users', JSON.stringify(img_users));
            return_img = url;
        })
        .catch(function(error) {
            console.log("No se pudo encontrar la imagen de perfil de ", user);
            console.log(error);
            return_img = null;
        });
    }
    return return_img;
}