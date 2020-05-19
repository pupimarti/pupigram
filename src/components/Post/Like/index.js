import React, {useState, useEffect} from "react";
import "./css.css";
import heart from "img/heart.svg";
import heartSelected from "img/heart-selected.svg";

export default function Like(props) {

    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        const hasAnimate = () => {
            if(props.like === 'true' || props.like === 'false')
                return false;
            return true;
        }
        setAnimation(hasAnimate());
    }, [props])


    const isLike = () => {
        if(props.like === 'true' || props.like === true)
            return true;
        return false;
    }

    const handleClickLike = () => {
        if(isLike())
            props.setlike(false);
        else
            props.setlike(true);
    }

    const getClassName = () => {
        var className = "action";
        if(isLike())
            className += " like-selected"
        if(animation)
            className += " like-animation"
        return className;
    }

    return(
        <img
            className={getClassName()}
            onClick={handleClickLike}
            src={isLike() ? heartSelected : heart}
            onAnimationEnd={() => setAnimation(false)}
            alt="heart"
        />
    )
}
