import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";

import s from "./SearchBox.module.css";
import PropTypes from "prop-types";

function SearchBox() {
  const dispatch = useDispatch();

  const handleChang = (e) => {
    const value = e.target.value;

    dispatch(setFilter(value));
  };
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type='text'
        /*/value={}/*/
        onChange={handleChang}
      />
    </>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default SearchBox;
