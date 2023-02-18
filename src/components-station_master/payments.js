import { Table, Space } from 'antd'
import Column from 'antd/es/table/Column'
import React from 'react'

const Payments = () => {
    const data = [
       
        {
            "Name": "Oppong Coffie",
            "busname": "Cusmus",
            "Mobile": "233246414197",
            "time": "7:00"
        },
        {
            "Name": "Oppong Coffie",
            "busname": "Cusmus",
            "Mobile": "233246414197",
            "time": "7:00"
        },
        {
            "Name": "Oppong Coffie",
            "busname": "Cusmus",
            "Mobile": "233246414197",
            "time": "7:00"
        },
        {
            "Name": "Oppong Coffie",
            "busname": "Cusmus",
            "Mobile": "233246414197",
            "time": "7:00"
        },
        {
            "Name": "Oppong Coffie",
            "busname": "Cusmus",
            "Mobile": "233246414197",
            "time": "7:00"
        }
    ]
  return (
    <div>

        <Table dataSource={data}>
            <Column title="Name" dataIndex="Name" />
            <Column title="Bus Name" dataIndex="busname" />
            <Column title="Mobile" dataIndex="Mobile" />
            <Column title="Time" dataIndex="time" />
         
        </Table>
      
    </div>
  )
}

export default Payments
