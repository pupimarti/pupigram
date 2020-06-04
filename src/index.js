import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import firebase from "firebase";
import { FirebaseAppProvider } from "reactfire";
import configFb from "firebase-config";

import { AppContextProvider } from "components/Context/AppContext";

import "./index.css";
import App from "./App";

import Loading from "components/Loading";
import newPost from "components/services/newPost";

firebase.initializeApp(configFb);

newPost();

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={configFb}>
      <Suspense fallback={<Loading allpage />}>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
