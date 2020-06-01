import React, {useContext} from "react";
import home from "./home.svg";
import homeSelect from "./home-select.svg";
import Notif from "./notifs/notif";
import search from "./search.svg";
/* import explore from "./explore.svg";
import exploreSelect from "./explore-select.svg"; */
import add from "./add.svg";
import { Link } from "react-router-dom";
import Directs from './directsIcon';
import "./css.css";
import Context from 'components/Context/AppContext';


export default function Buttons(props) {
  const path = props.path;

  const {profile} = useContext(Context);
  
  const handleChangeImage = (e) => {
    var file = []
    for(var f = 0; f < e.target.files.length; f++) 
      file.push(URL.createObjectURL(e.target.files[f]))
    props.setImg(file);
  }
  
  if(path.substr(0,8) === "/directs" && ( window.innerWidth <= 800 )) return null;

  const pathHome = props.pathHome;
  const pathDirect = props.pathDirect;
  const pathSearch = props.pathSearch;
  /* const pathExplore = props.pathExplore; */
  const pathAccount = "/" + profile.user;

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
      <label htmlFor="file-upload"><img className="icon" src={add} alt="Add" /></label>
        <input type="file" id="file-upload" multiple className="invisible" onChange={handleChangeImage}/>
      
      {/* <Link to={pathExplore} className="pc">
        <img
          className="icon pc"
          src={path === "/explore" ? exploreSelect : explore}
          alt="explore"
        />
      </Link> */}
      <Notif user="default" path={path} />
      <Link to={pathAccount}>
        <img className="icon-account" src={profile.picture} alt="Cuenta" />
      </Link>
    </div>
  );
}
