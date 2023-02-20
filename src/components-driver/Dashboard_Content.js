import React from 'react'
import { Col, Row, Card, Divider, Table } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import Column from 'antd/es/table/Column';

const Dashboard_Content = () => {
  const onboard =[
    {
      "id": "1",
      "name": "Oppong Coffie",
      "start": "Takoradi",
      "end": "Accra"
    },
    {
      "id": "2",
      "name": "Oppong Coffie",
      "start": "Takoradi",
      "end": "Accra"
    },
    {
      "id": "3",
      "name": "Oppong Coffie",
      "start": "Takoradi",
      "end": "Accra"
    },
    {
      "id": "4",
      "name": "Oppong Coffie",
      "start": "Takoradi",
      "end": "Accra"
    },
  ];

  const waiting = [
    {
      "id": "1",
      "name": "Emmanuel Oppong",
      "phone": "0246414197",
      "location": "Effiekuma"
    },
    {
      "id": "1",
      "name": "Emmanuel Oppong",
      "phone": "0246414197",
      "location": "Effiekuma"
    },
    {
      "id": "1",
      "name": "Emmanuel Oppong",
      "phone": "0246414197",
      "location": "Effiekuma"
    },
    {
      "id": "1",
      "name": "Emmanuel Oppong",
      "phone": "0246414197",
      "location": "Effiekuma"
    },
    {
      "id": "1",
      "name": "Emmanuel Oppong",
      "phone": "0246414197",
      "location": "Effiekuma"
    },
    {
      "id": "1",
      "name": "Emmanuel Oppong",
      "phone": "0246414197",
      "location": "Effiekuma"
    },
    {
      "id": "1",
      "name": "Emmanuel Oppong",
      "phone": "0246414197",
      "location": "Effiekuma"
    },
    {
      "id": "1",
      "name": "Emmanuel Oppong",
      "phone": "0246414197",
      "location": "Effiekuma"
    }
  ]
  return (
    <div>
     <div className="grid grid-cols-4 gap-3">
              
              <Card className="shadow-lg h-28 bg-yellow-600">
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
              <Card className="shadow-lg h-28 bg-yellow-600">
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
              <Card className="shadow-lg h-28 bg-yellow-600">
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
              <Card className="shadow-lg h-28 bg-yellow-600">
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
            </div>

            <Divider />

            <div className='grid grid-cols-2 gap-9'>
              <div className='overflow-y-scroll h-72 bg-slate-400 p-2'>
                <h1 className='text-yellow-100 font-bold'>All Passengers</h1>
                <Table dataSource={onboard}>
                  <Column title="ID" dataIndex="id"/>
                  <Column title="Name" dataIndex="name"/>
                  <Column title="Start" dataIndex="start"/>
                  <Column title="End" dataIndex="end"/>
                </Table>
              </div>
              <div  className='overflow-y-scroll h-72 bg-yellow-300 p-3'>
              <h1 className='text-white font-bold'>Waiting Passengers</h1>
              <Table dataSource={waiting}>
                  <Column title="ID" dataIndex="id"/>
                  <Column title="Name" dataIndex="name"/>
                  <Column title="Start" dataIndex="phone"/>
                  <Column title="End" dataIndex="location"/>
                </Table>
              </div>
            </div>

<Divider />

            <div className="">
            <Card className="shadow-xl h-28 bg-gradient-to-tr from-green-400 to-yellow-300">
                <Row>
                  <Col
                    className="text-red-500 font-extrabold text-5xl"
                    span={6}
                  >
                    <PhoneOutlined />
                    <h2 className="text-red-400 text-sm text-end">Waiting...</h2>
                  </Col>
                  <Col className="text-red-500 font-bold" span={6}>
                    <h2 className="text-red-500 text-4xl">Effiekuma</h2>
                    <h2>120 Km</h2>
                  </Col>
                  <Col className="text-red-500 font-bold" span={12}>
                    <h2 className="text-red-500 text-3xl">Oppong</h2>
                    <h2 className="text-red-400">0246414197</h2>
                  </Col>
                </Row>
              </Card>
            </div>
    </div>
  )
}

export default Dashboard_Content;
