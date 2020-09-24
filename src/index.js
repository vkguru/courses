import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Cart from './pages/cart';
import Checkout from  './pages/checkout';
import Success from './pages/success';
import CourseBoard from './pages/courseBoard';
import Signup from './pages/sign-up';
import Login from './pages/login';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/payment-success" component={Success} />
      <Route path="/course-board" component={CourseBoard} />
      <Route path="/register" component={Signup} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
