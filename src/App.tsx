import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import ScrollToTop from "utilities/scrollTop";
import HomeView from "views/Home";
import MindsetsView from "views/Mindsets";
import Appendiex from "views/Appendix";

import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={null}>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={HomeView} />
          <Route path="/mindsets/:id" component={MindsetsView} />
          <Route path="/appendix" component={Appendiex} />
          {/* <Route render={() => <Redirect to="/" />} /> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

const lazyLoad = (path: string) => {
  return React.lazy(() => import(`${path}`));
};

export default App;
