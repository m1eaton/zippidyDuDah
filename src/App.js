import React, { Component } from 'react';
import { Panel,PanelGroup } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import { Tree, treeUtil } from 'react-d3-tree';
import './ConfigForm';
import ConfigForm from "./ConfigForm";

class App extends Component {


    constructor() {
        super();

        this.state = {
            data: undefined,
        };
    }



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div height={20}/>
                <ConfigForm/>
            </div>

        );
    }
}

export default App;
