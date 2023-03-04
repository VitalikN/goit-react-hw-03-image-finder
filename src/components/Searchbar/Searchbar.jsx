import React, { Component } from 'react';
import { toast } from 'react-hot-toast';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    nameSearch: '',
  };
  handleSearch = evt => {
    this.setState({ nameSearch: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.nameSearch.trim() === '') {
      toast.error('Here is your toast.');
      return;
    }
    this.props.onSearch(this.state.nameSearch);
    this.setState({ nameSearch: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.nameSearch}
            onChange={this.handleSearch}
          />
        </SearchForm>
      </Header>
    );
  }
}
