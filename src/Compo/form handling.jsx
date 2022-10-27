import React from "react";
import { Component } from "react";

class Logindetails extends Component{
    state ={
        username:"",
        emailid:"",
        password:"",
        mobilenum:"",
        city:"",
    }
    updateHandler = (Event)=> {
        this.setState({
            [Event.target.name]: Event.target.value
        })
    }
    submitHandler = (Event)=> {
        Event.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <>
            <form onSubmit={this.submitHandler}>
                <br />
                <label>Username</label>
                <input type="text" onChange={this.updateHandler} name="username" />
                <br /><br />
                <label>Email-ID</label>
                <input type="email" onChange={this.updateHandler} name="email" />
                <br /><br />
                <label>Password</label>
                <input type="password" onChange={this.updateHandler} name="password" />
                <br /><br />
                <label>Mobile Number</label>
                <input type="number" onChange={this.updateHandler} name="number"/>
                <br /><br />
                <label>City</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>choose one</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                </select>
                <label>Example select</label>
                <select id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
    </select>
    <br /><br />
    <input type="submit" />
            </form>
            </>
        )
    }
}
export default Logindetails;