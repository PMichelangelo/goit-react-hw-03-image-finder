import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { searchResults } from 'components/api/api';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
import styles from './pixabayFinder.module.css';

class PixabayFinder extends Component {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
    page: 1,
    modalOpen: false,
    imageModal: {},
  };

  async componentDidUpdate(preProps, prevState) {
    const { search, page } = this.state;
    if (search && (search !== prevState.search || page !== prevState.page)) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { search, page } = this.state;
    try {
      this.setState({
        loading: true,
      });
      const { data } = await searchResults(search, page);

      this.setState(
        ({ images }) => ({
          images: data.hits ? [...images, ...data.hits] : images,
        }),
        () => {
          console.log(this.state);
        }
      );

      //images: data.hits ? data.hits : [],}
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

  handleSearch = ({ search }) => {
    this.setState({
      search,
      images: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showModal = largeImageURL => {
    this.setState({
      modalOpen: true,
      imageModal: {
        largeImageURL,
      },
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      imageModal: {},
    });
  };

  render() {
    const { handleSearch, loadMore, showModal, closeModal } = this;
    const { images, loading, error, modalOpen, imageModal } = this.state;
    const isImages = Boolean(images.length);
    return (
      <>
        <Searchbar onSubmit={handleSearch} />
        {error && <p className={styles.error}>{error}</p>}
        {loading && <Loader />}
        {isImages && <ImageGallery items={images} showModal={showModal} />}
        {isImages && (
          <div className={styles.btnWrapper}>
            <Button onClick={loadMore} type="button">
              Load more
            </Button>
          </div>
        )}
        {modalOpen && (
          <Modal largeImageURL={imageModal.largeImageURL} close={closeModal} />
        )}
      </>
    );
  }
}

export default PixabayFinder;
