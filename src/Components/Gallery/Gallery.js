import React from 'react';
import './Gallery.css';
import axios from '../../utils/axios';
import {api} from '../../utils/config';

class Gallery extends React.Component {
  state = {
    images: [],
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/image/${id}`).then(data => {
      this.setState({images: data.data});
    })
  }

  render() {
    const {images} = this.state;
    console.log(images);
    
    return (
      <div>
        <div className="images-container">
          {images.map((el, i) => (
            <div className="images-col">
            <img key={i} src={api.baseURL+'/images/uploads/'+el.path} alt={el.path}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Gallery;