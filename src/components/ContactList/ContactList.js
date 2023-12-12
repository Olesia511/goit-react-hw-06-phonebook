import { ContactCard } from 'components/ContactCard/ContactCard';

export const ContactList = ({ cont, onDelete }) => {
  return (
    <ul style={{ maxWidth: 680 }}>
      {cont.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
