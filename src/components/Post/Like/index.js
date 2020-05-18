import React from 'react';
import './css.css';
import heart from '../../../img/heart.svg';
import heartSelected from '../../../img/heart-selected.svg';

export default function Like(props) {
    
    if(props.like === 'true') return <img className="action like-selected" onClick={() => props.setlike(false)} src={heartSelected} alt="heart"/>
    
    if(props.like === 'false') return <img className="action" onClick={() => props.setlike(true)} src={heart} alt="heart"/>

    if(props.like) return <img className="like action like-selected" onClick={() => props.setlike(false)} src={heartSelected} alt="heart"/>

    return <img className={"action dislike"} onClick={() => props.setlike(true)} src={heart} alt="heart"/>

}
