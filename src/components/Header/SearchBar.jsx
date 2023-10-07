import styles from "../../styles/SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchVideos } from "../../store/VideoSlice";
import { useState } from "react";
const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getSearchVideos(query));
    navigate("/search");
  }
  return (
    <form onSubmit={handleSubmit} className={`${styles.search} -ml-20 mb-5 `}>
      <input
        type='text'
        className={`${styles.search__input} min-w-[600px]`}
        placeholder='Type your text'
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <button type='submit' className={styles.search__button}>
        <AiOutlineSearch className=' text-black cursor-pointer' />
      </button>
    </form>
  );
};

export default SearchBar;
