import styled from "styled-components";

export const Section = styled.section`
  min-width: 320px;
  min-height: 320px;
  padding: 2rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  align-content: center;
  text-align: center;
`;
