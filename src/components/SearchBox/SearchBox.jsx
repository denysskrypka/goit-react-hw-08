import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectorsSlice";
import { changeFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const name = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}
