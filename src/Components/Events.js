import React from 'react';
import { Component } from 'react';
import './CSS Files/Events.css';
import { Button} from 'antd';
import {Link } from "react-router-dom";
import { Card, Col, Row } from 'antd';

class Leave extends Component
{
    render(){
        return(
            <div className='events'>
                <h1 className='P_title'>Events</h1>
                <hr></hr>
                <br></br>
                <br></br>
                <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://media.istockphoto.com/photos/open-laptop-with-white-digital-tablet-and-smartphone-on-desk-from-picture-id934679404?k=6&m=934679404&s=170667a&w=0&h=7nygctV5Q6Zys5zCqgqHjt2OA-WzB3GJpJ-4mgv9AAE=" />}
  >
      <h2>Product Lauch</h2>
      <p>15-02-2021 10:00</p>
        <Button className='btn1'type="primary" ghost>
            <Link to="/">View More</Link>
        </Button>
  </Card>
      </Col>
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://media.istockphoto.com/photos/open-laptop-with-white-digital-tablet-and-smartphone-on-desk-from-picture-id934679404?k=6&m=934679404&s=170667a&w=0&h=7nygctV5Q6Zys5zCqgqHjt2OA-WzB3GJpJ-4mgv9AAE=" />}
  >
      <h2>Product Lauch</h2>
      <p>15-02-2021 10:00</p>
        <Button className='btn1'type="primary" ghost>
            <Link to="/">View More</Link>
        </Button>
  </Card>
      </Col>
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://media.istockphoto.com/photos/open-laptop-with-white-digital-tablet-and-smartphone-on-desk-from-picture-id934679404?k=6&m=934679404&s=170667a&w=0&h=7nygctV5Q6Zys5zCqgqHjt2OA-WzB3GJpJ-4mgv9AAE=" />}
  >
      <h2>Product Lauch</h2>
      <p>15-02-2021 10:00</p>
        <Button className='btn1'type="primary" ghost>
            <Link to="/">View More</Link>
        </Button>
  </Card>
      </Col>
    </Row>
  </div>,
            </div>
        )
    }
}

export default Leave
