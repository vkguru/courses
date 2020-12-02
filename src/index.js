import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Cart from './pages/cart';
import Checkout from  './pages/checkout';
import Success from './pages/success';
import SuccessTeam from './pages/teamSuccess';
import CourseBoard from './pages/courseBoard';
import CourseTwo from './pages/courseunit/courseTwo';
import CourseThree from './pages/courseunit/courseThree';
import CourseFour from './pages/courseunit/courseFour';
import Signup from './pages/sign-up';
import Login from './pages/login';
import Teams from './pages/teams'
import Provider from './pages/provider';
import NotFoundPage from './pages/notFound';
import TeamReg from './pages/teamReg';
import PayTeam from './pages/teamCheckOut';
import RegMembers from './pages/regMembers';
import teamsLogin from './pages/teamsLogin';
import testForm from './draft/testForm';
// import regMem from './pages/regMem';
import registeredTeam from './pages/registeredTeam';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/payment-success" component={Success} />
      <Route exact path="/course-board" component={CourseBoard} />
      <Route exact path="/course-board/2" component={CourseTwo} />
      <Route exact path="/course-board/3" component={CourseThree} />
      <Route exact path="/course-board/4" component={CourseFour} />
      <Route exact path="/teams" component={Teams} />
      <Route path="/register" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/provider" component={Provider} />
      <Route path="/success" component={Success} />
      <Route path="/success-teamreg" component={SuccessTeam} />
      <Route exact path="/teams/register" component={TeamReg} />
      <Route exact path="/teams/checkout" component={PayTeam} />
      <Route exact path="/teams/members-registration" component={RegMembers} />
      <Route exact path="/teams/login" component={teamsLogin} />
      <Route exact path="/teams/testform" component={testForm} />
      {/* <Route exact path="/teams/members" component={regMem} /> */}
      <Route exact path="/teams/registered-members" component={registeredTeam} />
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
