import { Table } from 'antd';
import React from 'react';
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
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    address: `London, Park Lane no. ${i}`,
  });
}
const Dashboard = () => {
  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const onSelectChange = (newSelectedRowKeys) => {
  //   console.log('selectedRowKeys changed: ', selectedRowKeys);
  //   setSelectedRowKeys(newSelectedRowKeys);
  // };
  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  //   selections: [
  //     Table.SELECTION_ALL,
  //     Table.SELECTION_INVERT,
  //     Table.SELECTION_NONE,
  //     {
  //       key: 'odd',
  //       text: 'Select Odd Row',
  //       onSelect: (changableRowKeys) => {
  //         let newSelectedRowKeys = [];
  //         newSelectedRowKeys = changableRowKeys.filter((_, index) => {
  //           if (index % 2 !== 0) {
  //             return false;
  //           }
  //           return true;
  //         });
  //         setSelectedRowKeys(newSelectedRowKeys);
  //       },
  //     },
  //     {
  //       key: 'even',
  //       text: 'Select Even Row',
  //       onSelect: (changableRowKeys) => {
  //         let newSelectedRowKeys = [];
  //         newSelectedRowKeys = changableRowKeys.filter((_, index) => {
  //           if (index % 2 !== 0) {
  //             return true;
  //           }
  //           return false;
  //         });
  //         setSelectedRowKeys(newSelectedRowKeys);
  //       },
  //     },
  //   ],
  // };
  return <Table columns={columns} dataSource={data} />;
};

export default Dashboard