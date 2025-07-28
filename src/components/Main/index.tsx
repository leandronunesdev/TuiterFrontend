import type { ReactNode } from "react";
import * as S from "./styles";

type MainProps = {
  children: ReactNode;
  alignItems?: string;
};

const Main = ({ children, alignItems }: MainProps) => {
  return <S.Main alignItems={alignItems}>{children}</S.Main>;
};

export default Main;
