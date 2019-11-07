import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './pages/Home';
import { LoginPage } from './pages/Login';
import AdminDashboard from './Components/Admin/Dashboard/AdminDashboard/Dashboard';
import { GalleryPage } from './pages/Gallery';
import { ContactPage } from './pages/ContactPage';

class App extends Component {
  render() {
    return (
      <Router> 
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/dashboard' component={AdminDashboard} />
          <Route exact path="/gallery/:id" component={GalleryPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    );
  }  
}

export default App;
