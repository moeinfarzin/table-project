import { Checkbox, Table, message } from 'antd';
import React from 'react';


const success = () => {
    message.success('success');
  };
  
  
const hours = [...Array(16).keys()].map((x) => (
    {
        title: x + 8 + (8 + x >= 12 ? ":00 PM" : ":00 AM"),
        dataIndex: 'custom',
        key: x,
        render: () => <Checkbox onClick={success} />

    }
))

console.log(hours)

const columns = [
    {
        title: ' ',
        width: 120,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',

    },

    ...hours

];
console.log(columns)
const data = [
    {
        key: '1',
        name: 'sunday',
        address: 'New York Park',
    },
    {
        key: '2',
        name: 'monday',
        address: 'London Park',
    },
    {
        key: '3',
        name: 'tuesday',
        address: 'London Park',
    },
    {
        key: '4',
        name: 'wednesday',
        address: 'London Park',
    },
    {
        key: '5',
        name: 'thursday',
        address: 'London Park',
    },
    {
        key: '6',
        name: 'friday',
        address: 'London Park',
    },
    {
        key: '7',
        name: 'saturday',
        address: 'London Park',
    },
];
const Home = () => (
    <Table columns={columns} dataSource={data} scroll={{ x: 1300, }} />
);
export default Home;