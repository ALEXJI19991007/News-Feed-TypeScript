import React from 'react';
import { RecoilRoot } from 'recoil';
import { NewsApp } from './NewsApp';

function App() {
  return (
    <RecoilRoot>
      <NewsApp/>
    </RecoilRoot>
  );
}

export default App;
