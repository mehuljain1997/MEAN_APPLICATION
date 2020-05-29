import React from 'react';
import 'antd/dist/antd.css';
import ReactTable from "react-table";
import"react-table/react-table.css";
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;




class SubmissionList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      posts : [],
      
    };
    
}

componentDidMount() {
  fetch('http://127.0.0.1:3000/api/v1/marketingsub-list', { method: 'GET' , headers:{
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow_Credentials": true
  }
})
.then(response => response.json()).catch(function() {
  console.log("error");
})
.then(posts => {
  console.log("posts",posts)
  this.setState({ posts: posts })
})
}

    render() {
      const columns = [
        {
          Header: "Id",
          accessor: "id",
        },
        {
          Header: "Marketer Firstname",
          accessor: "first_name",
        },
        {
          Header: "Marketer Lastname",
          accessor: "last_name",
        },
        {
          Header: "Submission Count",
          accessor: "subcount",
        },
      ]
        return(
          <div>
            {/* <Router>
       <Route exact path="/clist" component={Clist} />
       <Route exact path="/graph" component={Dashboard} />
     
            <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '54px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Contact</Menu.Item>
        <Menu.Item key="3">Notifications</Menu.Item>
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
            <Menu.Item key="1"><Link to="/graph"> Graph View</Link></Menu.Item>
            <Menu.Item key="2">List View </Menu.Item>
            
          </SubMenu>
          
          
          <Menu.Item key="3">
              <Icon type="user" />
              <span><Link to="/clist">Consultant</Link></span>
          </Menu.Item>
        </Menu>
      </Sider> */}
      <Layout style={{ padding: '20px 20px 20px' }}>
        
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 560,
          }}
        >
        
        <div>
        <ReactTable columns={columns} data={this.state.posts}  />
        </div>
      </Content>
      </Layout>
    {/* </Layout>
  </Layout>
  </Router> */}
  </div>
            
        );
    }
}

export default SubmissionList;