import React from 'react';
import ReactTable from "react-table";
import"react-table/react-table.css";


import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;


class PO extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            posts : [],
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3000/api/v1/project-po/'+this.props.id , { method: 'GET' , headers:{
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
            Header: "Start",
            accessor: "start",
          },
          {
            Header: "Title",
            accessor: "title",
          },
          {
            Header: "Project Type",
            accessor: "projectType",
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
  
  export default PO;
