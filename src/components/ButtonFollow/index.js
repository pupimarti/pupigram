import React, {useState, useContext, useEffect} from 'react';
import UserContext from 'components/Context/AppContext';
import './css.css'
import getUser from 'components/services/getUser';
import setUser from 'components/services/setUser';
import Loading from 'components/Loading';

export default function ButtonFollow(props) {

    const {users, setUsers} = useContext(UserContext);

    const [follow, setFollow] = useState(null);

    useEffect(() => {
        const isFollowing = () => {
            for(let u of users){
                if(u.user === props.user){
                    if(u.follows.length > 0){
                        for(let i = 0; i < u.follows.length; i++){
                            if(u.follows[i] === props.user_follow)
                                return true;
                        }
                        return false;
                    }else{
                        return false;
                    }
                };
            }
            return false;
        }
    
        setFollow(isFollowing);
    }, [props, users])

    
    const handleSetFollow = () => {
        const user = getUser(props.user, users);
        const user_follow = getUser(props.user_follow, users);
        if(user !== null && user_follow !== null){
            if(!follow){
                user.follows.push(props.user_follow);
                user_follow.followers.push(props.user);
            }else{
                var i = user.follows.indexOf(props.user_follow);
                if ( i !== -1 ) 
                    user.follows.splice( i, 1 );
                i = user_follow.followers.indexOf(props.user);
                if ( i !== -1 ) 
                user_follow.followers.splice( i, 1 );
            }
            if(setUser(user, users, setUsers) && setUser(user_follow, users, setUsers)){
                if(props.setFollowers)
                    props.setFollowers(!follow);
                setFollow(!follow);
            }
        }
    }
    
    if(props.user_follow === props.user) return null;

    if(follow === null)
        return <button className="button unfollow"><Loading /></button>
  
    if(follow === true)
        return <button onClick={handleSetFollow} className="button unfollow no-select">Siguiendo</button>
    else{
        return <button onClick={handleSetFollow} className="button follow no-select">Seguir</button>
    }
            
}
