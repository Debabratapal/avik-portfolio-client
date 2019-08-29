import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import img from '../../assets/logo.png';
import './Header.css';
import $ from 'jquery';
import {api} from '../../utils/config';


class Header extends Component {
  state = {
    onTop: true,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    if(window.scrollY === 0) { 
      this.setState({onTop: true})
    } else {
      this.setState({onTop: false})
    }
  }

  scrolldownTo = (nameClass) => {
    $('html, body').animate({
      scrollTop: $('.'+nameClass).offset().top
    }, 800);
  }

  render() {
   
    let className = ['nav__section']
    if(!this.state.onTop){
      className.push('black')
    } else {
      className = ['nav__section']
    }

    return (
      <header >
        <nav>
          <div className={className.join(' ')} >
            <div className="container nav__container">
              <div className="logo-img">
                <img src={`${api.baseURL}/images/white.png`} alt="logo" />
              </div>
              <ul className="nav__list">
                <li className="nav_list__item scroll"
                  onClick={() => this.scrolldownTo('about')}>ABOUT
                </li>
                <li className="nav_list__item scroll"
                  onClick={() => this.scrolldownTo('portfolio')}>PORTFOLIO
                </li>
                <li className="nav_list__item scroll"
                  onClick={() => this.scrolldownTo('contect')}>CONTACT
                </li>
                <li className="nav_list__item scroll">
                 <Link to={'/video'}>Video</Link>
                </li>
              </ul>
            </div>

          </div>
        </nav>

      </header>
    )
  }
}


export default Header;