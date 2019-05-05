import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./pages/app/App";
import Game from "./pages/game/Game";
import Navbar from "./pages/app/components/navbar/Navbar";

function NotFound() {
  return <p>Not Found</p>;
}

function AppRouter() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/games/:slug" component={Game} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default AppRouter;
