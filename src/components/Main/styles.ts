import styled from "styled-components";

type MainProps = {
  alignItems?: string;
};

export const Main = styled.main<MainProps>`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.alignItems || "stretch"};
`;
