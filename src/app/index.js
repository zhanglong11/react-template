import React, {Component} from 'react';
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Main from '@Pages/Main';
import './style.less'

moment.locale('zh-cn');
export default class App extends Component {
    render() {
        return (<LocaleProvider locale={zh_CN}>
                <Main/>
        </LocaleProvider>)
    }
}