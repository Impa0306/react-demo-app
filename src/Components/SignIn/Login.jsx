import React from 'react';
import PopUp from "./PopUp";

class Login extends React.Component {
    state = { 
        seen: false
     };

    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    }

    render() { 
        return ( 
            <React.Fragment>
            <h1>Login Page</h1>
            <div>
                <div onClick={this.togglePop}>
                    <button>New User?</button>
                </div>
                {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
            </div>
            </React.Fragment>
         );
    }
}
 
export default Login;

