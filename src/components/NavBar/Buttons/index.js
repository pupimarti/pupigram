import React from "react";
import home from "./home.svg";
import homeSelect from "./home-select.svg";
import Notif from "./notifs/notif";
import search from "./search.svg";
import explore from "./explore.svg";
import exploreSelect from "./explore-select.svg";
import add from "./add.svg";
import account from "./account.svg";
import { Link } from "react-router-dom";
import Directs from './directs';
import "./css.css";


export default function Buttons(props) {
  const path = props.path;

  
  if(path.substr(0,8) === "/directs" && ( window.innerWidth <= 800 )) return null;

  const pathHome = props.pathHome;
  const pathDirect = props.pathDirect;
  const pathSearch = props.pathSearch;
  const pathExplore = props.pathExplore;
  const pathAccount = props.pathAccount;

  return (
    <div className="content-buttons">
      {path === pathHome ? (
        <img className="icon" src={homeSelect} alt="Home" />
      ) : (
        <Link to={pathHome}>
          <img className="icon" src={home} alt="Home" />
        </Link>
      )}
      <Directs pc={true} path={path} pathDirect={pathDirect} />
      <Link to={pathSearch}>
        <img className="icon mobile" src={search} alt="Search" />
      </Link>
      <img className="icon mobile" src={add} alt="Add" />
      <Link to={pathExplore} className="pc">
        <img
          className="icon pc"
          src={path === "/explore" ? exploreSelect : explore}
          alt="explore"
        />
      </Link>
      <Notif user="default" path={path} />
      <Link to={pathAccount}>
        <img className="icon" src={account} alt="Cuenta" />
      </Link>
    </div>
  );
}
