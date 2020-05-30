import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import firebase from "firebase";
import { FirebaseAppProvider } from "reactfire";
import configFb from "firebase-config";

import "./index.css";
import App from "./App";

import Loading from "components/Loading";

firebase.initializeApp(configFb);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={configFb}>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
