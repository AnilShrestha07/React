import {  Typography, Table} from 'antd';
import { useState } from 'react';
import {FaCartShopping, FaDollarSign, FaSitemap, FaUserGroup} from "react-icons/fa6"
 


const columns = [
  {
    title: 'User Name',
    dataIndex: 'name',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Amount(In Npr.)',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '#',
    key: 'action',
  },
];
const UserDashboard = ()=>{
    const [data] = useState([
        {
          _id: 12345,
          name: "Anil",
          email: "anil@gmail.com",
          quantity: 12,
          amount: 1425,
          status: 'active',
        },
        {
          _id: 12345,
          name: "Anil",
          email: "anil@gmail.com",
          quantity: 12,
          amount: 1425,
          status: 'active',
        },
        {
          _id: 12345,
          name: "Anil",
          email: "anil@gmail.com",
          quantity: 12,
          amount: 1425,
          status: 'active',
        },
       
      ]);
    return(
        <>
        <div className='bg-white w-full p-4 '>

<div className='flex gap-5 mb-5 flex-wrap'>
  <div className='flex-1  bg-teal-800 flex  rounded-md flex-col '>
    <div className='flex flex-1 justify-center  items-center '>
      <div className='flex-1/3 flex h-full justify-center text-white text-5xl items-center  border-r-2 border-gray-100 p-4'><FaUserGroup /></div>
      <div className='flex-2/3 h-full flex flex-col'>
        <div className='flex-1 flex font-semibold text-white text-2xl h-full justify-center items-center border-b-2 border-gray-100 p-4'>Users</div>
        <div className='flex-1 flex p-4 h-full text-2xl text-white justify-center items-center'>200000</div>
      </div>
    </div>
  </div>
  <div className='flex-1  bg-red-800 flex  rounded-md flex-col '>
    <div className='flex flex-1 justify-center  items-center '>
      <div className='flex-1/3 flex h-full justify-center text-white text-5xl items-center  border-r-2 border-gray-100 p-4'><FaSitemap/></div>
      <div className='flex-2/3 h-full flex flex-col'>
        <div className='flex-1 flex font-semibold text-white text-2xl h-full justify-center items-center border-b-2 border-gray-100 p-4'>Users</div>
        <div className='flex-1 flex p-4 h-full text-2xl text-white justify-center items-center'>200000</div>
      </div>
    </div>
  </div>
  <div className='flex-1  bg-yellow-800 flex  rounded-md flex-col '>
    <div className='flex flex-1 justify-center  items-center '>
      <div className='flex-1/3 flex h-full justify-center text-white text-5xl items-center  border-r-2 border-gray-100 p-4'><FaDollarSign /></div>
      <div className='flex-2/3 h-full flex flex-col'>
        <div className='flex-1 flex font-semibold text-white text-2xl h-full justify-center items-center border-b-2 border-gray-100 p-4'>Users</div>
        <div className='flex-1 flex p-4 h-full text-2xl text-white justify-center items-center'>200000</div>
      </div>
    </div>
  </div>
  <div className='flex-1  bg-blue-800 flex  rounded-md flex-col '>
    <div className='flex flex-1 justify-center  items-center '>
      <div className='flex-1/3 flex h-full justify-center text-white text-5xl items-center  border-r-2 border-gray-100 p-4'><FaCartShopping/></div>
      <div className='flex-2/3 h-full flex flex-col'>
        <div className='flex-1 flex font-semibold text-white text-2xl h-full justify-center items-center border-b-2 border-gray-100 p-4'>Users</div>
        <div className='flex-1 flex p-4 h-full text-2xl text-white justify-center items-center'>200000</div>
      </div>
    </div>
  </div>
</div>
  <div className='flex justify-center h-10 rounded-sm text-center my-10 bg-gradient-to-r from-red-100 to-red-400'>
<Typography.Title level={2}>Latest Order</Typography.Title>

</div>
<Table dataSource={data} columns={columns} />;

</div>
        </>
    )
}

export default UserDashboard