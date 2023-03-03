import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

export class ImageGallery extends Component {
  state = {};
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.nameSearch !== this.props.nameSearch) {
      console.log('prev', prevProps.nameSearch);
      console.log(this.props.nameSearch);
    }
  }
  render() {
    return (
      <ul className="gallery">
        <ImageGalleryItem imageGallery={this.props.imageGallery} />
      </ul>
    );
  }
}
