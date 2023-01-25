import style from './Filter.module.scss';
import { getFilter } from '../../redux/selectors';
import { filteradd } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilter = ev => {
    console.log(ev.currentTarget.value);
    dispatch(filteradd(ev.currentTarget.value));
  };

  return (
    <label className={style.filterEl}>
      Find Contacts by name
      <input
        className={style.inputEl}
        type="text"
        value={filter}
        onChange={onFilter}
      ></input>
    </label>
  );
};
