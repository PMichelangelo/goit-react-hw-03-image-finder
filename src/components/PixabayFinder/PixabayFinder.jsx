import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { searchResults } from 'components/api/api';
import Button from 'components/Button/Button';
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
        this.setState(({ images }) => ({
          images: data?.length ? [...images, ...data] : images,
        }));
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
    return (
      <>
        <Searchbar onSubmit={handleSearch} />
        {error && <p className={styles.error}>{error}</p>}
        {loading && <p>Loading...</p>}
        {Boolean(images.length) && <ImageGallery items={images} />}
      </>
    );
  }
}

export default PixabayFinder;
