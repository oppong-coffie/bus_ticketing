import { Col, Row } from 'antd';
import React from 'react'

const Map = () => {
  return (
    <div>
      <div className="h-72 bg-gradient-to-br from-yellow-500 to-pink-600">MAP</div>
      <div className="">
        <Row className='gap-72'>
          <Col> <h1>10Km</h1></Col>
          <Col> <h1>50Mins</h1></Col>
        </Row>
       
        
      </div>
    </div>
  )
}

export default Map;
