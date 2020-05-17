/* import directs from 'components/directs.json' */

export default function setDirectsRead(user, user_direct, directs, setDirectsContext){
    const arr_directs = directs;
    for(var u of arr_directs){
        if(u.user === user){
            for(var d of u.directs){
                if(d.user === user_direct){
                    d.read = true;
                    setDirectsContext(arr_directs);
                    return true;
                }
            }
        }
    }
    return false;
}