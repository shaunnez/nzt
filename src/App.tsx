import React, { Suspense } from "react";
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect,
  HashRouter,
} from "react-router-dom";
import ScrollToTop from "utilities/scrollTop";
import HomeView from "views/Home";
import MindsetsView from "views/Mindsets";
import Appendiex from "views/Appendix";

import "./styles/globals.css";

function App() {
  return (
    <HashRouter basename="/">
      <Suspense fallback={null}>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={HomeView} />
          <Route path="/mindsets/:id" component={MindsetsView} />
          <Route path="/appendix" component={Appendiex} />
          <Route render={() => <Redirect to="/404" />} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

const lazyLoad = (path: string) => {
  return React.lazy(() => import(`${path}`));
};

export default App;
