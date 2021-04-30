import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { privateRouteList, publicRouteList } from './routeList';

const Routes = () => {
  var authenticated = false;

  if (localStorage.getItem('token')) {
    authenticated = true;
  }

  const publicRouteComponents = publicRouteList.map(
    ({ component: Component, path, exact, title }) => {
      document.title = title;

      return (
        <Route
          path={path}
          exact={exact}
          render={(props) => <Component {...props} />}
        />
      );
    },
  );

  const privateRouteComponents = privateRouteList.map(
    ({ component: Component, path, exact, title }) => {
      document.title = title;

      return (
        <Route
          path={path}
          exact={exact}
          render={(props) => <Component {...props} />}
        />
      );
    },
  );

  return (
    <BrowserRouter>
      <Switch>
        {authenticated ? (
          <>
            {privateRouteComponents}
            {/* <Redirect to="/profile" /> */}
          </>
        ) : (
          <>
            {publicRouteComponents}
            {/* <Redirect to="/login" /> */}
          </>
        )}
      </Switch>
    </BrowserRouter>
  );

}

export default Routes;