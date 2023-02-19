import React from 'react';
import { Card, Layout, Row, Col, Divider, Table } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
  import {
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
    Tooltip,
    Legend
  } from "recharts";

const Dash_content = () => {
    const { Sider, Content, Header, Footer } = Layout;
    const { Column } = Table;

    const graphdata = [
        {
          name: "JAN",
          uv: 2500,
        },
        {
          name: "FEB",
          uv: 3000,
        },
        {
          name: "MAR",
          uv: 2000,
        },
        {
          name: "APR",
          uv: 2780,
        },
        {
          name: "MAY",
          uv: 1890,
        },
        {
          name: "JUN",
          uv: 2390,
        },
        {
          name: "JUL",
          uv: 3490,
        },
        {
          name: "AUG",
          uv: 1490,
        },
        {
          name: "SEP",
          uv: 3490,
        },
        {
          name: "OCT",
          uv: 2717,
        },
        {
          name: "NOV",
          uv: 2740,
        },
        {
          name: "DEC",
          uv: 3260,
        },
      ];
      //query paarameter
    
      const data = [
        {
          name: "Oppong",
          number: "GT 2554-22",
          time: "12:30",
        },
        {
          name: "Oppong",
          number: "GT 2554-22",
          time: "1:30",
        },
        {
          name: "Oppong",
          number: "GT 2554-22",
          "time:": "2:20",
        },
      ];
    
      const bookingsData = [
        {
          name: "Total Booked",
          hostels: 32,
          fill: "#05f",
        },
        {
          name: "Checked In",
          hostels: 24,
          fill: "#0f5",
        },
        {
          name: "Checked Out",
          hostels: 8,
          fill: "#f05",
        },
      ];
  return (
    <div>
      <div className="bg-violet-900 text-start placeholder text-lg p-2 text-violet-300 font-bold">Admin</div>
       <div className="grid grid-cols-3 p-5 gap-3">
              <Card className="bg-blue-300">
                <Row>
                  <Col
                    className="text-red-500 font-extrabold text-7xl"
                    span={6}
                  >
                    <PhoneOutlined />
                  </Col>
                  <Col className="text-red-500 font-bold" span={18}>
                    <h2 className="text-red-500 text-6xl">120</h2>
                    <h2>Total Admin</h2>
                  </Col>
                </Row>
              </Card>
              <Card className="bg-blue-300">
                <Row>
                  <Col
                    className="text-red-500 font-extrabold text-7xl"
                    span={6}
                  >
                    <PhoneOutlined />
                  </Col>
                  <Col className="text-red-500 font-bold" span={18}>
                    <h2 className="text-red-500 text-6xl">3950</h2>
                    <h2>Total Customers</h2>
                  </Col>
                </Row>
              </Card>
              <Card className="bg-blue-300">
                <Row>
                  <Col
                    className="text-red-500 font-extrabold text-7xl"
                    span={6}
                  >
                    <PhoneOutlined />
                  </Col>
                  <Col className="text-red-500 font-bold" span={18}>
                    <h2 className="text-red-500 text-6xl">120</h2>
                    <h2>Total Bus</h2>
                  </Col>
                </Row>
              </Card>
            </div>
            <div className="grid grid-cols-4 p-5 gap-3">
              <Card className="h-28 bg-blue-300">
                <Row>
                  <Col
                    className="text-red-500 font-extrabold text-5xl"
                    span={6}
                  >
                    <PhoneOutlined />
                  </Col>
                  <Col className="text-red-500 font-bold" span={18}>
                    <h2 className="text-red-500 text-4xl">120</h2>
                    <h2>Total Bus</h2>
                  </Col>
                </Row>
              </Card>
              <Card className="h-28 bg-blue-300">
                <Row>
                  <Col
                    className="text-red-500 font-extrabold text-5xl"
                    span={6}
                  >
                    <PhoneOutlined />
                  </Col>
                  <Col className="text-red-500 font-bold" span={18}>
                    <h2 className="text-red-500 text-4xl">120</h2>
                    <h2>Total Bus</h2>
                  </Col>
                </Row>
              </Card>
              <Card className="h-28 bg-blue-300">
                <Row>
                  <Col
                    className="text-red-500 font-extrabold text-5xl"
                    span={6}
                  >
                    <PhoneOutlined />
                  </Col>
                  <Col className="text-red-500 font-bold" span={18}>
                    <h2 className="text-red-500 text-4xl">120</h2>
                    <h2>Total Bus</h2>
                  </Col>
                </Row>
              </Card>
              <Card className="shadow-xl h-28 bg-blue-300">
                <Row>
                  <Col
                    className="text-red-500 font-extrabold text-5xl"
                    span={6}
                  >
                    <PhoneOutlined />
                  </Col>
                  <Col className="text-red-500 font-bold" span={18}>
                    <h2 className="text-red-500 text-4xl">120</h2>
                    <h2>Total Bus</h2>
                  </Col>
                </Row>
              </Card>
            </div>

            <Divider />

            <div className="grid grid-cols-2 gap-5">
              <div className="">
                <div className="rounded-2xl bg-white dark:bg-gray-800 p-3">
                  <h3 className="text-xl md:text-2xl pl-5 md:mb-4 text-gray-500 dark:text-gray-200 font-poppins">
                    Hostel Bookings
                  </h3>
                  <ResponsiveContainer width={"100%"} className="!h-[15rem]">
                    <RadialBarChart
                      data={bookingsData}
                      barSize={15}
                      cx="50%"
                      cy="40%"
                      innerRadius="30%"
                      outerRadius="100%"
                    >
                      <RadialBar
                        dataKey="hostels"
                        minAngle={15}
                        background
                        label={{
                          position: "insideStart",
                          fill: "#fff",
                        }}
                      />
                      <Legend iconSize={15} />
                      <Tooltip />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="">
                <Table
                  dataSource={data}
                  className="dark:bg-gray-800 !rounded-lg"
                >
                  <Column
                    title="ID"
                    className="font-poppins w-12 dark:!text-slate-300 dark:!bg-gray-800"
                    dataIndex="id"
                    key="id"
                  />
                  <Column
                    title="NAME"
                    className="font-poppins w-12 dark:!text-slate-300 dark:!bg-gray-800"
                    dataIndex="name"
                    key="name"
                  />
                  <Column
                    title="NUMBER PLATE"
                    className="font-poppins w-12 dark:!text-slate-300 dark:!bg-gray-800"
                    dataIndex="number"
                    key="number"
                  />
                  <Column
                    title="TIME"
                    className="font-poppins w-12 dark:!text-slate-300 dark:!bg-gray-800"
                    dataIndex="time"
                    key="time"
                  />
                </Table>
              </div>
           
          
     
      
    </div>
    </div>
  )
}

export default Dash_content
