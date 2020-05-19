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
      <Carousel showIndicators={props.img && props.img.length > 1} emulateTouch={true} swipeable={true} showThumbs={false} showStatus={false}>
          {props.img && props.img.map((img, i) => (
              <div key={i} className="content-img">
              <img
                className="img-post"
                src={img}
                alt="Imagen de la publicación"
              />
          </div>
          ))}
      </Carousel>
    </div>
    )
}
