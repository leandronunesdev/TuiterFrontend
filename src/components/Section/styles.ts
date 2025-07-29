import styled, { css } from "styled-components";

type SectionProps = {
  alignContent?: string;
};

export const Section = styled.section<SectionProps>`
  ${({ theme, alignContent }) => css`
    min-width: 320px;
    min-height: 320px;
    padding: 2rem;
    border-radius: 8px;
    background: ${theme.colors.surface};
    align-content: ${alignContent};
    text-align: center;
  `}
`;
