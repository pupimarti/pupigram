import directs from 'components/directs.json'

export default function setDirectsRead(user){
    for(var u of directs){
        if(u.user === user){
            for(var d of u.directs){
                if(!d.read)
                    cant++;
            }
            return cant;
        }
    }
    return null;
}