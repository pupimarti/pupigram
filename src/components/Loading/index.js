import React from 'react'
import './css.css'

export default function Loading(props) {


    const classname = () => {
        let return_class = "content-loading";
        if(props.allpage) return_class+= " content-loading-allpage"
        if(props.dark) return_class+= " dark-loading"
        return return_class;
    }

    return(
        <div className={classname()}>
            <div className="loadingio-spinner-spinner-0weqdade60oe"><div className="ldio-wghgll2tit8">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div></div>
        </div>
    )
}
