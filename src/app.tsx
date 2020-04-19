/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/14 10:10 下午.
 */
import React from 'react';
import { isEmpty } from 'lodash';
import { If } from 'src/components';

const { Else } = If;

const a = process.env.NODE_ENV;
const App = () => {
  const is: boolean = isEmpty(a);
  return (
    <>
      <If is={is}>
        mobius
        <Else/>
        sdddd
      </If>
    </>
  );
};

export default App;
