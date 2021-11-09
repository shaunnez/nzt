import { Route, Switch, HashRouter } from "react-router-dom";
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
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path={`/mindsets/:id`} component={MindsetsView} />
          <Route exact path={`/appendix`} component={Appendiex} />
          <Route component={HomeView} />
        </Switch>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
