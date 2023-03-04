import { Item, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt, openModal }) => (
  <Item onClick={openModal}>
    <Img src={src} alt={alt} />
  </Item>
);
