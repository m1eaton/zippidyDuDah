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
    }

    render() {

        return(
            <form onSubmit={this.handleSubmit}>

                <label>UserName</label>
                <input type="text" default={"Rob"}/>
                <label>Password</label>
                <input type="password"/>
                <label>IP</label>
                <input type="text" default={"10.10.10.10"}/>

                <input type="submit" value="Submit" />
            </form>
        );
    }


    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();

        axios.get('/user?ID=12345')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleUserName(event){

    }

    handlePass(event){

    }

    handleIP(event){

    }

}

export default ConfigForm;