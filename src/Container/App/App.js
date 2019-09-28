import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import { BrowserRouter, Route } from 'react-router-dom';
// import Video from '../../Components/Video/Video';
import { Admin } from '../../Components/Admin/Admin';
import AdminDashboard from '../../Components/Admin/Dashboard/AdminDashboard/Dashboard';
// import { Preview } from '../../Components/Admin/Dashboard/AdminDashboard/Preview/Preview';
import Gallery from '../../Components/Gallery/Gallery';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Layout} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/admin/dashboard' component={AdminDashboard} />
        <Route path="/gallery/:id" component={Gallery} />
      </BrowserRouter>
    );
  }
}

export default App;
