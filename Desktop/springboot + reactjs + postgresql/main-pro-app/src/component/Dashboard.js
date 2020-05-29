import React from 'react';

import { Route, Link, NavLink, HashRouter ,BrowserRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.css';

import Clist from './Clist';
import SubmissionList from './SubmissionList';
import Chart from './Chart';
import InterviewList from './InterviewList';
import POList from './POList'


import { Layout, Menu, Icon } from 'antd';
import Layouts from './Layouts';



const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// const routing = (
//   <Router>
//     <div>
//       <Route path="/clist" component={Clist} />
//       <Route path="/list" component={List} />
//       <Route path="/popover" component={Popover} />
//     </div>
//   </Router>
// )

class Dashboard extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
          <HashRouter>
       
     
            <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '54px' }}
      >
        <Menu.Item key="1"><NavLink to="/graph">Home</NavLink></Menu.Item>
        
        
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                Marketer
              </span>
            }
          >
            <Menu.Item key="1"><NavLink to="/graph">Graph View</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/list"> Marketer Submissions </NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to="/intlist"> Marketer Interviews </NavLink></Menu.Item>
            <Menu.Item key="4"><NavLink to="/polist"> Marketer Po </NavLink></Menu.Item>
            
            
          </SubMenu>
          
          
          <Menu.Item key="3">
              <Icon type="user" />
              <span><NavLink to="/clist">Consultant</NavLink></span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '20px 20px 20px' }}>
        
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 560,
          }}
        >
        
       <Route exact path="/" component={Layouts} />
       <Route exact path="/graph" component={Chart} />
       <Route exact path="/clist" component={Clist} />
       <Route exact path="/list" component={SubmissionList} />
       <Route exact path="/intlist" component={InterviewList} />
       <Route exact path="/polist" component={POList} />
          
          
        </Content>
      </Layout>
    </Layout>
  </Layout>
  </HashRouter>
        );
    }
}

export default Dashboard;