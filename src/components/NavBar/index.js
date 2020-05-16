import React from "react";
import pupigram from "./pupigram.png";
import Buttons from "./Buttons";
import SwitchMode from "./SwitchMode";
import Direct from "./Buttons/directs";
import { Link, useLocation } from "react-router-dom";
import "./css.css";

export default function NavBar(props) {
  const path = useLocation().pathname;

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
        />
      </div>
    </div>
  );
}
