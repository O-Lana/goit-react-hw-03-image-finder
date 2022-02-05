import { Component } from "react";
// import PropTypes from 'prop-types';
import './SearchBar.css';

export default class SearchBar extends Component {
    state = {
        searchImages: '',
    };

    searchNameImages = event => {
        this.setState({ searchImages: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchImages.trim() === '') {
            alert('Введите слово для поиска');
            return;
        }

        this.props.onSubmit(this.state.searchImages);
        this.setState({ searchImages: '' });
    };

    
    render() {
        return (
            <>
                <header className="SearchBar">
                    <form className="SearchForm" onSubmit={this.handleSubmit}>
                        <button type="submit" className="SearchForm-button">
                            <span className="SearchForm-button-label">Search</span>
                        </button>

                        <input
                            className="SearchForm-input"
                            type="text"
                            name="searchImages"
                            value={this.state.searchImages}
                            onChange={this.searchNameImages}
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                        />
                    </form>
                </header>
            </>
        )
    };
};
