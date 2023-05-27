import PropTypes from 'prop-types';

export const ContactList = ({ filteredContacts, onRemoveContact }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}</span>: <span>{number}</span>
            <button type="button" data-id={id} onClick={onRemoveContact}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
