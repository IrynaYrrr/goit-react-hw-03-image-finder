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
    searchString: ''
  };

  async componentDidMount() {
    const response = await axios.get(`https://pixabay.com/api/?q=${this.state.searchString}&page=1&key=36088783-799e53020b824ac98b477fb5a&image_type=photo&orientation=horizontal&per_page=12`);
    this.setState({ cards: response.data.hits });
  }


  async componentDidUpdate() {
    const response = await axios.get(`https://pixabay.com/api/?q=${this.state.searchString}&page=1&key=36088783-799e53020b824ac98b477fb5a&image_type=photo&orientation=horizontal&per_page=12`);
    this.setState({ cards: response.data.hits });
  }

  handleSubmitForm = (searchString) => {
    this.setState(() => ({
      searchString,
    }))
  }

  render() {
    const { cards } = this.state;
    return (
      <div style={appStyles}>
        <Searchbar onSubmit={this.handleSubmitForm} />
        {cards.length > 0 ? <ImageGallery cards={cards} /> : <Loader />}
        <Button />
      </div>
    );
  }
}
