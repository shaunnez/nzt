import React, { Suspense } from "react";
import {
  Route,
  Switch,
  BrowserRouter,
  HashRouter,
  Redirect,
} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ScrollToTop from "utilities/scrollTop";
import HomeView from "views/Home";
import MindsetsView from "views/Mindsets";
import Appendiex from "views/Appendix";

import "./styles/globals.css";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={null}>
        <ScrollToTop />
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} component={HomeView} />
          <Route
            path={`${process.env.PUBLIC_URL}/mindsets:id`}
            component={MindsetsView}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/appendix`}
            component={Appendiex}
          />
          {/* <Route render={() => <Redirect to="/" />} /> */}
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

const lazyLoad = (path: string) => {
  return React.lazy(() => import(`${path}`));
};

export default App;
