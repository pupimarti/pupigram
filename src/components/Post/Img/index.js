import React, {useState, useEffect} from 'react';
import heart from "img/heart-selected.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './css.css';
import getImgsPost from 'components/services/getImgsPost';
import Loading from 'components/Loading';

export default function Img(props) {

    const [imgs, setImgs] = useState('loading');

    useEffect(() => {
      const get_imgs = async () => {
          const the_imgs = await getImgsPost(props.post);
          console.log(the_imgs);
          setImgs(the_imgs);
      }

      if(imgs === 'loading')
        get_imgs();

    }, [imgs, props.post])

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
      {imgs === 'loading'
      ? <Loading />
      : <Carousel showIndicators={imgs && imgs.length > 1} emulateTouch={true} swipeable={true} showThumbs={false} showStatus={false}>
      {imgs && imgs.map((img, i) => 
          <div key={i} className="content-img">
          <img
            className="img-post"
            src={img}
            alt="Imagen de la publicación"
          />
      </div>
      )}
    </Carousel>}
    </div>
    )
}
