/* import posts from 'components/posts.json' */

export default function getPost(id, posts){
    for(var p of posts){
        if(p.id === id)
            return p;
    }
    return null;
}