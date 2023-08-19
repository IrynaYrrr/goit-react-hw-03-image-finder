// import Searchbar from './Searchbar/Searchbar';
import React, { Component } from "react";
import axios from "axios";
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';


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
  };

  async componentDidMount() {
    const cards = await this.getCards(this.state.searchString, this.state.page)
    this.setState(() => ({
      cards,
    }))
    // const response = await axios.get(`https://pixabay.com/api/?q=${this.state.searchString}&page=1&key=36088783-799e53020b824ac98b477fb5a&image_type=photo&orientation=horizontal&per_page=12`);
    // this.setState({ cards: response.data.hits });
  }


  // async componentDidUpdate() {
  //   const response = await axios.get(`https://pixabay.com/api/?q=${this.state.searchString}&page=${this.state.page}&key=36088783-799e53020b824ac98b477fb5a&image_type=photo&orientation=horizontal&per_page=12`);
  //   this.setState({ cards: response.data.hits });
  // }



  handleSearchForm = async(searchString) => {
    const page = 1;
    const cards = await this.getCards(searchString, page)
    this.setState(() => ({
      cards, page, searchString
    }))
  }

  loadMoreClick = async() => {
    const page = this.state.page + 1;
    const cards = await this.getCards(this.state.searchString, page)
    this.setState((prev) => ({
      page,
      cards: [...prev.cards, ...cards]
    }))
  }

  async getCards(searchString, page) {
    const response = await axios.get(`https://pixabay.com/api/?q=${searchString}&page=${page}&key=36088783-799e53020b824ac98b477fb5a&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data.hits;
  }

  render() {
    const { cards } = this.state;
    return (
      <div style={appStyles}>
        <Searchbar onSubmit={this.handleSearchForm} />
        {cards.length > 0 ? <ImageGallery cards={cards} /> : <Loader />}
        <Button onClick={this.loadMoreClick} />
      </div>
    );
  }
}
