import React from 'react';
import 'antd/dist/antd.css';

import { Tabs, Select } from 'antd';
import { Layout } from 'antd';
import Submissions from './Submissions';
import Interviews from './Interviews';
import PO from './PO';
const { Header, Content, Sider } = Layout;


const { TabPane } = Tabs;
const { Option } = Select;


class Popover extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        tabPosition: 'right',
      };
    
      changeTabPosition = tabPosition => {
        this.setState({ tabPosition });
      };

    render() {
        return(
       <div>
         <Layout>
        
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 560,
          }}
        >
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="Submissions" key="1">
            <Submissions id={this.props.id}></Submissions>
          </TabPane>
          <TabPane tab="Interviews" key="2">
            <Interviews id={this.props.id}></Interviews>
          </TabPane>
          <TabPane tab="P O" key="3">
            <PO id={this.props.id}></PO>
          </TabPane>
        </Tabs>
      
          
        </Content>
      </Layout>
     </div>
        );      
    }
}

export default Popover;