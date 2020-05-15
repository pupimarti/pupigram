export default function setPost(post, posts, setPostContext){
    var arr_posts = posts;
    for(var u of arr_posts){
        if(u === post){
            u = post;
            setPostContext(arr_posts);
            return true;
        }
    }
    return false;
}