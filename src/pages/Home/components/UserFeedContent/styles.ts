import styled from "styled-components";

export const MainFeedContainer = styled.div`
  grid-column: span 6 / span 6;
  @media (min-width: 1024px) {
    grid-column: span 6 / span 6;
  }
`;

export const Section = styled.div`
  margin-bottom: 1.5rem;
`;

export const FeedTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
  margin: 0 1rem;
`;
