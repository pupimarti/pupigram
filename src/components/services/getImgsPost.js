import firebase from "firebase";
import "firebase/storage";

export default async function getImgsPost(post) {
  let return_img = null;
  const storage_imgs = localStorage.getItem("img_posts");
  let img_posts = JSON.parse(storage_imgs);
  if (
    img_posts &&
    img_posts.forEach((p) => {
      if (p.post === post) {
        return_img = p.urls;
        return;
      }
    })
  );
  if (!return_img) {
    const storage = firebase.storage();
    await storage
      .ref("posts/" + post)
      .listAll()
      .then(async function (res) {
        let imgs = await getUrls(res.items);
        const post_imgs = { post, urls: imgs };
        const storage_imgs = localStorage.getItem("img_posts");
        let img_posts = JSON.parse(storage_imgs);
        if (!img_posts) img_posts = [];
        img_posts.push(post_imgs);
        localStorage.setItem("img_posts", JSON.stringify(img_posts));
        console.log('retorno de busuqeda')
        return_img = imgs;
      })
      .catch(function (error) {
        console.log("no se encontraron las imagenes del post");
        console.log(error);
        return_img = null;
      });
  }
  return return_img;
}

const getUrls = async (items) => {
  let return_urls = [];

  await asyncForEach(items, async function (itemRef) {
    // All the items under listRef.
    await itemRef
      .getDownloadURL()
      .then((e) => {
        return_urls.push(e);
      })
      .catch((e) => console.log(e));
  });

  return return_urls;
};

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
