import { ContactElem } from '../ContactElem/ContactElem';
import { selectfilterContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'services/fetch';
import { useDispatch } from 'react-redux';

export const Contacts = () => {
  const filterContacts = useSelector(selectfilterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return filterContacts.map(({ id, name, number }) => (
    <ContactElem key={id} id={id} name={name} number={number} />
  ));
};
