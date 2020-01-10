import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Display from './Components/Display';
import Button from './Components/Button';
import data from './data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: data,
      currentCard: 0
    }
    this.clickPrevious = this.clickPrevious.bind(this)
    this.clickNext = this.clickNext.bind(this)
  }

  clickPrevious(){
    this.setState({currentCard: this.state.currentCard - 1})
  }

  clickNext(){
    this.setState({currentCard: this.state.currentCard + 1})
  }

  render(){
      return (
        <div>
          <header className='Header'>Home</header>
        <div className="App">
          <Display data={this.state.data[this.state.currentCard]}/>
          <Button previous={this.clickPrevious} next={this.clickNext}/>    
       </div>
       </div>
     );
  }
}

export default App;
