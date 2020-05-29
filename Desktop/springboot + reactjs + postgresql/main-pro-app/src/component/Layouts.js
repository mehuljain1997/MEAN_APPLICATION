import React from 'react';
import { Layout } from 'antd';
import Chart from './Chart';

const { Content } = Layout;


class Layouts extends React.Component {

    render() {
        return(
          
            <Layout style={{ padding: '20px 20px 20px' }}>
        
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 560,
          }}
        >
        
          <Chart></Chart>
          
        </Content>
      </Layout>
        );
    }
}

export default Layouts;