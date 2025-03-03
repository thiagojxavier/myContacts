/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import { Container } from './styles';

import magnifier from '../../../../assets/images/magnifier.svg';

export default function SearchNotFound({ searchTerm }) {
  return (
    <Container>
      <img src={magnifier} alt="Magnifier" />

      <span>
        Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>.
      </span>
    </Container>
  );
}

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
