import React, {Component} from 'react';
import UploaderComponent from '../Uploader/Uploader';
import './SliderImage.css';

class SliderImage extends Component {
  state = {
    files: [],
  }

  getImagePreviewer() {
    const { files } = this.state;
    if (files && files.length) {
      return (
        <div>
          {files.map((image, i) => (
            <div className="image-container" key={i}>
              <span className="cross-img" onClick={() => this.remove(i)}>x</span>
              <img className="img" src={image.preview} alt={i + '.jpg'} />
            </div>
          ))}
        </div>
      )
    }
  }

  remove = i => {
    let {files} = this.state;
    files.splice(i, 1);
    this.setState({files});
  }

  fileChange = (files) => {
    this.setState({files: files})
  }

  render() {
    return(
      <div className='container'>
        <UploaderComponent fileChange={this.fileChange} files={this.state.files} limit={6}/>
        {this.getImagePreviewer()}
      </div>
    )
  }
}

export default SliderImage;