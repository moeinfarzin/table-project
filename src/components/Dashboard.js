
import { Button, Modal, Space, Table } from 'antd';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const columns = [
  {
    title: 'Event',
    dataIndex: 'name',
    key: 'name',
    render: (name,{id} ) => <Link to={`/dailyevent/${id}`}>{name}</Link>
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <button>Delete</button>
      </Space>
    ),
  },
];
const data = [
  {
    id:1,
    key: '1',
    name: 'تجمع در دانشگاه ',
    address: 'iran',

  },
  {
    id:2,
    key: '2',
    name: 'تجمع در میدان ولیعصر',
    address: 'tehran valiasr',

  },
  {
    id:3,
    key: '3',
    name: 'حمله به بیت رهبری',
    address: 'London No. 1 Lake Park',
  },
  {
    id:4,
    key: '4',
    name:  'حمله  به اوین',
    address: 'Sidney No. 1 Lake Park',
  },
];



const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div>
        <Button type="primary" onClick={showModal}>
          Add Events
        </Button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="addevents">
            <input className='eventname' placeholder='Events Name' type="text" />
            <br />
            <input className='eventaddress' placeholder='Events Address' type="text" />
          </div>
        </Modal>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />;
      </div>
    </div>
    //add events

  )
};

export default Dashboard