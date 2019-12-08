import React, {Component} from 'react';
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll";
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      robots: [],
      searchField: ""
    }
  }
  onSearchChange =(e)=>{
    this.setState({searchField: e.target.value});
   
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.json()
  })
  .then(users=>{
 this.setState({robots: users})
  })
   
    console.log("check");
  }
  render(){
    const {robots, searchField} = this.state;
     const filteredRobots = robots.filter(robot => {
       return robot.name
         .toLocaleLowerCase()
         .includes(searchField.toLocaleLowerCase());
     })
     return !robots.length ?
      <h1>Loading</h1>: 
      (
      <div className="app tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
     }

  
}
export default App;
