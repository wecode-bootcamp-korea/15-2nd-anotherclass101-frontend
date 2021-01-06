import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main/Main';
import Mypage from './Pages/Mypage/Mypage';
import Creator from './Pages/Creator/Creator';
import Auth from './Pages/Auth/Auth';
import Detail from './Pages/Detail/Detail';
import Kids from './Pages/Kids/Kids';
const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Creator" component={Creator} />
        <Route exact path="/Mypage" component={Mypage} />
        <Route exact path="/Auth" component={Auth} />
        <Route exact path="/Detail" component={Detail} />
        <Route exact path="/Kids" component={Kids} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default Routes;
