
import { Button, Modal, Space, Table } from 'antd';
import { DeleteFilled } from '@ant-design/icons'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Dashboard.css'
import { Input } from 'antd';


const { TextArea } = Input;
const onChange = (e) => {
  console.log('Change:', e.target.value);
};
const columns = [
  {
    title: 'Event',
    dataIndex: 'name',
    key: 'name',
    render: (name, { id }) => <Link to={`/dailyevent/${id}`}>{name}</Link>
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
        <DeleteFilled />
      </Space>
    ),
  },
];
const data = [
  {
    id: 1,
    key: '1',
    name: 'تجمع در دانشگاه ',
    address: 'iran',

  },
  {
    id: 2,
    key: '2',
    name: 'تجمع در میدان ولیعصر',
    address: 'tehran valiasr',

  },
  {
    id: 3,
    key: '3',
    name: 'حمله به بیت رهبری',
    address: 'London No. 1 Lake Park',
  },
  {
    id: 4,
    key: '4',
    name: 'حمله  به اوین',
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
    <div className='container'>
      <div className='btn-container'>
        <Button type="primary" onClick={showModal}>
          Add Events
        </Button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="addevents">
            <Input showCount maxLength={20} onChange={onChange} />
            <br />
            <br />
            <TextArea showCount maxLength={100} onChange={onChange} />
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