import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';

import ReactTable from "react-table";
import"react-table/react-table.css";


import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;


class Interviews extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            posts : [],
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3000/api/v1/interview/'+this.props.id , { method: 'GET' , headers:{
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
            Header: "Firstname",
            accessor: "first_name",
          },
          {
            Header: "Lastname",
            accessor: "last_name",
          },
          {
            Header: "Title",
            accessor: "title",
          },
        ];
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
          
          <div>
          <ReactTable columns={columns} data={this.state.posts}  />
          </div>
          </Content>
        </Layout>
        </div>
       );
      }
  }
  
  export default Interviews;
