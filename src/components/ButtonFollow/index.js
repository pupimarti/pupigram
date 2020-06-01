import React, {useState, useEffect} from 'react';
import './css.css'
import Loading from 'components/Loading';
import addFollow from 'components/services/addFollow';
import unfollow from 'components/services/unfollow';
import getUser from 'components/services/getUser';

export default function ButtonFollow(props) {
    const [follow, setFollow] = useState(null);

    useEffect(() => {
        const isFollowing = async () => {
            const user = await getUser(props.user);
            let isfollow = false;
            if(user.follows.length > 0){
                for(let i = 0; i < user.follows.length; i++){
                    if(user.follows[i] === props.user_follow)
                     isfollow = true;
                }
            }
            setFollow(isfollow);
        }
    
        if(follow === null)
            isFollowing();

    }, [props, follow])

    
    const handleSetFollow = async () => {
        let result = null;
        let actual = follow;
        setFollow('loading');
        if(!actual)
            result = await addFollow(props.user, props.user_follow);
        else
            result = await unfollow(props.user, props.user_follow);

        if(result){
            props.setFollowers(!actual);
            setFollow(!actual);
        }
    }

    if(props.user_follow === props.user) return null;

    if(follow === null || follow === 'loading')
        return <button className="button unfollow"><Loading /></button>
  
    if(follow === true)
        return <button onClick={handleSetFollow} className="button unfollow no-select">Siguiendo</button>
    else{
        return <button onClick={handleSetFollow} className="button follow no-select">Seguir</button>
    }
            
}
