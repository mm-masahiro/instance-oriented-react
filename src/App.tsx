import React from 'react';
import './App.css';
import List from './List';

interface Props {};

const films = [
  {
    "id": 1,
    "title": "ラストエンペラー",
    "watchDate": "2021-01-01",
    "point": 7,
    "note": "観ていて辛い",
  },
  {
    "id": 2,
    "title": "幸福の黄色いハンカチ",
    "watchDate": "2021-01-01",
    "point": 8,
    "note": "最後が嫌だ",
  },
  {
    "id": 3,
    "title": "秒速5センチメートル",
    "watchDate": "2021-01-01",
    "point": 5,
    "note": "やばない？",
  },
  {
    "id": 4,
    "title": "パンドラの匣",
    "watchDate": "2021-01-01",
    "point": 2,
    "note": "つまらん",
  }
]

const App: React.FC<Props> = (props: Props) => {
  return (
    <div className='App'>
      <h1>インスタンス指向 React</h1>
      <List list={films} />
    </div>
  )
};

export default App
