import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { GalleryList } from './imageGallery.styled';
// import { nanoid } from 'nanoid';
export const ImageGallery = ({ imageGallery, onOpenModal }) => {
  // const id = nanoid();
  // // key = { id };
  return (
    <GalleryList className="gallery">
      {imageGallery.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          openModal={() => onOpenModal(largeImageURL, tags)}
        />
      ))}
    </GalleryList>
  );
};
