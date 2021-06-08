import React from "react";
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
  <div>
    <fieldset>
      <legend>
        Registration Form
      </legend>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <div className="form-group">
          <label htmlFor="inputForEmail">Email address</label>
          <span className="mandatory">*</span>
          <input
            id="inputForEmail"
            type="email"
            className="form-control"
            aria-describedby="Enter email address"
            placeholder="Enter email address"
            {...register("email",{ 
              required: {
                value: true,
                message: "Please enter your email address",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid email address",
              },
              minLength: {
                value: 6,
                message: "Minimum 6 characters are allowed",
              },
              maxLength: {
                value: 255,
                message: "Maximum 255 characters are allowed",
              },
            })}
          />
          {/**
               * we provide validation configuration for email field above
               * error message are displayed with code below
               */}
              {/* {errors.email && (
                <span className="mandatory">
                  {errors.email.message}
                </span>
              )} */}
          </div>
          <div className="form-group">
            <label htmlFor="inputForName">Your Name</label>
            <span className="mandatory">*</span>
            <input
              id="inputForName"
              type="text"
              className="form-control"
              aria-describedby="Enter your name"
              placeholder="Enter your name" 
            />
            </div>
            <div className="form-group">
              <label htmlFor="inputForPassword">Password</label>
              <span className="mandatory">*</span>
              <input
                type="password"
                className="form-control"
                id="inputForPassword"
                placeholder="Enter password"
              />
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
                <button className="btn btn-link">
                  <Link to="/login">Cancel</Link>
                </button>
              </div>
              </form>
            </fieldset>
          </div>)
}
  

// class Register extends React.Component {
//     constructor(props){
//         super(props);
   
//         this.state = {
//             fields: {},
//             errors: {}
//         }
//      }

//     handleValidation(){
//         let fields = this.state.fields;
//         let errors = {};
//         let formIsValid = true;

//         //Name
//         if(!fields["name"]){
//            formIsValid = false;
//            errors["name"] = "Cannot be empty";
//         }
  
//         if(typeof fields["name"] !== "undefined"){
//            if(!fields["name"].match(/^[a-zA-Z]+$/)){
//               formIsValid = false;
//               errors["name"] = "Only letters";
//            }        
//         }
   
//         //Email
//         if(!fields["email"]){
//            formIsValid = false;
//            errors["email"] = "Cannot be empty";
//         }
  
//         if(typeof fields["email"] !== "undefined"){
//            let lastAtPos = fields["email"].lastIndexOf('@');
//            let lastDotPos = fields["email"].lastIndexOf('.');

//            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
//               formIsValid = false;
//               errors["email"] = "Email is not valid";
//             }
//        }  

//        this.setState({errors: errors});
//        return formIsValid;
//    }

//     contactSubmit(e){
//         e.preventDefault();

//         if(this.handleValidation()){
//         alert("Form submitted");
//         }else{
//         alert("Form has errors.")
//         }

//     }

//     handleChange(field, e){         
//         let fields = this.state.fields;
//         fields[field] = e.target.value;        
//         this.setState({fields});
//     }

//     render() { 
//         return ( 
//             <div>
//               <fieldset>
//                 <legend>
//                   Registration Form
//                 </legend>
//                 <form onSubmit= {this.contactSubmit.bind(this)}>
//                   <div className="form-group">
//                     <label htmlFor="inputForEmail">Email address</label>
//                     <span className="mandatory">*</span>
//                     <input
//                       id="inputForEmail"
//                       type="email"
//                       className="form-control"
//                       aria-describedby="Enter email address"
//                       placeholder="Enter email address"
//                       onChange={this.handleChange.bind(this, "email")}
//                       value={this.state.fields["email"]}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="inputForName">Your Name</label>
//                     <span className="mandatory">*</span>
//                     <input
//                       id="inputForName"
//                       type="text"
//                       className="form-control"
//                       aria-describedby="Enter your name"
//                       placeholder="Enter your name"
//                       onChange={this.handleChange.bind(this, "name")}
//                       value={this.state.fields["name"]}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="inputForPassword">Password</label>
//                     <span className="mandatory">*</span>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="inputForPassword"
//                       placeholder="Enter password"
//                       onChange={this.handleChange.bind(this, "password")}
//                       value={this.state.fields["password"]}
//                     />
//                   </div>
//                   <div className="d-flex align-items-center justify-content-center">
//                     <button type="submit" className="btn btn-outline-primary">
//                       Submit
//                     </button>
//                     <button className="btn btn-link">
//                       <Link to="/login">Cancel</Link>
//                     </button>
//                   </div>
//                 </form>
//               </fieldset>
//             </div>
//         );
//     }
// }

export default Register;