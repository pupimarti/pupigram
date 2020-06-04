import React from 'react'
import './css.css'

export default function Loading(props) {

    if(props.allpage) return(
        <div className="content-loading content-loading-allpage">
            <div className="loadingio-spinner-spinner-0weqdade60oe"><div className="ldio-wghgll2tit8">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div></div>
        </div>
    )
    return (
        <div className="content-loading">
            <div className="loadingio-spinner-spinner-0weqdade60oe"><div className="ldio-wghgll2tit8">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div></div>
        </div>
    )
}
