import React, { useState, useContext } from "react";
import NavBar from "./components/NavBar";
import List from "./components/List";
import User from "./components/User";
import PostId from "./components/PostId";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import JavascriptTimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es";
import NoPage from "./components/NoPage";
import CommentsPost from "./components/CommentsPost";
import MobileNotif from "./components/MobileNotif";
import ViewFollows from "components/ViewFollows";
import Directs from "components/Directs/index";
import AddPost from "components/AddPost";
import Login from "components/Login";
import { useUser } from "reactfire";
import firebase from "firebase/app";
import getUserMail from "components/services/getUserMail";
import SignUp from "components/SignUp";
import Loading from "components/Loading";
import Context from 'components/Context/AppContext';
import getImgUser from "components/services/getImgUser";
import EditProfile from "components/EditProfile";
/*  import syncronicUsers from "components/services/syncronicUsers";  */
import 'react-notifications/lib/notifications.css';

JavascriptTimeAgo.locale(es);

function App() {
  const [mode, setMode] = useState(
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      false
  );
  const handleChangeMode = () => setMode(!mode);

  
  const {profile, setProfile} = useContext(Context);

  /*  syncronicUsers();  */


  const [newPost, setNewPost] = useState(null);
  const handleSetImgNewPost = (img) => setNewPost(img);

  const [user, setUser] = useState(useUser());

  const handleSetUser = (u) => {
    setProfile(null);
    setUser(u);
  }


  const handleLogoutUser = () => {
    firebase.auth().signOut();
    setUser(null);
    setProfile(null);
  };

  const getAccount = async () => {
    setLoading(true);
    const account = await getUserMail(user.email);
    if (!account) {
      setLoading(false);
      setProfile("none");
    } else {
      const img = await getImgUser(account.user);
      setProfile({
        ...account.data,
        user: account.user,
        picture: img
      });
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);


  if (loading) return <Loading allpage />;
  if (!user || !profile || profile === "none") {
     if (user && !profile) getAccount();  
    return (
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/login">
              <Login user={user} setUser={handleSetUser} setProfile={setProfile} />
            </Route>
            <Route exact path="/signup">
              <SignUp user={user} setUser={handleSetUser} setProfile={setProfile} />
            </Route>
            <Redirect to="/login" />
          </Switch>
        </HashRouter>
    );
  }

  return (
    <div className={mode ? "dark" : "light"}>
        <HashRouter basename="/">
          {newPost !== null ? (
            <div className="content-app">
              <div className="app">
                <AddPost setImg={handleSetImgNewPost} img={newPost} />
              </div>
            </div>
          ) : (
            <React.Fragment>
              <NavBar
                setImg={handleSetImgNewPost}
                setMode={handleChangeMode}
              />
              <div className="content-app">
                <div className="app">
                  <Switch>
                    <Route exact path="/addPost" component={AddPost} />
                    <Route
                      exact
                      path="/notifications"
                      component={MobileNotif}
                    />
                    <Route
                      exact
                      path="/comments/:id"
                      component={CommentsPost}
                    />
                    <Route exact path="/search">
                      <NoPage construction />
                    </Route>
                    <Route exact path="/explore">
                      <NoPage construction />
                    </Route>
                    <Route exact path="/directs">
                      <Directs />
                    </Route>
                    <Route exact path="/likes/:id">
                      <ViewFollows likes />
                    </Route>
                    <Route exact path="/posts/:id" component={PostId} />
                    <Route exact path="/follows/:user">
                      <ViewFollows follows />
                    </Route>
                    <Route exact path="/followers/:user">
                      <ViewFollows followers />
                    </Route>
                    <Route exact path="/login">
                      <Redirect to="/" />
                    </Route>
                    <Route exact path="/signup">
                      <Redirect to="/" />
                    </Route>
                    <Route exact path="/account/edit">
                      <EditProfile />
                    </Route>
                    <Route exact path="/:user">
                      <User handleLogoutUser={handleLogoutUser}/>  
                    </Route>
                    <Route exact path="/" component={List} />
                  </Switch>
                  <p className="footer">
                    © 2020 PUPIGRAM DESARROLLADO POR{" "}
                    <a
                      href="https://www.linkedin.com/in/pupimarti/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      JUAN A. MARTÍ
                    </a>
                  </p>
                </div>
              </div>
            </React.Fragment>
          )}
        </HashRouter>
    </div>
  );
}

export default App;
