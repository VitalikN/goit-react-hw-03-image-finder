import { Item, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt, openModal }) => {
  return (
    <Item onClick={openModal}>
      <Img src={src} alt={alt} />
    </Item>
  );
};
