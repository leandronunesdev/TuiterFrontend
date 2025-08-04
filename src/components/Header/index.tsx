import * as S from "./styles";

const Header = () => (
  <S.StyledHeader>
    <S.Container>
      <S.FlexRow>
        <S.LogoRow>
          <S.StyledTwitter />
          <S.Brand>SocialHub</S.Brand>
        </S.LogoRow>
        <S.Nav>
          <S.NavLink href="#" active>
            Home
          </S.NavLink>
          <S.NavLink href="#">Explore</S.NavLink>
          <S.NavLink href="#">Notifications</S.NavLink>
          <S.NavLink href="#">Messages</S.NavLink>
        </S.Nav>
      </S.FlexRow>
    </S.Container>
  </S.StyledHeader>
);

export default Header;
