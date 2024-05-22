import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setFilter } from "../../redux/filtersSlice";

import s from "./SearchBox.module.css";

function SearchBox() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type='text'
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </>
  );
}

export default SearchBox;
