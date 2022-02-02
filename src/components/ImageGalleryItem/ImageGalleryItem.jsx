import { Item, Image } from './ImageGalleryItem.styled';

// export default function ImageGalleryItem({img: {id, webformatURL, largeImageURL}}) {
//     return (
//         <Item>
//             <Image
//                 key={id}
//                 src={webformatURL}
//                 alt="photo" />
//         </Item>
//     );
// };

export const ImageGalleryItem = ({ img: { id, webformatURL, largeImageURL } }) => {
    return (
        <Item>
            <Image
                key={id}
                src={webformatURL}
                alt="photo" />
        </Item>
    );
};
