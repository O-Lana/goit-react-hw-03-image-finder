import { Component } from "react";
import fetchImages from '../services/Api';
import SearchBar from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import './App.css';


export class App extends Component {
  state = {
    searchImages: '',
    page: 1,
    gallery: [],
    loading: false,
    error: null,
    status: 'idle',
    
  };

  
  componentDidUpdate(prevProps, prevState) {

    const prevSearch = prevState.searchImages;
    const nextSearch = this.state.searchImages;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    this.setState({ loading: true });

    if (prevSearch !== nextSearch || prevPage !== nextPage) {
      //     //? this.setState({status:})
      
        fetchImages(nextSearch, nextPage)
        .then(gallery => {
          if (gallery.total) {
            this.setState(prevState => ({
              gallery: [...prevState.gallery, ...gallery.hits],
            }));
            this.setState({ status: 'resolved' });
          } else {
            this.setState({ status: 'reject' });
            // toast.error('Плохой запрос, попробуйте еще раз');
          }
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = searchImages => {
      this.setState({ searchImages, page: 1, gallery: [] });
    };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState + 1 }));
  }
  
    render() {
      const { gallery } = this.state;

      return (
        <div className="App">

          <SearchBar onSubmit={this.handleFormSubmit} />

          <ImageGallery gallery={gallery} />
          {gallery.length >= 12 && <Button onClickBtn={this.handleLoadMore} />}
          

        </div>
      );
    }
  }
