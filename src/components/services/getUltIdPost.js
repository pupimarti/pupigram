export default function getUltIdPost(posts){
    if(posts !== null && posts.length > 0){
        return posts[posts.length - 1].id
    }
    return 0;
}