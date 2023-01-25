import PropTypes from 'prop-types';
import style from './ContactElem.module.scss';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { deleteContact } from '../../services/fetch';
import { useDispatch } from 'react-redux';

export const ContactElem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContactId = () => dispatch(deleteContact(id));
  console.log(id, name, number, 3);

  return (
    <ul className={style.ulElem}>
      <li className={style.liElem}>
        <p>Name : {name}</p>
        <p>Telephone Number : {number}</p>
        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            style={{ color: '#f0ffff', borderColor: '#f0ffff' }}
            onClick={deleteContactId}
          >
            Delete
          </Button>
        </Stack>
      </li>
    </ul>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
