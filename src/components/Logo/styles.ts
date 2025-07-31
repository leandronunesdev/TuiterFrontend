import styled from "styled-components";
import { theme } from "../../styles/theme";

export const IconContainer = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.surface};
  border-radius: 50%;
  height: 56px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
`;
