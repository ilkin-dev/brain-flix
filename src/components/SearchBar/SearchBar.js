import './SearchBar.css';
import icons from '../../config/icons';

const SearchBar = ({ placeholder }) => {

  return (
    <div className="searchBar">
      <img className='searchBar__icon' src={icons.search}></img>
      <input
        className='searchBar__input'
        type='text'
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default SearchBar;
