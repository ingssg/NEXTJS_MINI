import React, { ReactNode } from 'react';

type Props = {
  children: React.ReactNode;
  onClick: (e: any) => void;
  onMouseEnter?: ((e: any) => void);
  className: string;
}

const Button = (props: Props) => {
  return (
    <button className={props.className} onMouseEnter={props.onMouseEnter} onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;
