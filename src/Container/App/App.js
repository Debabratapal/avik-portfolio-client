import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import { BrowserRouter, Route } from 'react-router-dom';
import Video from '../../Components/Video/Video';
import { Admin } from '../../Components/Admin/Admin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Layout} />
        <Route path='/video' component={Video} />
        <Route path='/admin' component={Admin} />
      </BrowserRouter>
    );
  }
}

export default App;
