import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import ScrollToTop from "utilities/scrollTop";
import HomeView from "views/Home";
import MindsetsView from "views/Mindsets";
import Appendiex from "views/Appendix";

import "./styles/globals.css";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={null}>
        <ScrollToTop />
        <Switch>
          <Route exact path={`/mindsets/:id`} component={MindsetsView} />
          <Route exact path={`/appendix`} component={Appendiex} />
          <Route component={HomeView} />
          {/* <Route
            render={() => <Redirect to={`/`} />}
          /> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
