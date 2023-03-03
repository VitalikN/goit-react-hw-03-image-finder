import React, { Component } from 'react';
import { toast } from 'react-hot-toast';

import css from './styles.module.css';

export class Searchbar extends Component {
  state = {
    nameSearch: '',
  };
  handleSearch = evt => {
    this.setState({ nameSearch: evt.target.value.toLowerCase() });
    console.log(evt.currentTarget.value);
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
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.nameSearch}
            onChange={this.handleSearch}
          />
        </form>
      </header>
    );
  }
}
