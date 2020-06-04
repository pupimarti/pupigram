import firebase from 'firebase';
import 'firebase/storage';

export default async function getImgsPost (post){
    let return_img = [];

    const storage = firebase.storage();
    await storage.ref('posts/'+post).listAll()
    .then(async function(res) {
        let imgs = await getUrls(res.items);
        return_img = imgs;
    })
    .catch(function(error) {
        console.log('no se encontraron las imagenes del post')
        console.log(error);
        return_img = null;
    });

    console.log(return_img);
    return return_img;
}


const getUrls = async (items) => {
    let return_urls = [];

    await asyncForEach(items, async function(itemRef) {
        // All the items under listRef.
        await itemRef.getDownloadURL()
        .then((e) => {
            console.log(e);
            return_urls.push(e);
        })
        .catch((e) => console.log(e))
      });

    return return_urls;
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }