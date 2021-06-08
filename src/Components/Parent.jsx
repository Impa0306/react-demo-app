import React from 'react';
import Child from './Child';

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataFromChild: null,
            dataFromParent: "Data from Parent"
        }
    }

    handleCallback = (childData) =>{
        this.setState({dataFromChild: childData})
    }

    render(){
        const {dataFromChild, dataFromParent} = this.state;
        return(
            <div>
                <Child parentCallback = {this.handleCallback}
                dataParentToChild = {dataFromParent}/>
                {dataFromChild}
            </div>
        )
    }
}

export default Parent;