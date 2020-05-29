import React from 'react';
import ReactTable from "react-table";
import"react-table/react-table.css";
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;


class Submissions extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            posts : [],
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3000/api/v1/marketingsub-vc/'+this.props.id , { method: 'GET' , headers:{
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
            Header: "Submission Id",
            accessor: "submission_id",
          },
          {
            Header: "Vendor name",
            accessor: "vendor",
          },
          {
            Header: "Job Location",
            accessor: "joblocation",
          },
          {
            Header: "Job Title",
            accessor: "job_Title",
          },
          {
            Header: "Marketer Firstname",
            accessor: "marketer_first_name",
          },
          {
            Header: "Recruiter Lastname",
            accessor: "marketer_last_name",
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
  
  export default Submissions;
