import React from 'react';

class PopUp extends React.Component {
    //state = {  }

    handleClick = () => {
        this.props.toggle();
      };

    render() { 
        return (
            <React.Fragment> 
            <div className="modal">
                <div className="modal_content">
                <span className="close" onClick={this.handleClick}>
                    &times;
                </span>
                <form>
                    <h3>Register!</h3>
                    <label>
                    Name:
                    <input type="text" name="name" />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
                </div>
            </div>
            <style>{`
            .modal {
                position: fixed;
                z-index: 1;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.25);
              }
              
            .modal_content {
                background-color: white;
                position: absolute;
                top: 20%;
                left: 30%;
                width: 40%;
                padding: 20px;
                border-radius: 5px;
                border: 2px solid black;
              }
              
            .close {
                color: Black;
                float: right;
              }
              
            .close:hover {
                color: cyan;
                cursor: pointer;
              }
        `}</style>
        </React.Fragment>
         );
    }
}
 
export default PopUp;