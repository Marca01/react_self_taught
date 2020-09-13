import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import AddEdit from "./pages/AddEdit";
import NotFound from "components/NotFound";

function Photo(props) {
  const match = useRouteMatch();
  console.log({ match });
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path={`${match.url}/add`} component={AddEdit} />
      <Route path={`${match.url}/:photoId`} component={AddEdit} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Photo;
