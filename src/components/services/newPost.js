import firebase from 'firebase';
import 'firebase/firestore';
import uploadImg from './uploadImg'; 

export default async function newPost(user, verify, img, desc) {
    if(!user || !img) return null;
    let result = null;
    const db = firebase.firestore();
    await db.collection('posts').add({
        user,
        desc,
        verify,
        "likes": [],
        "time": firebase.firestore.Timestamp.fromDate(new Date()),
        "comments": []
    }).then(async (e) => {
        result = await uploadImgs(e.id, img);
        if(result){
            await db.collection('users').doc(user)
            .update({
                posts: firebase.firestore.FieldValue.arrayUnion(e.id)
            });
        }
    })
    .catch((e) => { 
        result = false;
        console.log(e)
    });
   
    return result;
}

const uploadImgs = async (id, imgs) => {
    let result = false;
    let i = 0;
    await asyncForEach(imgs, async (img) => {
        await uploadImg('posts/'+id+'/'+i, img);
        i++;
        result = true;
    });

    return result;
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }