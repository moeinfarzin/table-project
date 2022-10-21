
import { Button, Modal, Table } from 'antd';
import React, { useState } from 'react';

const columns = [
  {
    title: 'event name ',
    dataIndex: 'name',
  },

  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [];
for (let i = 1; i < 10; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    address: `London, Park Lane no. ${i}`,
  });
};



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
            <input className='eventaddress' placeholder='Events Address' type="text" />
          </div>
        </Modal>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
    //add events

  )
};

export default Dashboard