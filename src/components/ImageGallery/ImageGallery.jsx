import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

export const ImageGallery = ({ gallery }) => {
    return (
        <ul className="ImageGallery">
            {gallery.map(({ id, tags, webformatURL, largeImageURL }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        tags={tags}
                        preview={webformatURL}
                        largeImage={largeImageURL}
                        // onModalShow={onModalShow}
                    />
                );
            })}
        </ul>
    );
};

ImageGallery.prototype = {
    gallery: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }),
    // onModalShow: PropTypes.func.isRequired,
};