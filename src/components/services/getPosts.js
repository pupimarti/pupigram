/* import posts from 'components/posts.json' */

export default function getPosts(posts, user){
    var arr_posts = [];
    for(var p of posts){
        if(user){
            if(p.user === user)
                arr_posts.push(p);
            }
        else
            arr_posts.push(p);
    }
    return arr_posts;
}