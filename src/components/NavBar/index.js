import React from "react";
import pupigram from "img/pupigram.png";
import Buttons from "./Buttons";
import SwitchMode from "./SwitchMode";
import Direct from "./Buttons/directsIcon";
import { Link, useLocation } from "react-router-dom";
import "./css.css";

export default function NavBar(props) {
  const path = useLocation().pathname;

  
  if (path.substr(0, 9) === "/comments") return null;


  const pathHome = "/";
  const pathDirect = "/directs";
  const pathSearch = "/search";
  const pathExplore = "/explore";
  const pathAccount = "/default";

  return (
    <div className="content-navBar">
      <div className="content-app navbar no-select">
        <Direct path={path} pathDirect={pathDirect} />
        <Link to="/" className="c-logo">
          <img className="logo" src={pupigram} alt="logo" />
        </Link>
        <SwitchMode setMode={props.setMode} />
        <Buttons 
        path={path}
        pathHome={pathHome}
        pathDirect={pathDirect}
        pathSearch={pathSearch}
        pathExplore={pathExplore}
        pathAccount={pathAccount}
        setImg={props.setImg}
        handleLogoutUser={props.handleLogoutUser}
        />
      </div>
    </div>
  );
}
