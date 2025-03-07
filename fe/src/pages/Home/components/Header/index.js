import PropTypes from 'prop-types';
/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header({ hasError, quantityOfContacts, quantityOfFilteredContacts }) {
  const alignment = hasError
    ? 'flex-end'
    : (
      quantityOfContacts > 0
        ? 'space-between'
        : 'center'
    );
  return (
    <Container
      $justifyContent={alignment}
    >
      {(!hasError && quantityOfContacts > 0) && (
      <strong>
        {quantityOfFilteredContacts}
        {quantityOfFilteredContacts !== 1 ? ' contatos' : ' contato'}
      </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  quantityOfContacts: PropTypes.number.isRequired,
  quantityOfFilteredContacts: PropTypes.number.isRequired,
};
