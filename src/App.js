import React, { Suspense } from 'react';
import Login from './modules/login/login';
import Home from '../src/modules/home/Home';
import OrderLayout from '../src/modules/OrderLayout';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from './modules/DefaultLayout';
import Page404 from './modules/Page404/index';
import Loading from './components/Loading/Loading';
import Sonido from './modules/sonido/index';
import Pago from './modules/pago/index';
import Provider from '../src/components/Provider/index'
import StepProvider from '../src/components/ProviderStep/index'
import ProfileUser from './modules/Profile/ProfileUser';
import './index.scss';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/login" exact={true} component={Login} ></Route>

        <DefaultLayout>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/profile" exact={true} component={ProfileUser}></Route>

          <StepProvider>
            <Provider>
              <Route path="/order" exact={true} component={OrderLayout}></Route>
            </Provider>
          </StepProvider>


        </DefaultLayout>
        <Route component={Page404}></Route>

      </Switch>
    </Router>

  );
}

export default App;
