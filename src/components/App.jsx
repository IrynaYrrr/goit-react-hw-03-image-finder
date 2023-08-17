// import Searchbar from './Searchbar/Searchbar';
import React, { Component } from "react";
import axios from "axios";
import ImageGallery from './ImageGallery/ImageGallery';



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//      {/* <Searchbar onSubmit={onSubmit}/> */}
//     </div>
//   );
// };

export class App extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const response = await axios.get("https://pixabay.com/api/?q=cat&page=1&key=36088783-799e53020b824ac98b477fb5a&image_type=photo&orientation=horizontal&per_page=12");
    this.setState({ cards: response.data.hits });
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        {cards.length > 0 ? <ImageGallery cards={cards} /> : null}
      </div>
    );
  }
}
