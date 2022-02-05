import './ImageGalleryItem.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({tags, preview, largeImage}) => {
    return (
        <li className="ImageGalleryItem">
            <img
                src={preview}
                alt={tags}
                className="ImageGalleryItem-image"
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    onModalShow: PropTypes.func.isRequired,
};