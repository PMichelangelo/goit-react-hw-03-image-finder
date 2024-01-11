import { Component } from 'react';
import axios from 'axios';

import styles from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://pixabay.com/api/?q=cat&page=1&key=19208174-4a8a1fc5d875fb3b1b47e04d4&image_type=photo&orientation=horizontal&per_page=12'
      )
      .then(({ data }) => {
        console.log(data);
      });
  }

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
