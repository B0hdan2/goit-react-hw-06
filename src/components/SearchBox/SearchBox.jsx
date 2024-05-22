import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/actions";

import s from "./SearchBox.module.css";
import { selectsFilter } from "../../redux/selectors";

function SearchBox() {
  const filter = useSelector(selectsFilter);
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
