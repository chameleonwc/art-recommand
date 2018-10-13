import React, { Component } from 'react';
import { Card } from 'antd';
import './index.css';

const mock = {
    title: '一副山水画',
    cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    cover1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538154758687&di=7f2316b5a83871324c93a12b978b8ed7&imgtype=0&src=http%3A%2F%2Fimg2.ph.126.net%2FFtLavPpQ3tPi6RUJ5s7Ckw%3D%3D%2F6632426762073984518.jpg',
    author: '王琛文'
};

class MyCard extends Component {

    render() {
        return (<div>
            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                    <img alt="example" width="100%" src={mock.cover1} />
                </div>
                <div className="custom-card">
                    <h3>{mock.title}</h3>
                    <p>by {mock.author}</p>
                </div>
            </Card>
        </div>);
    }
}

export default MyCard;