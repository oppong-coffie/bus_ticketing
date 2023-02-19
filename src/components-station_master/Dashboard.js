import React from "react";
import Register_Bus from './Register_Bus';
import { Card, Layout, Menu, Row, Col, Divider, Table } from "antd";
import Item from "antd/es/list/Item";

import { Routes, Route } from "react-router-dom"
import Dash_content from './Dash_content';
import View_busses from "./View_busses";
import Register_admin from "./Register_admin";
import Add from "./Add";
import Report from "./Report";
import {
  AppstoreFilled,
  AiOutlineTeam,
  AreaChartOutlined,
  MenuFoldOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {
  RadialBar,
  RadialBarChart,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";
import { icons } from "react-icons";
import { useNavigate } from "react-router";
import Title from "antd/es/skeleton/Title";
import View_admin from "./View_admin";
import Payments from "./Payments";

const Dashboard = () => {
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
    //query paarameter
    const navigate = useNavigate();

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
  const bardata = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "369",
        data: [3, 6, 9],
        backgroundColor: "red",
        borderwitdth: 1,
      },
    ],
  };
  return (
    <div>
      <Layout>
        <Header className="!bg-orange-900 flex items-center !h-[50px] justify-between sticky z-[5000] top-0">
          <h2 className="font-poppins text-2xl text-white font-bold">
            African World
          </h2>
        </Header>
        <Layout>
          <Sider
            collapsible
            collapsedWidth={0}
            breakpoint="sm"
            onBreakpoint={(broken) => {}}
            className="h-screen !fixed top-[50px] md:top-[0px] md:!relative dark:!bg-gray-800 !bg-orange-500 !border-none z-[900]"
            trigger={null}
          >
            <Menu
              mode="inline"
              className="antd-menu font-poppins h-screen dark:!bg-gray-800 font-bold text-slate-900 dark:text-slate-300 text-lg !border-none md:!bg-slate-50/0"
              onClick={({ key }) => {
                navigate(key)
            }}
            defaultSelectedKeys={window.location.pathname}
              items={[
                {
                  label: "Dashboard",
                  icon: <AppstoreFilled className="!text-lg" />,
                  key: "/",
                },
                {
                  icon: <AppstoreFilled className="!text-lg" />,
                  label: "On board",
                  key: "/add",
                },
                {
                  icon: <AppstoreFilled className="!text-lg" />,
                  label: "Payments",
                  key: "/payments",
                },
                {
                  icon: <AppstoreFilled className="!text-lg" />,
                  label: "Register Bus",
                  key: "/register_bus",
                },
                {
                  label: "All Bus",
                  icon: <HomeOutlined className="!text-lg" />,
                  key: "/view_busses",
                },
                {
                  label: "All Admins",
                  icon: <PhoneOutlined className="!text-lg" />,
                  key: "/view_admin",
                },
                {
                  label: "Add Admin",
                  icon: <PhoneOutlined className="!text-lg" />,
                  key: "/register_admin",
                },
                {
                  label: "Report",
                  icon: <PhoneOutlined className="!text-lg" />,
                  key: "/report",
                },
                {
                  label: "Logout",
                  icon: <PhoneOutlined className="!text-lg" />,
                  key: "/logout",
                },
              ]}
            ></Menu>
          </Sider>
          <Content>

            <Routes>
              <Route path="/" exact element={<Dash_content />}></Route>
              <Route path="register_bus" element={<Register_Bus />}></Route>
              <Route path="view_busses" element={<View_busses />}></Route>
              <Route path="register_admin" element={<Register_admin />}></Route>
              <Route path="view_admin" element={<View_admin />}></Route>
              <Route path="payments" element={<Payments />}></Route>
              <Route path="add" element={<Add />}></Route>
              <Route path="report" element={<Report />}></Route>
            </Routes>
            
          </Content>
          
        </Layout>
        <Footer>footer</Footer>
      </Layout>
      </div>
  );
};

export default Dashboard;
