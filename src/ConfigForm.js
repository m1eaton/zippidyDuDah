/**
 * Created by eatonm1 on 2/10/2018.
 */

import React, { Component } from 'react';
import axios from 'axios';

class ConfigForm extends Component{


    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            IP: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleIP = this.handleIP.bind(this);
    }

    render() {

        return(
            <form onSubmit={this.handleSubmit}>

                <label>UserName</label>
                <input type="text" default={"Rob"} onChange={this.handleUserName}/>
                <label>Password</label>
                <input type="password" onChange={this.handlePass}/>
                <label>IP</label>
                <input type="text" default={"10.10.10.10"} onChange={this.handleIP}/>

                <input type="submit" value="Submit" />
            </form>
        );
    }


    handleSubmit(event) {
        alert('UserName is: '+ this.data.handleUserName + " The IP address is: "+this.data.IP);
        event.preventDefault();

        axios.get('https://www.google.com/')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleUserName(event){
        this.setState({userName: event.target.value});
        debugger;

    }

    handlePass(event){
        this.setState({password: event.target.value});
        debugger;
    }

    handleIP(event){
        this.setState({IP: event.target.value});
        debugger;
    }

}

export default ConfigForm;