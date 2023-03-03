import { React, Component } from 'react';
import { Toaster } from 'react-hot-toast';
// import { fetchGallery } from './fetch/fetch';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    // imageGallery: null,
    searchQuery: '',
    Loader: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log('prev', prevProps.searchQuery);
      console.log(this.props.searchQuery);
    }
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.nameSearch !== this.props.nameSearch) {
  //     console.log('prev', prevProps.nameSearch);
  //     console.log(this.props.nameSearch);

  // setTimeout(() => {
  //   fetchGallery(this.props.nameSearch)
  //     .then(res => res.json())
  //     .then(imageGallery => this.setState({ imageGallery }))
  //     .finally(() => this.setState({ Loader: false }));
  // }, 1000);
  // }

  // this.setState({ Loader: true });
  // }
  handleSubmit = nameSearch => {
    this.setState({ searchQuery: nameSearch, hits: [] });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '30px',
        }}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            className: '',
            duration: 1000,
            style: {
              background: '#ff0303',
              color: '#fff',
            },
          }}
        />
        <Searchbar onSearch={this.handleSubmit} />

        {this.state.Loader && <p>Loader...</p>}
        {this.state.nameSearch && (
          <ImageGallery imageGallery={this.state.nameSearch} />
        )}
      </div>
    );
  }
}
