import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  import { scaleOrdinal } from 'd3-scale';
  import { schemeCategory10 } from 'd3-scale-chromatic';
  import 'antd/dist/antd.css';
  import { Menu, Dropdown, Button, Icon, message } from 'antd';

  

  
  import { Layout } from 'antd';
 
  
  
  
  
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  var url = "http://127.0.0.1:3000/api/v1/marketingsub-submission";
  

  
  const colors = scaleOrdinal(schemeCategory10).range();

  
 
  
  
  
  
  const getPath = (x, y, width, height) => `M${x},${y + height}
            C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
            Z`;
  
  const TriangleBar = (props) => {
    const {
      fill, x, y, width, height,
    } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  
  TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  };
  function Count() {};
  function handleMenuClick() {};

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          gdata : [],
          inter : []
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.Count=this.Count.bind(this);

    }

     handleMenuClick(e) {
      
      console.log('click', e.key);
      if (e.key==1)
      {
           url="http://127.0.0.1:3000/api/v1/marketingsub-submission";
           this.Count(url)
      }
      else if(e.key==2)
      {
           url="http://127.0.0.1:3000/api/v1/marketingsub-interview";
           this.Count(url)
      }
      else if (e.key==3)
      {
           url="http://127.0.0.1:3000/api/v1/marketingsub-po";
           this.Count(url)
      }
          
    }
    Count(url) {
      //this.url=url;
    fetch(url, { method: 'GET' , headers:{
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow_Credentials": true
      }
    })
    .then(response => response.json()).catch(function() {
      console.log("error");
    })
    .then(gdata => {
      console.log("gdata",gdata)
      this.setState({ gdata: gdata })
    })
    }

  componentDidMount() {
    this.Count(url);
    console.log(url);
      
  }

  
  componentWillUnmount(){
    console.log("unmounted");
  }
    
    render() {
      const menu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1">
            Submissions
          </Menu.Item>
          <Menu.Item key="2">
           
            Interviews
          </Menu.Item>
          <Menu.Item key="3">
            PO
          </Menu.Item>
        </Menu>
      );
      
        return(
        
        <div>
            
                <Dropdown overlay={menu}>
                    <Button>
                         Submissions <Icon type="down" />
                    </Button>
                </Dropdown>            
                <BarChart
                  width={800}
                  height={400}
                  data={this.state.gdata}
                  margin={{
                    top: 20, right: 30, left: 150, bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Bar dataKey="count" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                  {
                       this.state.gdata.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                      ))
                    }
                  </Bar>
                </BarChart>
                </div>
       
            );
    } 
}

export default Chart;

