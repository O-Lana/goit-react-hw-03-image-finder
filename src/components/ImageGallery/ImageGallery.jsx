
// // import { List } from './ImageGallery.styled';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

// export const ImageGallery = ({ gallery }) => {
//     return (
//         <ul>
//             {gallery.map(({ id, webformatURL, largeImageURL }) => (
//                 <ImageGalleryItem
//                     key={id}
//                     preview={webformatURL}
//                     largeImage={largeImageURL}
//                 />
//             ))}
//         </ul>
//     );
// };

export const ImageGallery = ({searchImages}) => {

    

        return (
            <ul>
                {searchImages.map(searchImage => searchImage)}
                <li>{this.state.searchImages}</li>
            </ul>
        )
    };
