import React, { Component } from 'react';
import './App.css';
import CardList from './components/cardlist-component/cardlist.jsx';
import SearchBox from './components/searchbox-component/searchbox';

class App extends Component {
  constructor(){
    super();
    this.state = {
     monsters: [] ,
     searchField: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value }); 
  }

 componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({monsters: users}))
 }

  render() {
    const {  monsters, searchField } = this.state;
   const filteredRobot = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredRobot}/>
      </div>
    );
  }
}

export default App;
