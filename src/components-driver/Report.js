import { Table, Col, Row, Card } from 'antd';
import {PhoneOutlined} from '@ant-design/icons'
import Column from 'antd/es/table/Column'
import React from 'react'

const Report = () => {
    const reportdata = [
        {
            "id": 1,
            "name": "Oppong Coffie",
            "mobile": 23346414197,
            "from": "Efiekuma",
            "to": "Accra",
            "seat": 24,
        },
        {
            "id": 2,
            "name": "Ata Coffie",
            "mobile": 23346414197,
            "from": "Efiekuma",
            "to": "Accra",
            "seat": 24,
        },
        {
            "id": 3,
            "name": "Emmanuel Coffie",
            "mobile": 23346414197,
            "from": "Efiekuma",
            "to": "Accra",
            "seat": 24,
        },
        {
            "id": 4,
            "name": "vincent Coffie",
            "mobile": 23346414197,
            "from": "Efiekuma",
            "to": "Accra",
            "seat": 24,
        },
        {
            "id": 5,
            "name": "Yaa Ataa",
            "mobile": 23346414197,
            "from": "Efiekuma",
            "to": "Accra",
            "seat": 24,
        },
        {
            "id": 6,
            "name": "Janet Ahenkorah",
            "mobile": 23346414197,
            "from": "Efiekuma",
            "to": "Accra",
            "seat": 24,
        }
    ]
  return (
    <div>

<div className="grid grid-cols-4 gap-3">
              
              <Card className="shadow-lg h-28 bg-gradient-to-br from-yellow-600 to bg-pink-600">
                <Row>
                  <Col
                    className="text-white font-extrabold text-5xl"
                    span={6}
                  >
                    <PhoneOutlined />
                  </Col>
                  <Col className="text-white font-bold" span={18}>
                    <h2 className="text-white text-4xl">120</h2>
                    <h2>Passengers</h2>
                  </Col>
                </Row>
              </Card>
              <Card className="shadow-lg h-28 bg-gradient-to-tr from-yellow-700 to bg-pink-700">
                <Row>
                  <Col
                    className="text-white font-extrabold text-5xl"
                    span={6}
                  >
                    <PhoneOutlined />
                  </Col>
                  <Col className="text-white font-bold" span={18}>
                    <h2 className="text-white text-4xl">120</h2>
                    <h2>Amount</h2>
                  </Col>
                </Row>
              </Card>
              <Card className="shadow-lg h-28 bg-gradient-to-r from-yellow-300 to bg-pink-300">
                <Row>
                  <Col
                    className="text-white font-extrabold text-5xl"
                    span={6}
                  >
                    <PhoneOutlined />
                  </Col>
                  <Col className="text-white font-bold" span={18}>
                    <h2 className="text-white text-4xl">120</h2>
                    <h2>Set off Time</h2>
                  </Col>
                </Row>
              </Card>
              <Card className="shadow-lg h-28 bg-gradient-to-tl from-yellow-700 to bg-pink-300">
                <Row>
                  <Col
                    className="text-white font-extrabold text-5xl"
                    span={6}
                  >
                    <PhoneOutlined />
                  </Col>
                  <Col className="text-white font-bold" span={18}>
                    <h2 className="text-white text-4xl">120</h2>
                    <h2>Arrived Time:</h2>
                  </Col>
                </Row>
              </Card>
            </div>

            <div className="">
                <Table dataSource={reportdata}>
                    <Column dataIndex="id" title="ID"></Column>
                    <Column dataIndex="name" title="Name"></Column>
                    <Column dataIndex="mobile" title="Mobile"></Column>
                    <Column dataIndex="seat" title="Seat"></Column>
                    <Column dataIndex="from" title="From"></Column>
                    <Column dataIndex="to" title="To"></Column>
                </Table>
            </div>
      
    </div>
  )
}

export default Report
