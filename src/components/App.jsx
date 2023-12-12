import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { GlobalStyle } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { BasicContainer, ContactsContainer } from './App.styled';

Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '12px',
  opacity: 0.9,
  borderRadius: '5px',
  messageMaxLength: 110,
  fontFamily: 'Quicksand',
  fontSize: '20px',
  closeButton: false,
  useIcon: false,
  failure: {
    background: '#251c1c',
    textColor: '#d6d0d0',
  },
});

const keyContactLS = 'my-contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(keyContactLS)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(keyContactLS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const doubleContact = contacts.find(el => {
      return el.name.trim().toLowerCase() === contact.name.trim().toLowerCase();
    });

    if (doubleContact) {
      Notify.failure(`${contact.name} is already in contacts!`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const deleteContact = evt => {
    const id = evt.target.closest('li').id;
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  const updateFilter = value => {
    setFilter(value.trim().toLowerCase());
  };

  const visibleContact = contacts.filter(el =>
    el.name.toLowerCase().includes(filter)
  );

  return (
    <BasicContainer>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <ContactsContainer>
        <h2 style={{ marginBottom: 24 }}>Contacts</h2>
        <h3 style={{ marginBottom: 8 }}>Find contacts by name</h3>

        <Filter onChange={updateFilter} />

        {contacts.length > 0 && (
          <ContactList cont={visibleContact} onDelete={deleteContact} />
        )}
      </ContactsContainer>
      <GlobalStyle />
    </BasicContainer>
  );
};
