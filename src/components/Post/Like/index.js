import React, {useState} from 'react';
import './css.css';
import heart from '../../../img/heart.svg';
import heartSelected from './heart-selected.svg';

export default function Like(props) {
    const [like, setlike] = useState(null)
    
    if(props.likeImg !== null && !like) setlike(true);
    
    if(like) return <img className="like action like-selected" onClick={() => setlike(false)} src={heartSelected} alt="heart"/>

    return <img className={like !== null ?"action dislike":"action"} onClick={() => setlike(true)} src={heart} alt="heart"/>

}
