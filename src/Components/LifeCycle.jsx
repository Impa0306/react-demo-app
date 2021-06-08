import React from 'react';

class Lifecycle extends React.Component {
    //state = {  }

    constructor() {
        super();
        console.log('constructor');

        this.state = {
            showChild: true
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    shouldComponentUpdate(nextState, nextProps) {
        console.log('shouldComponentUpdate');
        return true;
    }

    render() { 
        console.log('render');
        return (
            <React.Fragment>
                <h1>Lifecycle Component</h1>
                <button
                    onClick = {() => this.setState({showChild: !this.showChild})}
                >Toggle Lifecycle</button>
                
            </React.Fragment>
         );
    }
}
 
export default Lifecycle;