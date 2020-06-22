import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Table from 'react-bootstrap/lib/Table';
import Image from 'react-bootstrap/lib/Image';
import Data from '../src/data.json';

class App  extends Component{
  state = {
first3: [],
all: []
  }
  //
  getleaderboardData(url, stateName) {
    axios.get('#')
    .then(({ data }) => {
      this.ListeningStateChangedEvent({ [stateName]: data});
      console.log(this.state.all);
    })
  }
  componentDidMount(){
    this.getleaderboardData('');

  }
  render(){
    const{first3,all} = this.state;
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
       {first3.map((row, index)=> {
         <tr key={row.slackname}>
           <td>{index + 1}</td>
           <td><a href={'../src/data.json${row.slackname}'}>
             <image src = {row.img} className="imageheight" circle/>{row.slackname}
             </a></td>
           <td>{row.slackname}</td>
         </tr>
       })}
     </tbody>
        </Table>
      </div>
    )
  }
}



export default App;
