import React from 'react'
import {  Row, Col, Form, Input, Button} from 'antd';
import bus from '../images/bus.jpg';
import { CompassTwoTone, UserOutlined } from '@ant-design/icons';


const Register_Bus = () => {
  return (
    <div className='bg-hero bg-cover'>
      <h1 className='font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-black to-violet-100'>Bus Registration Center</h1>
       <Row className='pt-24 p-10 pb-44'>
      <Col className='opacity-70' span={8}> <img src={bus} /> </Col>
      <Col className='bg-violet-400' span={16}>

{/*START:: REGISTRATION FORMS */}
<div className="shadow-2x p-5 m-2 ">
   <Form
        layout='vertical'
        >
          <Form.Item
           tooltip={{ title: 'Tooltip with customize icon'}}
          label="Driver's Name"
          prefix={<UserOutlined />}
          rules={
            require
          }
          >
            <Input placeholder="Basic usage" suffix={<CompassTwoTone/>}/>
          </Form.Item>
          <Form.Item
           tooltip={{ title: 'Tooltip with customize icon'}}
          label="Bus Name"
          prefix={<UserOutlined />}
          rules={
            require
          }
          >
            <Input placeholder="Basic usage" suffix={<CompassTwoTone/>}/>
          </Form.Item>
          
          
          <div className="grid grid-cols-2 gap-5">

            <Form.Item
          label="Phone Number"
          rules={
            require
          }
          >
            <Input />
          </Form.Item>
          <Form.Item
          label="Bus Number"
          rules={
            require
          }
          >
            <Input />
          </Form.Item>
          </div>
          
          <Form.Item>
            <Button>Submit</Button>
          </Form.Item>
        </Form>
</div>
       
      </Col>
    </Row>
      
    </div>
  )
}

export default Register_Bus
