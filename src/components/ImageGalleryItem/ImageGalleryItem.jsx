import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {};

  render() {
    const { id, src } = this.props;
    return (
      <li className="gallery-item" key={id}>
        <img src={src} alt="" />
      </li>
    );
  }
}
