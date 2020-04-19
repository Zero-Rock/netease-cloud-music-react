/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/19 11:28 下午.
 */
import React from 'react';

type IsFun = () => boolean;

interface IProps {
  children: any;
  is: IsFun | boolean;
}


const If = ({ children, is }: IProps) => {
  if (!children) {
    return null;
  }
  const bool = typeof is === 'function' ? is() : is;
  if (React.Children.count(children) === 1) {
    return bool ? children : null;
  }
  const ifBlock: any[] = [];
  const elseBlock: any[] = [];
  let hasElse: boolean = false;
  React.Children.map(children, (child: any, index: number) => {
    if (child.type && child.type.displayName === 'ELSE') {
      hasElse = true;
    }
    if (hasElse) {
      elseBlock.push(child);
    } else {
      ifBlock.push(child);
    }
  });
  if (bool) {
    return (
      <>
        {ifBlock}
      </>
    );
  } else if (hasElse) {
    return (
      <>
        {elseBlock}
      </>
    );
  } else {
    return null;
  }
};

const Else = () => {
  return null;
};
Else.displayName = 'ELSE';
If.Else = Else;

export default If;
