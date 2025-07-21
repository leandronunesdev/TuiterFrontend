import type { ReactNode } from "react";
import * as S from "./styles";

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
