import React, { Component } from 'react';
//import Parent from './Parent';

class Home extends Component {
    state = { 
        isLoading : true,
        users : [],
        error: null
     }

     componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers() {
        // Where we're fetching data from
        fetch(`https://jsonplaceholder.typicode.com/users`)
          // We get the API response and receive data in JSON format...
          .then(response => response.json())
          // ...then we update the users state
          .then(data =>
            this.setState({
              users: data,
              isLoading: false,
            })
          )
          // Catch any errors we hit and update the app
          .catch(error => this.setState({ error, isLoading: false }));
    }

    render() { 
        const {isLoading, users, error} = this.state;
        return ( 
            <React.Fragment>
                <h1>Welcome User!!!</h1>
                {error? <p>{error.message}</p> : null}

                {!isLoading ? (
                    users.map(user => {
                        const { username, name, email } = user;
                        return (
                          <div key={username}>
                            <p>Name: {name}</p>
                            <p>Email Address: {email}</p>
                            <hr />
                          </div>
                        );
                    })
                ) : (
                    <h3>Loading...</h3>
                )}

                {/* <Parent /> */}
            </React.Fragment>
         );
    }
}
 
export default Home;
