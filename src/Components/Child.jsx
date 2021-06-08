import React from 'react';

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.dataParentToChild
        }
    }
  
    onTrigger = (event) => {
        this.props.parentCallback("Data from child"); //Passing data from Child to Parent - invoke Callback
        event.preventDefault();
    }

    render(){
        const {data} = this.state;

        return(
        <div>
            <form onSubmit = {this.onTrigger}>
                <input type = "submit" value = "Submit"/>
            </form>
            {data}
        </div>
        )
    }
}

export default Child;