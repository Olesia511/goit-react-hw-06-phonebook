// import { getContacts } from 'redux/selectors';
import { FilterInput } from './Filter.styled';
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { setFilter } from 'redux/filterSlice';

export const Filter = ({ onChange }) => {
  // const value = useSelector(state => state.filter);
  // const dispatch = useDispatch();
  //  console.dir(`getFilter `,  getContacts)
  return (
    <FilterInput
      type="text"
      placeholder="Name"
      onChange={e => onChange(e.target.value)
        // console.log(`value filter`, value)
        // return dispatch(setFilter(e.target.value))
      }
    />
  );
};
