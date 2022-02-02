import { Component } from "react";
// import { Container } from './App.styled';
// import { Header } from "./SearchBar/SearchBar.styled";
// import { ImageGallery } from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import imageApi from '../services/Api';


export class App extends Component {
  state = {
    searchImages: '',
  //   loading: false,
    
  };
  
  componentDidUpdate(prevProps, prevState) {
        const prevSearch = prevState.searchImages;
        const nextSearch = this.state.searchImages;

        if (prevSearch !== nextSearch) {
          setTimeout(() => {
            imageApi.fetchImage(nextSearch)
              .then(searchImages => this.setState({ searchImages }));
          });
    };
  };

  handleFormSubmit = searchImages => {
    this.setState({ searchImages });
  };


  
  render() {

    return (
      <>
        {/* {this.state.gallery && <div>image</div>} */}

        <SearchBar onSubmit={this.handleFormSubmit} />
        {/* <ImageGallery searchImages={this.state.searchImages} /> */}
      </>
    );
  }
}
