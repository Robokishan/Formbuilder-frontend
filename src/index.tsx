import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/scss/argon-dashboard-react.scss';
import 'leaflet/dist/leaflet.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Protectedroute from './utils/Auth/Protected';
import AdminLayout from './layouts/Admin';
import AuthLayout from './layouts/Auth';
import './style.css';
import 'react-form-builder2/dist/app.css';
import 'react-toastify/dist/ReactToastify.css';
import Public from './layouts/Public';
import Registration from './views/v1/Registration';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Provider store={store}>
        <ToastContainer hideProgressBar />
        <Protectedroute path="/admin" component={AdminLayout} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/public" render={(props) => <Public {...props} />} />
        <Route path="/" exact render={(props) => <Registration {...props} />} />
        {/* <Redirect exact path="/"  to="/admin/forms" /> */}
      </Provider>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
