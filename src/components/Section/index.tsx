import * as S from "./styles";

type SectionProps = {
  children: React.ReactNode;
  alignContent?: string;
};

const Section = ({ children, alignContent }: SectionProps) => {
  return <S.Section alignContent={alignContent}>{children}</S.Section>;
};

export default Section;
