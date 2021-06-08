import React from "react";

class Dashboard extends React.Component {
    // state = {  }
    // render() { 
    //     return ( 
    //         <h1>Dashboard Page</h1>
    //      );
    // }


    // state = {
        
    // };

    constructor(props) {
        super(props)
        this.state = {
            likes: 100,
            dislikes: 25,
            isLike: false,
            isDislike: false,
            meaningOfLife: 47
        }
    }

    addLike = () => {
        let newCount;
        if(!this.state.isLike){
            newCount = this.state.likes + 1;
            this.setState({
                likes: newCount,
                dislikes: this.state.dislikes - 1,
                isLike: true
                });
        }
        else{
            newCount = this.state.likes - 1;
            this.setState({
                likes: newCount,
                dislikes: this.state.dislikes + 1,
                isLike: false
                });
        }
    };

    removeLike = () => {
        let newCount;
        if(!this.state.isDislike){
            newCount = this.state.dislikes + 1;
            this.setState({
                likes: this.state.likes + 1,
                dislikes: newCount,
                isDislike: true
            });
        }
        else{
            newCount = this.state.dislikes - 1;
            this.setState({
                likes: this.state.likes - 1,
                dislikes: newCount,
                isDislike: false
            });
        }
    };

    handleClick = () => {
        this.setState((prevState, prevProps) => ({meaningOfLife: prevState.meaningOfLife + prevProps.increment}), 
            () => console.log(this.state.meaningOfLife))
        //console.log(this.state.meangingOfLife);
    }

    render() {
        
        return (
            <>
                <div>
                    <button className={!this.state.isLike ? "like-button" : "liked"} onClick={this.addLike}>Like | <span className="likes-counter">{this.state.likes}</span></button>
                    <button className={!this.state.isDislike ? "dislike-button" : "disliked"} onClick={this.removeLike}>Dislike | <span className="dislikes-counter">{this.state.dislikes}</span></button>
                </div>
                <p>{this.state.meaningOfLife}</p>
                <button onClick={this.handleClick}>State Update</button>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}

export default Dashboard;