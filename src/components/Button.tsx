import React, { ReactNode } from 'react';

type Props = {
  children: React.ReactNode;
  onClick: (e: any) => void;
  className: string;
}

const Button = (props: Props) => {
  return (
    <button className={props.className} onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;
