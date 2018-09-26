import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import './index.css';

class Recommond extends Component {

    render() {
        return (
            <div className='mainDiv'>
                <Row style={{ marginTop: 30 }}>
                    <Col span={5} offset={3}>
                        <Card style={{ height: 250 }}/>
                    </Col>
                    <Col span={5} offset={1}>
                        <Card style={{ height: 250 }}/>
                    </Col>
                    <Col span={5} offset={1}>
                        <Card style={{ height: 250 }}/>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default Recommond;