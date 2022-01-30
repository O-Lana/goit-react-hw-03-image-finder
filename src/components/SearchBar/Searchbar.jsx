// import { Component } from "react";
// import { Header } from './SearchBar.styled';

// export class SearchBar extends Component {
//     state = {
//         img: null,
//     };

//     componentDidMount() {
//         fetch('https://pixabay.com/api/?q=cat&page=1&key=24504090-67d4d1d2d94058f1108b78b7b&image_type=photo&orientation=horizontal&per_page=12')
//             .then(res => res.json())
//             .then(console.log);
//     }

//     render() {
//         return (
//             <Header>
//                 <form>
//                     <button type="submit">
//                         <span>Search</span>
//                     </button>

//                     <input
//                         type="text"
//                         autoComplete="off"
//                         autoFocus
//                         placeholder="Search images and photos"
//                     />
//                 </form>
//             </Header>
//         )
//     };
// };
