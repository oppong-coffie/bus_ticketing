import { Table, Space } from 'antd'
import Column from 'antd/es/table/Column'
import React from 'react'

const View_busses = () => {
    const data = [
       
        {
            "drivername": "Oppong Coffie",
            "busname": "Cusmus",
            "Mobile": "233246414197",
            "plate": "GT 7877-22"
        },
        {
            "drivername": "Oppong Coffie",
            "busname": "Cusmus",
            "Mobile": "233246414197",
            "plate": "GT 7877-22"
        },
        {
            "drivername": "Oppong Coffie",
            "busname": "Cusmus",
            "Mobile": "233246414197",
            "plate": "GT 7877-22"
        },
        {
            "drivername": "Oppong Coffie",
            "busname": "Cusmus",
            "Mobile": "233246414197",
            "plate": "GT 7877-22"
        }
    ]
  return (
    <div>

        <Table dataSource={data}>
            <Column title="Driver's Name" dataIndex="drivername" />
            <Column title="Bus Name" dataIndex="busname" />
            <Column title="Mobile" dataIndex="Mobile" />
            <Column title="PLate" dataIndex="plate" />
            <Column
      title="Action"
      key="action"
      render={() => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      )}
    />
        </Table>
      
    </div>
  )
}

export default View_busses
