import { Table, Space } from 'antd'
import Column from 'antd/es/table/Column'
import React from 'react'

const Payments = () => {
    const data = [
       
        {
            "Name": "Oppong Coffie",
            "amount": "GHC 500",
            "method": "Mobile Money",
            "time": "7:00",
            "seat": 24
        },
        {
            "Name": "Oppong Emmanuel",
            "amount": "GHC 500",
            "method": "Mobile Money",
            "time": "7:00",
            "seat": 4
        },
        {
            "Name": "Ata Coffie",
            "amount": "GHC 500",
            "method": "Mobile Money",
            "time": "7:00",
            "seat": 10
        },
        {
            "Name": "Kofi Coffie",
            "amount": "GHC 500",
            "method": "Mobile Money",
            "time": "7:00",
            "seat": 44
        },
        {
            "Name": "Oppong Coffie",
            "amount": "GHC 500",
            "method": "Mobile Money",
            "time": "7:00",
            "seat": 12
        }
    ]
  return (
    <div className='bg-blue-400'>

<div className="p-3">
     <Table dataSource={data}>
            <Column title="Name" dataIndex="Name" />
            <Column title="Amount" dataIndex="amount" />
            <Column title="method" dataIndex="method" />
            <Column title="saet" dataIndex="seat" />
         
        </Table>
</div>

       
      
    </div>
  )
}

export default Payments
