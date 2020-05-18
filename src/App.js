import React, { useState } from "react";
import NavBar from "./components/NavBar";
import List from "./components/List";
import User from "./components/User";
import PostId from "./components/PostId";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import JavascriptTimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es";
import NoPage from "./components/NoPage";
import CommentsPost from "./components/CommentsPost";
import MobileNotif from "./components/MobileNotif";
import { AppContextProvider } from "components/Context/AppContext";
import ViewFollows from "components/ViewFollows";
import Directs from "components/Directs/index";
import AddPost from "components/AddPost";

JavascriptTimeAgo.locale(es);

function App() {
  const [mode, setMode] = useState(
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      false
  );
  const handleChangeMode = () => {
    setMode(!mode);
  };

  const [newPost, setNewPost] = useState(null);
  const handleSetImgNewPost = (img) => {
    setNewPost(img);
  };

  return (
    <div className={mode ? "dark" : "light"}>
      <AppContextProvider>
        <HashRouter basename="/">
          {newPost !== null ? (
            <div className="content-app">
              <div className="app">
                <AddPost setImg={handleSetImgNewPost} img={newPost} />
              </div>
            </div>
          ) : (
            <React.Fragment>
              <NavBar setImg={handleSetImgNewPost} setMode={handleChangeMode} />
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
                    <Route exact path="/:user" component={User} />
                    <Route exact path="/" component={List} />
                  </Switch>
                  <p className="footer">
                    © 2020 PUPIGRAM DESARROLLADO POR{" "}
                    <a href="www.google.com">JUAN A. MARTÍ</a>
                  </p>
                </div>
              </div>
            </React.Fragment>
          )}
        </HashRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
