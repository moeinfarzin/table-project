import { Checkbox, Table } from 'antd';
import React from 'react';
const columns = [
    {
        title: ' ',
        width: 120,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',

    },


    {
        title: '1:00 AM',
        dataIndex: 'custom',
        key: '1',
        render: () => <Checkbox />

    },
    {
        title: '3:00 AM',
        dataIndex: 'custom',
        key: '2',
        render: () => <Checkbox />
    },
    {
        title: '5:00 Am',
        dataIndex: 'custom',
        key: '3',
        render: () => <Checkbox />
    },
    {
        title: '7:00 AM',
        dataIndex: 'custom',
        key: '4',
        render: () => <Checkbox />
    },
    {
        title: '9:00 AM',
        dataIndex: 'custom',
        key: '5',
        render: () => <Checkbox />
    },
    {
        title: '11:00 AM',
        dataIndex: 'custom',
        key: '5',
        render: () => <Checkbox />
    },
    {
        title: '1:00 PM',
        dataIndex: 'custom',
        key: '5',
        render: () => <Checkbox />
    },
    {
        title: '3:00 PM',
        dataIndex: 'custom',
        key: '5',
        render: () => <Checkbox />
    },
    {
        title: '5:00 PM',
        dataIndex: 'custom',
        key: '5',
        render: () => <Checkbox />
    },
    {
        title: '7:00 PM',
        dataIndex: 'custom',
        key: '5',
        render: () => <Checkbox />
    },
    {
        title: '9:00 PM',
        dataIndex: 'custom',
        key: '5',
        render: () => <Checkbox />
    },
    {
        title: '11:00 PM',
        dataIndex: 'custom',
        key: '5',
        render: () => <Checkbox />
    },

];
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