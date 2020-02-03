import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import MovieList from "./Movie/List";
import MovieDetails from "./Movie/Details";

export default function Body({trigger}) {
  return <div>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/movies/:title" component={MovieDetails}/>
        <Route path="/movies-list" component={MovieList}/>
      </Switch>
    <button onClick={() => trigger("Titi")}>Change Name</button>
  </div>
}
