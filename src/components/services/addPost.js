export default function addPost(id, img, user, verify, desc, postsContext, setPostsContext){
    var arr_posts = postsContext;
    arr_posts.push(
        {
            id,
            user,
            img,
            verify,
            desc,
            "likes": [],
            "time": new Date(),
            "comments": []
          }
    )
    setPostsContext(arr_posts);
}