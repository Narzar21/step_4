import React from 'react';
import {Table} from 'antd';
import './App.css';
import 'antd/dist/antd.css';

export var data=[
  {
    key: '0',
    book: 'book #0',
    author: 'author_0',
    year: '1800-1854',
  },
  {
    key: '1',
    book: 'book #1',
    author: 'author_1',
    year: '1803-1885',
  },
  {
    key: '2',
    book: 'book #2',
    author: 'author_2',
    year: '1780-1822',
  },
  {
    key: '3',
    book: 'book #3',
    author: 'author_3',
    year: '1811-1857',
  },
  {
    key: '4',
    book: 'book #4',
    author: 'author_4',
    year: '1866-1904',
  }
];
const col=[
  {
    title: 'Наименование книги',
    dataIndex: 'book',
  },
  {
    title: 'Автор(ы)',
    dataIndex: 'author',
    render: text => <a href={text}>{text}</a>,
  },
  {
    title: 'Годы жизни',
    dataIndex: 'year',
  },
];

function App() {
  return (
    <Table dataSource={data} columns={col} />
  );
}
//Sconsole.log(data.length);
export default App;
