import React, { Component } from 'react';

const USER_SERVICE_URL = "https://jsonmock.hackerrank.com/api/movies?Year=";
//const USER_SERVICE_URL = "https://jsonmock.hackerrank.com/api/movies?Year=2015";

class MovieList extends Component {
  constructor() {
    super();
    this.state = { 
      input : 0,
      movies : []
     }
  }
  
  handleChange(e) {
    //console.log(e.target.value.length);
    this.setState({input : e.target.value});
  }
  
  searchMovies(e) {
    
    fetch(USER_SERVICE_URL.concat(this.state.input))
              .then(response => response.json())
              .then(result => {
                  this.setState({movies: result.data})
                  //console.log(result);
              })
              .catch(e => {
                  console.log(e);
                  //this.setState({...this.state, isFetching: false});
                  console.log(e);
              });
  
  }

  render() { 
    const { movies } = this.state;
    return ( 
    <div className="container">
        <form className="form-inline">
            <input type="number" className="form-control mr-sm-2" placeholder="Enter Year" aria-label="Enter Year" onChange={this.handleChange.bind(this)}/>
            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={this.searchMovies.bind(this)}>Search</button>
        </form>

        <ul className="list-group">
        {movies.map(movie => {
            return (
                <li className="list-group-item">{movie.Title}</li>
            )}
        )}
        </ul>

        <div></div>
    </div>
     );
  }
}


 
export default MovieList;