import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import ScrollToTop from "utilities/scrollTop";
import HomeView from "views/Home";
import MindsetsView from "views/Mindsets";
import Appendiex from "views/Appendix";

import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/mindsets/:id" component={MindsetsView} />
          <Route exact path="/appendix" component={Appendiex} />
          <Route render={() => <Redirect to="/404" />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

const lazyLoad = (path: string) => {
  return React.lazy(() => import(`${path}`));
};

export default App;
