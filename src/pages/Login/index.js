import React, {Component} from 'react';
import {Button, Input} from 'antd';

export default class Login extends Component {
    onPanelChange = () => {
        console.log(11)
    }

    render() {
        return (
            <div>
                <Input/>
                <Input/>
                <Button type='primary'>登录</Button>
            </div>
        )
    }
}