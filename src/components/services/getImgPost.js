export default function getImgPost(id, posts){
    for(var p of posts){
        if(p.id === id)
            return p.img;
    }
    return null;
}