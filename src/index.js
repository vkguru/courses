import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Cart from './pages/cart';
import Checkout from  './pages/checkout';
import Success from './pages/success';
import CourseBoard from './pages/courseBoard';
import CourseTwo from './pages/courseunit/courseTwo';
import CourseThree from './pages/courseunit/courseThree';
import CourseFour from './pages/courseunit/courseFour';
import Signup from './pages/sign-up';
import Login from './pages/login';
import Teams from './pages/teams'
import Provider from './pages/provider';
import NotFoundPage from './pages/notFound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/payment-success" component={Success} />
      {/* { loggedUser && verCode? <Route path="/course-board" component={CourseBoard} /> :  <Route path="/login" component={Login} />} */}
      <Route exact path="/course-board" component={CourseBoard} />
      <Route exact path="/course-board/2" component={CourseTwo} />
      <Route exact path="/course-board/3" component={CourseThree} />
      <Route exact path="/course-board/4" component={CourseFour} />
      <Route path="/teams" component={Teams} />
      <Route path="/register" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/provider" component={Provider} />
      <Route path="/success" component={Success} />
      <Route path="" component={NotFoundPage} />
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
