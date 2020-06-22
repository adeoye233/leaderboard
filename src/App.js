import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

//import Image from 'react-bootstrap/lib/Image';
//import Data from '../src/data.json';

class App  extends Component{
  state = {
        scores: []
  }
  
 getleaderboardData() {
    axios.get('/leaderboard')
    .then(({ data }) => {
     this.setState({scores:data})
     
    }).catch(err =>{
      console.log(err);
    })
  }
  componentDidMount(){
    this.getleaderboardData();

  }
  render(){
    const{scores} = this.state;
    const rows = [];
    scores.map((row, index)=> {
    rows.push(<tr key={row.slackname}>
        <td>{index + 1}</td>
        <td><a href={'../src/data.json${row.slackname}'}>
          <image src = {row.img} className="imageheight" circle/>{row.slackname}
          </a></td>
        <td>{row.points}</td>
      </tr>)
    })
    return(
      <div className='App'>
        <Table stripped condensed hover bordered className="coloBlack"> 
     <thead>
       <tr>
         <th>#</th>
         <th>Slack Name</th>
         <th>Points</th>
       </tr>
     </thead>
     <tbody>
       {rows}
     </tbody>
        </Table>
      </div>
    )
  }
}



export default App;
