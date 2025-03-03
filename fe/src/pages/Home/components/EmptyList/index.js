/* eslint-disable react/jsx-one-expression-per-line */
import emptyBox from '../../../../assets/images/box.svg';

import { Container } from './styles';

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="Empty box" />

      <p>
        Você ainda não tem nenhum contato cadastrado!
        Clique no botão <strong>Novo contato</strong> à cima
        para cadastrar o seu primeiro contato!
      </p>
    </Container>
  );
}
