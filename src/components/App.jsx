import { React, Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Container } from './App.styled';
import { fetchGallery } from './fetch/fetch';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    imageGallery: [],
    searchQuery: '',
    Loader: false,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.imgGalleryList(this.state.searchQuery, this.state.page);
    }
  }
  imgGalleryList = async (searchQuery, page) => {
    try {
      const {
        hits,
        // total, totalHits
      } = await fetchGallery(searchQuery, page);
      this.setState(prev => ({
        imageGallery: [...prev.imageGallery, ...hits],
      }));
    } catch (error) {
      console.log(error);
    }
  };

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
    this.setState({ searchQuery: nameSearch });
  };

  loadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  render() {
    const { imageGallery } = this.state;
    return (
      <Container>
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
        {this.state.searchQuery && <ImageGallery imageGallery={imageGallery} />}
        <button onClick={this.loadMore}>loadMore</button>
      </Container>
    );
  }
}
