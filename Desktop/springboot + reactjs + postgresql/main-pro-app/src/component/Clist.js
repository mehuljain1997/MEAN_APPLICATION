import React from 'react';
import 'antd/dist/antd.css';
import ReactTable from "react-table";
import"react-table/react-table.css";
import Popover from './Popover';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;




  


class Clist extends React.Component {

    constructor(props) {
        super(props);
        this.state={
          posts : [],
          showcomponent: false,
          id:-1
        
        };
        this.onButtonClick=this.onButtonClick.bind(this);
        this.showPopover=this.showPopover.bind(this);
    }

    onButtonClick(id) {
      this.setState({ showcomponent : true,
      id:id
      }) 

    }
    showPopover() {
      document.getElementById('b').style.display = 'block';
      document.getElementById('a').style.display = 'none';
    }
    componentDidMount() {
      fetch('http://127.0.0.1:3000/api/v1/consultant', { method: 'GET' , headers:{
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
          Header: "Consultant Firstname",
          accessor: "first_name",
        },
        {
          Header: "Consultant Lastname",
          accessor: "last_name",
        },
        {
          Header: "SSN",
          accessor: "ssn",
        },
        {
          Header: "Recruiter Firstname",
          accessor: "recruiter_fname",
        },
        {
          Header: "Recruiter Lastname",
          accessor: "recruiter_lname",
        },
        {
          Header: 'Button',
          accessor:'id',
          Cell: row => (
           <div>
               <button onClick={() => this.onButtonClick(row.value)}>Details</button>
               {
                 this.state.showcomponent ? this.showPopover() : null
               }
           </div>
          )
        },
      ];
        return(
        
        
        
        
         <div>
       {/*<Route exact path="/list" component={List} />
       <Route exact path="/graph" component={Dashboard} /> */}
{/*      
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
            <Menu.Item key="2"><Link to="/list">List View </Link> </Menu.Item>
            
          </SubMenu>
          
          
          <Menu.Item key="3">
              <Icon type="user" />
              <span>Consultant</span>
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
        
        <div id="a">
        <ReactTable columns={columns} data={this.state.posts}  />
        </div>
        <div id="b">
          {this.state.showcomponent &&
          <Popover id={this.state.id}></Popover>}
        </div>
          
        </Content>
      </Layout>
      </div>
     );
    }
}

export default Clist;