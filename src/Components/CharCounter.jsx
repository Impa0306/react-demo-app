import React, { Component } from 'react';

class CharCounter extends Component {
    state = { 
        content : null,
        charLimit : 10
     }

    handleChange = (e) => {
        //console.log(e);
        this.setState({[e.target.name] : e.target.value});
    }

    handleOnSubmit = (e) => {
        if(this.state.content.length <= this.state.charLimit)
            alert("Accepted");
        else
            alert("Charaters entered exceeding the limit");
    }

    render() { 
        
        return ( 
            <div style ={{textAlign: "center", height: '100vh'}}>
                <form onSubmit = {this.handleOnSubmit} style={{marginTop: '50vh'}}>
                    <input type="text" name="content"  onChange={this.handleChange}/>
                    <button>Submit</button>
                    <h2>Remaining Characters : 
                        {(this.state.content !== null ? (this.state.charLimit - this.state.content.length) : this.state.charLimit)
                        && (this.state.content.length>=10 ? -1 : this.state.charLimit - this.state.content.length)}</h2>
                </form>
            </div>
         );
    }
}
 
export default CharCounter;