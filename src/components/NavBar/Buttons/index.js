import React from "react";
import home from "./home.svg";
import homeSelect from "./home-select.svg";
import Notif from "./notif";
import direct from "./direct.svg";
import search from "./search.svg";
import explore from "./explore.svg";
import exploreSelect from "./explore-select.svg";
import add from "./add.svg";
import account from "./account.svg";
import { Link, useLocation } from "react-router-dom";
import "./css.css";


export default function Buttons() {
  const path = useLocation().pathname;
  if (path.substr(0, 9) === "/comments") return null;

  const pathHome = "/";
  const pathDirect = "/directs";
  const pathSearch = "/search";
  const pathExplore = "/explore";
  const pathAccount = "/default";

  return (
    <div className="content-buttons">
      {path === pathHome ? (
        <img className="icon" src={homeSelect} alt="Home" />
      ) : (
        <Link to={pathHome}>
          <img className="icon" src={home} alt="Home" />
        </Link>
      )}
      <Link to={pathDirect} className="pc">
        <img className="icon pc" src={direct} alt="Direct" />
      </Link>
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
