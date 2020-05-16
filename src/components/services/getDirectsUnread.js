import directs from 'components/directs.json'

export default function getDirectsUnread(user){
    var cant = 0;
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