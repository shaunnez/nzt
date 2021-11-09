import { Route, Switch, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import ScrollToTop from "utilities/scrollTop";
import HomeView from "views/Home";
import MindsetsView from "views/Mindsets";
import Appendiex from "views/Appendix";

// import "./styles/base.css";
import "./styles/reset.css";
import "./styles/font.css";
import "./styles/globals.css";

const queryClient = new QueryClient();

function App() {
  let basename = process.env.PUBLIC_URL;
  if (window.location.href.indexOf("insights") > -1) {
    basename = "/int/mindsets-/";
  }
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={basename}>
        {window.location.href.indexOf("#") === -1 ? <ScrollToTop /> : null}
        <Switch>
          <Route exact path={`/mindsets/:id`} component={MindsetsView} />
          <Route exact path={`/appendix`} component={Appendiex} />
          <Route component={HomeView} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
