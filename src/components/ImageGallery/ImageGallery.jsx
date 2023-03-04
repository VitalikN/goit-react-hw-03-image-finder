import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { GalleryList } from './imageGallery.styled';

export class ImageGallery extends Component {
  state = {};

  render() {
    const { imageGallery } = this.props;
    return (
      <GalleryList className="gallery">
        {imageGallery.map(({ id, webformatURL }) => {
          return <ImageGalleryItem key={id} src={webformatURL} />;
        })}
      </GalleryList>
    );
  }
}
