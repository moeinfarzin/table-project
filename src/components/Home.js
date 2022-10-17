import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },

  {
    title: 'saturday',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'sonday',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'monday',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'tuesday',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'wednesday',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'thursday',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'friday',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },

  
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const Home = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />
);
export default Home;