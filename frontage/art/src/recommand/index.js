import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MyCard from '../components/re-card/index';
import './index.css';

class Recommond extends Component {

    render() {
        return (
            <div className='mainDiv'>
                <Row style={{ marginTop: 30 }}>
                    <Col span={5} offset={3}>
                        <MyCard />
                    </Col>
                    <Col span={5} offset={1}>
                        <MyCard />
                    </Col>
                    <Col span={5} offset={1}>
                        <MyCard />
                    </Col>
                </Row>

                <Row style={{ marginTop: 30 }}>
                    <Col span={5} offset={3}>
                        <MyCard />
                    </Col>
                    <Col span={5} offset={1}>
                        <MyCard />
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default Recommond;