import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";
import Login from "./Login";
import Customers from "./Customers";
import Rentals from "./Rentals";
import {BrowserRouter as Router , Switch ,Route} from "react-router-dom";

class App extends React.Component {
  state={
    movies:[],
    genre:[],
    selectedFilter:"All Genre",
    search:"",
  }
  deleteMovie=(id)=>{
    let newArr=this.state.movies.filter((el)=>{
      return el._id!==id;
    })
    this.setState({movies:newArr});
  }
  updateSearch=(str)=>{
    this.setState({search:str});
  }
  handleFilter=(filter)=>{
    this.setState({selectedFilter:filter});
  };
  componentDidMount() {
    //i will get data here
    
    let f = async () => {
      let resMovie=await fetch("/movies");
      let resGenre=await fetch("/genre");
      let moviesjson=await resMovie.json();
      let genrejson=await resGenre.json();
      this.setState({
        movies:moviesjson,
        genre:genrejson,
      });
    };
    f();
  }
  toggleLike=(ID)=>{
    let index=this.state.movies.findIndex((el)=>{
      return el._id===ID;
    })
    let currMoviesArr=this.state.movies.map((el)=>el);
    if(currMoviesArr[index].liked){
      currMoviesArr[index].liked=false;
    }else{
      currMoviesArr[index].liked=true;
    }
    this.setState({movies:currMoviesArr});
  }

  render(){
    return (<Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route exact path="/Customers">
            <Customers />
          </Route>
          <Route exact path="/Rentals">
            <Rentals />
          </Route>
          <Route exact path="/">
            <div class="row">
              <Filter  genreData={this.state.genre} selectedFilter={this.state.selectedFilter} handleFilter={this.handleFilter}/>
              <div class="col-8">
                <Search total={this.state.movies.length} search={this.state.search} updateSearch={this.updateSearch}/>
                <Table deleteMovie={this.deleteMovie} search={this.state.search} selectedFilter={this.state.selectedFilter} movies={this.state.movies} toggleLike={this.toggleLike}/>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
    )
}
  
}
export default App;