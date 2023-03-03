import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {};

  render() {
    return (
      <li className="gallery-item">
        <img src={this.props.imageGallery} width="200px" alt="" />
      </li>
    );
  }
}
