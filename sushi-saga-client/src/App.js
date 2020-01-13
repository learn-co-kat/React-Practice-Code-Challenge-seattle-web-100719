import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       allSushi: [],
       currentSushi: [],
       currentIndex: 0,
       money: 50
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        allSushi: json
      })
      this.fourSushi()
    })
  }

  fourSushi = () => {
    let four = this.state.allSushi.slice(this.state.currentIndex, this.state.currentIndex + 4)
    this.setState({
      currentSushi: four,
      currentIndex: this.state.currentIndex + 4
    })
  }
  
  eatSushi = (sushi) => {
    sushi.eaten = true
    let newSushiArray = this.state.currentSushi.map(item => {
      if(item.id === sushi.id){
        return item = sushi
      } else {
        return item
      }
    })
    if(this.state.money - sushi.price > 0){
      this.setState({
        currentSushi: newSushiArray,
        money: this.state.money - sushi.price
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.currentSushi} eatSushi={this.eatSushi} addSushi={this.fourSushi} />
        <Table money={this.state.money} />
      </div>
    );
  }
}

export default App;