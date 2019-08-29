import React, { Component } from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';

 class Sidebar extends Component {
  state = {
    sidebarOpen: false,
  }

  openSidebar = () => {
    this.setState({sidebarOpen: !this.state.sidebarOpen});
    this.props.open();
  }
  

  render() {
    const {sidebarOpen} = this.state;
    return (
      <div >
        <div id="mySidebar" className="sidebar" style={{ width: sidebarOpen ? '250px' : '50px'}}>
        <div className="closebtn"  
        onClick={this.openSidebar}>
          { !sidebarOpen ?
          <section>
            <div></div>
            <div></div>
            <div></div>
          </section>
          : <section style={{right: '20px'}}>x</section>
          }
        </div>
        {
          sidebarOpen ?
          <div>
            <Link to='/admin/dashboard/upload'>Dashboard</Link>
            <Link to='/'>Home</Link>
            <Link to="/admin/dashboard/preview">Preview</Link>
          </div>
          : null
        }
       </div>
      

      </div>
    )
  }
}

export default Sidebar;

