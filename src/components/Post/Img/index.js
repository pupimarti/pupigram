import React from 'react';
import heart from "img/heart-selected.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './css.css';

export default function index(props) {
    return (
      <div className="content-img-post" onDoubleClick={props.handleClickLikeImg}>
      {props.likeImg !== null &&
        (props.likeImg ? (
          <img
            className="like-img-post animation-like"
            src={heart}
            alt="corazon"
          />
        ) : (
          <img
            className="like-img-post animation-like1"
            src={heart}
            alt="corazon"
          />
        ))}
      <Carousel emulateTouch={true} showThumbs={false}>
          <div className="content-img">
              <img
                onDoubleClick={props.handleClickLikeImg}
                className="img-post"
                src={props.img}
                alt="postimg"
              />
          </div>
          <div>
              <img
                onDoubleClick={props.handleClickLikeImg}
                className="img-post"
                src={props.img}
                alt="postimg"
              />
          </div>
          <div>
              <img
                onDoubleClick={props.handleClickLikeImg}
                className="img-post"
                src={props.img}
                alt="postimg"
              />
          </div>
          <div>
              <img
                onDoubleClick={props.handleClickLikeImg}
                className="img-post"
                src={props.img}
                alt="postimg"
              />
          </div>
          <div>
              <img
                onDoubleClick={props.handleClickLikeImg}
                className="img-post"
                src={props.img}
                alt="postimg"
              />
          </div>
      </Carousel>
    </div>
    )
}
