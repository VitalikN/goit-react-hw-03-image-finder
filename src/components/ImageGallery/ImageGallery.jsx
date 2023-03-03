import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

export class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <ul className="gallery">
        <ImageGalleryItem imageGallery={this.props.imageGallery} />
      </ul>
    );
  }
}
