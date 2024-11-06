import { FC } from "react";
type TypeLogoProps = {
  nameLogo: string;
  src?: string;
};

export const Logo: FC<TypeLogoProps> = ({ nameLogo }) => {
  return (
    <div className="logo">
      <a href="#">{nameLogo}</a>
    </div>
  );
};
