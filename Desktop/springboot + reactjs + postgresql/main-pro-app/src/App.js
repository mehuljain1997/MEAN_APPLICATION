
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Icon } from 'antd';
import Dashboard from './component/Dashboard';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends React.Component  {
  
    constructor() {
        super()
    }
    render() {
        return(
            <Dashboard/>
        );
    }
}


export default App;
