import React from "react";

type HeaderProps = {
  titulo: string;
};
const Header: React.FunctionComponent<HeaderProps> = ({ titulo }) => {
  return (
    <header>
      <h1 className="text-center">{titulo}</h1>
    </header>
  );
};

export default Header;
