import styled, { css } from "styled-components";

export const Aside = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.spacing.md};
    margin: ${theme.spacing.sm};
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin: ${(props) => props.theme.spacing.md};
`;
