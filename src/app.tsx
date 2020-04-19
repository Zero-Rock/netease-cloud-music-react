/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/14 10:10 下午.
 */
import React from 'react';
import { isEmpty } from 'lodash';

const a = process.env.NODE_ENV;
const App = () => {
  const ise = isEmpty(a);
  return (
    <>111{ise ? a: ''}</>
  );
};

export default App;
