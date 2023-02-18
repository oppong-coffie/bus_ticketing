import { Col, Row, Table } from 'antd'
import Column from 'antd/es/table/Column'
import React from 'react'

const Report = () => {
    const data =[
        {
            "plate": "GT 7877-22",
            "start": "5:30",
            "end": "3:40",
            "passengers": "45",
            "id": "1"
        },
        {
            "plate": "GT 7877-22",
            "start": "5:30",
            "end": "3:40",
            "passengers": "45",
            "id": "2"
        },
        {
            "plate": "GT 7877-22",
            "start": "5:30",
            "end": "3:40",
            "passengers": "45",
            "id": "3"
        },
        {
            "plate": "GT 7877-22",
            "start": "5:30",
            "end": "3:40",
            "passengers": "45",
            "id": "4"
        },
    ]
  return (
    <div>
      <div className='grid grid-cols-2 gap-2'>
        <div>
         <Table
        dataSource={data}
        
        >
            <Column title="Bus Number" dataIndex="plate"></Column>
            <Column title="Start Time" dataIndex="start"></Column>
            <Column title="End Time" dataIndex="end"></Column>
            <Column title="Passengers" dataIndex="passengers"></Column>
        </Table>
        </div>
        <Col>
        <Table
        dataSource={data}
        
        >
            <Column title="ID" dataIndex="id"></Column>
            <Column title="Bus Number" dataIndex="plate"></Column>
            <Column title="Start Time" dataIndex="start"></Column>
            <Column title="End Time" dataIndex="end"></Column>
            <Column title="Passengers" dataIndex="passengers"></Column>
        </Table>
        </Col>
      </div>
    </div>
  )
}

export default Report
