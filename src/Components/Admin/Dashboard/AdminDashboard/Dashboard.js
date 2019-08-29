import React, { Component } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import { UploadPage } from './UploadPage/UploadPage';
import { Preview } from './Preview/Preview';

class AdminDashboard extends Component {
  state = {
    sideberOpen: false,
  }

  openSidebar = () => this.setState({sideberOpen: !this.state.sideberOpen})
  
  render() {
    const {sideberOpen} = this.state;
    return (
      
      <BrowserRouter>
      <Sidebar open={this.openSidebar} />
      <div className="admin-dashboard" style={{marginLeft: sideberOpen ? '250px': '0px'}}>
        <Route exact path={'/admin/dashboard/upload'}  component={UploadPage}/>
        <Route exact path={'/admin/dashboard/preview'} component={Preview} />
      </div>
      </BrowserRouter>
      
    )
  }
}

export default AdminDashboard;