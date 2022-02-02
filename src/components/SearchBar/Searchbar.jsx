import { Component } from "react";
import { Header } from './SearchBar.styled';

export default class SearchBar extends Component {
    state = {
        searchImages: '',
        page: 1,

    };

    // componentDidMount() {
    searchTagsImages = event => {
        this.setState({ searchImages: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchImages.trim() === '') {
            alert('Введите имя');
            return;
        };
        this.props.onSubmit(this.state.searchImages);
        this.setState({ searchImages: '' });
    };

    
    render() {
        return (
            <>
                <Header>
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit">
                            <span>Search</span>
                        </button>

                        <input
                            type="text"
                            name="searchImages"
                            value={this.state.searchImages}
                            onChange={this.searchTagsImages}
                            autoComplete="off"
                            autoFocus
                            // placeholder="Search images and photos"
                        />
                    </form>
                </Header>
            </>
        )
    };
};
