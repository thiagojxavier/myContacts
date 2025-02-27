import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.lighter};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.lighter};
  `,
};

export const Container = styled.div`
  padding: 16px 32px;
  color:rgb(58, 55, 55);
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba( 0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ type }) => containerVariants[type] || containerVariants.default}

  & + & {
    margin-top: 12px;
  }

  img {
    width: 25px;
    margin-right: 8px;
  }
`;
