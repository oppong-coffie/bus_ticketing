import { Table, Space } from 'antd'
import Column from 'antd/es/table/Column'
import React from 'react'
import { Button } from 'antd'

const View_admin = () => {
    const data = [
       
        {
            "id": "1",
            "name": "Oppong Coffie",
            "Mobile": "233246414197",
            "position": "Inspector"
        },
        {
            "id": "2",
            "name": "Oppong Coffie",
            "Mobile": "233246414197",
            "position": "Inspector"
        },
        {
            "id": "3",
            "name": "Oppong Coffie",
            "Mobile": "233246414197",
            "position": "Inspector"
        },
        {
            "id": "4",
            "name": "Oppong Coffie",
            "Mobile": "233246414197",
            "position": "Inspector"
        },
        {
            "id": "5",
            "name": "Oppong Coffie",
            "Mobile": "233246414197",
            "position": "Inspector"
        },
        {
            "id": "6",
            "name": "Oppong Coffie",
            "Mobile": "233246414197",
            "position": "Inspector"
        }
      
    ]
  return (
    <div>

        <Table dataSource={data}>
            <Column title="ID" dataIndex="id" />
            <Column title="NAME" dataIndex="name" />
            <Column title="Mobile" dataIndex="Mobile" />
            <Column title="POSITION" dataIndex="position" />
            <Column
      title="Action"
      key="action"
      render={() => (
        <Space size="middle">
          <a><Button className='shadow-lg bg-green-600' type="primary">Edit</Button></a>
          <a><Button className='shadow-lg bg-orange-500' type="secondary">Delete</Button></a>
        </Space>
      )}
    />
        </Table>
      
    </div>
  )
}

export default View_admin
