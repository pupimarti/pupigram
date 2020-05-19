import React, { useState, useContext } from "react";
import postsContext from 'components/Context/AppContext';

import "./css.css";
import addPost from "components/services/addPost";
import getUltIdPost from "components/services/getUltIdPost";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function AddPost(props) {
  const [page, setPage] = useState(0);
  const [desc, setDesc] = useState('');

  const handleBack = () => {
    if (page === 0) props.setImg(null);
    else setPage(0);
  };

  const {posts, setPosts} = useContext(postsContext);

  const handleSig = () => {
    if (page === 0) setPage(1);
    else{
        const id = getUltIdPost(posts) + 1;
        addPost(id, props.img, "default", desc, posts, setPosts);
        props.setImg(null);
    }
  };


  return (
    <div className="content-add-post">
      <header className="content-header-add-post">
        <div className="chat-back" onClick={handleBack}></div>
        <h5>Nueva publicación</h5>
        <button onClick={handleSig} className="action-comment">
          {page === 0 ? "Siguiente" : "Compartir"}
        </button>
      </header>
      {page === 0 ? (
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
      ) : (
        <div className="content-desc-new-post">
          <img
            src="https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_ohc=Jf9Z_lzbyhIAX8Goisq&oh=a40f9aed80ddfc70f97243fbb84d4611&oe=5EE4368F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
            className="img-user-add-post"
            alt="Tu imagen de perfil"
          />
          <textarea
            className="text-add-post"
            placeholder="Escribe un pie de foto..."
            onChange={e => setDesc(e.target.value)}
            value={desc}
          />
          <img
            className="img-post-add-post"
            src={props.img[0]}
            alt="La imagen del post"
          />
        </div>
      )}
    </div>
  );
}
