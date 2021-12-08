import React from 'react';
import './App.css';
import Film from './Film';

interface Props {};

const App: React.FC<Props> = (props: Props) => {
  return (
    <div className='App'>
      <h1>インスタンス指向 React</h1>
      <Film title='ラストエンペラー' />
      <Film title='幸福の黄色いハンカチ' />
      <Film title='秒速5センチメートル' />
      <Film title='パンドラの匣' />
    </div>
  )
};

export default App
