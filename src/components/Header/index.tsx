import styled from "styled-components";
import { Twitter } from "lucide-react";

// Styled-components equivalents
const StyledHeader = styled.header`
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Container = styled.div`
  max-width: 80rem; /* 7xl */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Brand = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled.a<{ active?: boolean }>`
  font-weight: ${(props) => (props.active ? "500" : "400")};
  color: ${(props) => (props.active ? "#111827" : "#6b7280")};
  transition: color 0.2s;

  &:hover {
    color: #3b82f6;
  }
`;

const StyledTwitter = styled(Twitter)`
  width: 2rem;
  height: 2rem;
  color: #3b82f6;
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <FlexRow>
        <LogoRow>
          <StyledTwitter />
          <Brand>SocialHub</Brand>
        </LogoRow>
        <Nav>
          <NavLink href="#" active>
            Home
          </NavLink>
          <NavLink href="#">Explore</NavLink>
          <NavLink href="#">Notifications</NavLink>
          <NavLink href="#">Messages</NavLink>
        </Nav>
      </FlexRow>
    </Container>
  </StyledHeader>
);

export default Header;
