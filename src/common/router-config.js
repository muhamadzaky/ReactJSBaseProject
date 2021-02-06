import App from "../components/App";
import ReactDefaultPage from "../components/ReactDefault/ReactDefaultPage";
import ReactHooksExample from "../components/ReactDefault/ReactHooksExample";
import TestPrivatePage from "../components/ReactDefault/TestPrivatePage";
import TestPublicPage from "../components/ReactDefault/TestPublicPage";
import PrivateRoute from "../components/Route/PrivateRoute";

const baseUrl = "http://localhost:3000/";

const routeSources = [
  {
    component: PrivateRoute,
    path: "/",
    child: [
      { component: TestPrivatePage, path: "/PrivateRouteExample", exact: true },
      { component: ReactDefaultPage, path: "/", exact: true },
      { component: ReactHooksExample, path: "/ReactHooksExample", exact: true },
      { component: TestPublicPage, path: "/PublicRouteExample", exact: true }
    ]
  },
  {
    component: 
  }
  
]

export default routeSources;