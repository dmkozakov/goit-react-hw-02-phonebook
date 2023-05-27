import PropTypes from 'prop-types';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <p>Filter contacts by name</p>
      <input type="text" value={filter} onChange={changeFilter} />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
