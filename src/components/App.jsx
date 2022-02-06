import { Component } from "react";
import API from '../services/Api';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import './App.css';

import { ThreeCircles } from 'react-loader-spinner';



export class App extends Component {
  state = {
    searchImages: '',
    page: 1,
    gallery: [],
    // loading: false,
    showModal: false,
    // error: null,
    largeImage: '',
    status: 'idle',
    
  };

  
  
  componentDidUpdate(prevProps, prevState) {
    const { searchImages, page, status } = this.state;

    const prevSearch = prevState.searchImages;
    // const nextSearch = this.state.searchImages;
    const prevPage = prevState.page;
    // const nextPage = this.state.page;

    // if (nextPage > 1) {
    //   window.scrollTo({
    //     top: document.documentElement.scrollHeight,
    //     behavior: 'smooth',
    //   });
    // }


    if (prevSearch !== searchImages || prevPage !== page) {
      this.setState({status: 'pending'})

      API
        .fetchImages(searchImages, page)
        .then(({ hits }) => {
          const images = hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return { id, webformatURL, largeImageURL, tags };
            },
          );

          if (images.length > 0) {
            this.setState(prevState => {
              return {
                gallery: [...prevState.gallery, ...images],
                status: 'resolved',
              };
            });
          } else {
            alert(`По запросу ${searchImages} ничего не найдено.`);
            this.setState({ status: 'idle' });
          }
        })
        .catch(error => this.setState({ error })); //, status: 'rejected' 
    }
  }

  //?
  handleFormSubmit = nextSearchImages => {
      this.setState({ searchImages: nextSearchImages, page: 1, gallery: [] });
    };

   handleLoadMore = () => {
    this.setState(({ page }) => {
      return { page: page + 1 };  
    });
   };
  
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onOpenImage = largeImage => {
    this.setState({ largeImage: largeImage});
      this.toggleModal();
    };
  
    render() {
      const { gallery, status, page, showModal, largeImage } = this.state;

      return (
        <div className="app">

          <SearchBar onSubmit={this.handleFormSubmit} />
          {status === 'idle' && ''}

          {status === 'pending' && <ThreeCircles color="#3f51b5" height={110} width={110} ariaLabel="three-circles-rotating" />}

          {status === 'pending' && page > 1 && (
            <>
            <ImageGallery gallery={gallery} onModalShow={this.onOpenImage} />
            <ThreeCircles color="#3f51b5" height={110} width={110} ariaLabel="three-circles-rotating" />
            </>
          )}

          {status === 'resolved' && (
          <>
            <ImageGallery gallery={gallery} onModalShow={this.onOpenImage} />
            <Button onClickBtn={this.handleLoadMore} />
          </>
          )}
          
          {status === 'rejected' && alert('Please try again')}

          {/* {gallery.length >= 12 && <Button onClickBtn={this.handleLoadMore} />} */}
          
          {showModal && <Modal image={largeImage} onClose={this.toggleModal} />}

          
        </div>
      );
    }

  }
