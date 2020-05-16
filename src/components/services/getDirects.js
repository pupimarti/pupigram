import directs from 'components/directs.json'

export default function getDirects(user){
    for(var u of directs){
        if(u.user === user)
            return u;
    }
    return null;
}