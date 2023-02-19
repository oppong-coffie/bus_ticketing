import React from 'react'
import {  Row, Col, Form, Input, Button} from 'antd';
import inspector from '../images/inspector.jpg';
import { CompassTwoTone, UserOutlined } from '@ant-design/icons';


const Register_Admin = () => {
  return (
    <div className=''>
      <h1 className='font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-black to-violet-500'>Bus Registration Center</h1>
       <Row className='pt-24 p-10 pb-44'>
      <Col className='p-2' span={8}> <img src={inspector} /> </Col>
      <Col className='bg-violet-400' span={16}>

{/*START:: REGISTRATION FORMS */}
<div className="shadow-lg rounded-2xl p-5 m-2 ">
   <Form
        layout='vertical'
        >
          <Form.Item
           tooltip={{ title: 'Full Name'}}
          label="Name"
          prefix={<UserOutlined />}
          rules={
            require
          }
          >
            <Input placeholder="Basic usage" suffix={<CompassTwoTone/>}/>
          </Form.Item>
          <Form.Item
           tooltip={{ title: 'Type Mobile Number with country code'}}
          label="Mobile Phone"
          rules={
            require
          }
          >
            <Input placeholder="Basic usage" suffix={<CompassTwoTone/>}/>
          </Form.Item>
          <Form.Item
           tooltip={{ title: 'Position of New Administrator'}}
          label="Position"
          prefix={<UserOutlined />}
          rules={
            require
          }
          >
            <Input placeholder="Basic usage" suffix={<CompassTwoTone/>}/>
          </Form.Item>
          
          
        
          <Form.Item>
            <Button type='primary' className='bg-violet-800 font-bold'>Submit</Button>
          </Form.Item>
        </Form>
</div>
       
      </Col>
    </Row>
      
    </div>
  )
}

export default Register_Admin
