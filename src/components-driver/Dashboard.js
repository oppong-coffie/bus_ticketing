import React, {  } from 'react';
import { Routes, Route } from "react-router-dom"
import Dashboard_Content from './Dashboard_Content';
import { useNavigate } from "react-router";
import Profile from './Profile';
import Map from './Map';
import Report from './Report';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Payments from './Payments';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

   //query paarameter
   const navigate = useNavigate();

  return (
    <Layout>
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          onClick={({ key }) => {
            navigate(key)}}
            defaultSelectedKeys={window.location.pathname}
          items={[
            {
              key: '/',
              icon: <UserOutlined />,
              label: 'Dashboard',
            },
            {
              key: '/profile',
              icon: <UserOutlined />,
              label: 'Profile',
            },
            {
              key: 'Map',
              icon: <VideoCameraOutlined />,
              label: 'map',
            },
            {
              key: '/payments',
              icon: <UploadOutlined />,
              label: 'Payments',
            },
            {
              key: 'report',
              icon: <UploadOutlined />,
              label: 'Report',
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: 'Logout',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {/* START:: CONTENT INFOMATION */}
          {/* END:: CONTENT INFOMATION */}
          <Routes>
              <Route path="/" exact element={<Dashboard_Content />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="map" element={<Map />}></Route>
              <Route path="payments" element={<Payments />}></Route>
              <Route path="report" element={<Report />}></Route>
            </Routes>
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;