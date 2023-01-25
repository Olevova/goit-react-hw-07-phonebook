import { ContactForm } from './ContacForm/ContacForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'services/fetch';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <ContactForm />
      <Filter />
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item>
            <Contacts />
          </Item>
        </Stack>
      </Box>
    </div>
  );
}
