import PropTypes from 'prop-types';

import { Container } from './styles';

import circleError from '../../../assets/images/icons/error-circle.png';
import circleSuccess from '../../../assets/images/icons/success-circle.png';

export default function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={circleError} alt="Circle error" />}
      {type === 'success' && <img src={circleSuccess} alt="Circle success" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
