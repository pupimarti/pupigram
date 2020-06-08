export default function deleteImgUserStorage(user){
  const storage_users = localStorage.getItem("img_users");
  let new_array = [];
  let img_users = JSON.parse(storage_users);
  if (img_users){
    img_users.forEach((u) => {
      if (u.user !== user) 
          new_array.push(u);
    });
    localStorage.setItem("img_users", JSON.stringify(new_array));
}
}