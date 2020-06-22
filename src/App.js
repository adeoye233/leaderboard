import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Table from 'react-bootstrap/lib/Table';
import Image from 'react-bootstrap/lib/Image';

class App  extends Component{
  state = {

  }
  //
  getleaderboardData(url, stateName) {
    axios.get(url)
    .then(({ data }) => {
      this.ListeningStateChangedEvent({ [stateName]: data});
      console.log(this.state);
    })
  }
  componentDidMount(){
    this.getleaderboardData('');

  }
  render(){
    const{} = this.state;
    return(
      <div className='App'>
        <Table stripped condensed hover bordered className="coloBlack"> 
     <thead>
       <tr>
         <th>#</th>
         <th>Name</th>
         <th>Slack Name</th>
         <th>Email</th>
         <th>Points</th>
       </tr>
     </thead>
     <tbody>
       {first3.map((row, index)=> {
         <tr key={row.slackname}>
           <td>{index + 1}</td>
           <td>{index + 1}</td>
           <image src = {row.img} className="imageheight" circle/>
           <td>{index + 1}</td>
           <td>{index + 1}</td>
           <td>{index + 1}</td>
         </tr>
       })}
     </tbody>
        </Table>
      </div>
    )
  }
}



export default App;
