import React, { Component } from "react";
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
// import Loader from './Loader/Loader';
import { getCards } from 'services/api';

const appStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '16px',
  paddingBottom: '24px'
};

export class App extends Component {
  state = {
    cards: [],
    searchString: '',
    page: 1,
    isLoading: false,
    error: null,
    totalImages: 0
  };

  componentDidUpdate = async (_, prevState) => {
    const { searchString, page } = this.state
    if (page !== prevState.page || searchString !== prevState.searchString) {
      const cards = await getCards(searchString, page);
      this.setState(() => ({
        cards,
        searchString
      }))
    }
  }


  handleSearchForm = async (searchString) => {
    this.setState(() => ({
      cards: [],
      page: 1,
      searchString
    }))
  }


  loadMoreClick = async () => {
    this.setState((prev) => ({
      page: prev + 1,
    }))
  }



  render() {
    const { cards } = this.state;
    return (
      <div style={appStyles}>
        <Searchbar onSubmit={this.handleSearchForm} />
        {this.searchString !== '' && <ImageGallery cards={cards} />}
        {/* <Button onClick={this.loadMoreClick} /> */}
      </div>
    );
  }
}
