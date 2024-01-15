import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { searchResults } from 'components/api/api';
//import Button from 'components/Button/Button';
import styles from './pixabayFinder.module.css';

class PixabayFinder extends Component {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
  };

  async componentDidUpdate(preProps, prevState) {
    const { search } = this.state;
    if (search && search !== prevState.search) {
      this.setState({
        loading: true,
      });
      try {
        const { data } = await searchResults(search);
        console.log(data);

        this.setState({
          images: data.hits ? data.hits : [],
        });

        console.log(this.state);
      } catch (error) {
        this.setState({
          error: error.message,
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  }

  handleSearch = ({ search }) => {
    this.setState({
      search,
    });
  };

  render() {
    const { handleSearch } = this;
    const { images, loading, error } = this.state;
    const isImages = Boolean(images.length);
    return (
      <>
        <Searchbar onSubmit={handleSearch} />
        {error && <p className={styles.error}>{error}</p>}
        {loading && <p>Loading...</p>}
        {isImages && <ImageGallery items={images} />}
      </>
    );
  }
}

export default PixabayFinder;
