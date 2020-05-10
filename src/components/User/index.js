import React from "react";
import verify from "../../img/verify.svg";
import "./css.css";

export default function User() {
  return (
    <div>
      <header className="header-user">
        <div className="content-perfil-img">
          <img
            className="perfil-img"
            src="https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-19/s150x150/43818140_2116018831763532_3803033961098117120_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_ohc=6db8qi4phwQAX-MThZZ&oh=b506e9a72d15d64ff278666f9e5eb296&oe=5EDFBD8A"
            alt="perfil_picture"
          />
        </div>
        <div className="content-info-user">
          <div className="info-user">
            <h2 className="username-user">leomessi</h2>
            <img className="verify" src={verify} alt="verify" />
            <div className="points">
              <div className="point"></div>
              <div className="point"></div>
              <div className="point"></div>
            </div>
          </div>
          <div className="info-user stats">
              <p className="stats-user"><b>585</b> publicaciones</p>
              <p className="stats-user"><b>150mmm</b> seguidores</p>
              <p className="stats-user"><b>229</b> seguidos</p>
          </div>
        <div>
            <h4 className="username-name">Leo Messi</h4>
            <p className="description-user">Bienvenidos a la cuenta oficial de Instagram de Leo Messi / Welcome to the official Leo Messi Instagram account</p>
            <a className="web-user" href="www.messi.com">messi.com</a>
          </div>
        </div>
      </header>
    </div>
  );
}
