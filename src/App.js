import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./routes/Home/Home";
import Popular from "./routes/Popular/Popular";
import TopRated from "./routes/TopRated/TopRated";
import NowShowing from "./routes/NowShowing/NowShowing";
import UpComing from "./routes/UpComing/UpComing";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/popular" component={Popular} />
        <Route path="/top-rated" component={TopRated} />
        <Route path="/now-showing" component={NowShowing} />
        <Route path="/up-coming" component={UpComing} />
      </Switch>
    </Router>
  );
}

export default App;
