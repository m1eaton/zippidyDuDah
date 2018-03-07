/**
 * Created by eatonm1 on 2/10/2018.
 */

import React, { Component } from 'react';
import axios from 'axios';
import { Tree, treeUtil } from 'react-d3-tree';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const myTreeData = [
    {
        name: 'H0023',
        attributes: {
            "id": "C1",
            "type": "CLUSTER",
            "path": "C1",
            "name": "H0023",
            "master_appliance_id": "A1",
            "nameDelimiter": "-"

        },
        children: [
            {
                name: 'H0023-appliance-1',
                attributes: {
                    "id": "A1",
                    "type": "APPLIANCE",
                    "path": "C1.A1",
                    "parent": "C1",
                    "serial_number": "DD12jdj339393",
                    "appliance_type": "SuperDuper",
                    "deployment_type": "EagleSalad"
                },
            },
            {
                name: 'H0023-node-1',
                attributes:{
                    "id": "N1",
                    "type": "NODE",
                    "path": "C1.A1.N1",
                    "parent": "A1",
                    "serial_number": "DDDDP174700063",
                    "slot": 0
                }
            },
        ],
    },
];


const svgSquare = {
    shape: 'rect',
    shapeProps: {
        width: 200,
        height: 20,
        stroke:"blue",
        x: 0,
        y: -20,
    }
}
const sepDetails = {siblings:3,nonSiblings: 2};
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
            <div>
                <Form onSubmit={this.handleSubmit}>

                    <label>UserName</label>
                    <input type="text" default={"Rob"} onChange={this.handleUserName}/>
                    <label>Password</label>
                    <input type="password" onChange={this.handlePass}/>
                    <label>IP</label>
                    <input type="text" default={"10.10.10.10"} onChange={this.handleIP}/>

                    <input type="submit" value="Submit" />
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Output</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea"/>
                    </FormGroup>
                </Form>
                <Tree data={myTreeData} orientation="vertical" nodeSvgShape={svgSquare} separation={sepDetails}/>
            </div>


        );
    }


    handleSubmit(event) {
        //alert('UserName is: '+this.state.userName+" Password is: "+this.state.password+' IP is: '+this.state.IP);
        event.preventDefault();

        //axios.get('http://10.248.182.241:8080/api/rest/config_item?select=*')
        axios({
            method:'get',
            url:this.state.IP,//'http://10.248.182.80:8080/api/rest/config_item?select=*',
            auth: {
                username: this.state.userName,//'admin',
                password: this.state.password//'Password123!'
            }
        }).then(function (response) {
            
             console.log(response);
            })
           .catch(function (error) {
                console.log(error);
                alert(error.toString());
            });
    }

    handleUserName(event){
        this.setState({userName: event.target.value});
       // debugger;

    }

    handlePass(event){
        this.setState({password: event.target.value});
       //debugger;
    }

    handleIP(event){
        this.setState({IP: event.target.value});
       // debugger;
    }

}

export default ConfigForm;