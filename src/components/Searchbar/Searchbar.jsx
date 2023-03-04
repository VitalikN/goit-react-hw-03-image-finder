import React, { Component } from 'react';
import { toast } from 'react-hot-toast';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  Input,
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
    const { nameSearch } = this.state;
    if (nameSearch.trim() === '') {
      toast.error('Here is your toast.');
      return;
    }
    this.props.onSearch(nameSearch);
    this.setState({ nameSearch: '' });
  };

  render() {
    const { nameSearch } = this.state;
    const { handleSubmit, handleSearch } = this;
    return (
      <Header>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={nameSearch}
            onChange={handleSearch}
          />
        </SearchForm>
      </Header>
    );
  }
}
