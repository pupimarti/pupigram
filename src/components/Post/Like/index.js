import React, {useState} from 'react';
import './css.css';
import heart from '../../../img/heart.svg';
import heartSelected from './heart-selected.svg';

export default function Like() {
    const [like, setlike] = useState(false)

    if(like) return <img className="like action like-selected" onClick={() => setlike(false)} src={heartSelected} alt="heart"/>

    return <img className="action dislike" onClick={() => setlike(true)} src={heart} alt="heart"/>

}
