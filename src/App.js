import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tree, treeUtil } from 'react-d3-tree';



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
                    "serial_number": "FNM00174900380",
                    "appliance_type": "BARE_METAL",
                    "deployment_type": "WARNADO"
                },
            },
            {
                name: 'H0023-node-1',
                attributes:{
                    "id": "N1",
                    "type": "NODE",
                    "path": "C1.A1.N1",
                    "parent": "A1",
                    "serial_number": "FCNSP174700063",
                    "slot": 0
                }
            },
        ],
    },
];
const testFile = "flatJson.json";
const testFile2 = "test.json";
const testFile3 = "CSVData.csv";
const csvSource = 'https://raw.githubusercontent.com/bkrem/react-d3-tree/master/docs/examples/data/csv-example.csv';

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

class App extends Component {


    constructor() {
        super();

        this.state = {
            data: undefined,
        };
    }

    componentWillMount() {
        debugger;
        treeUtil.parseCSV(csvSource)
            .then((data) => {
            this.setState({ data })
            })
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Cyclone Configuration Data Viewer</h1>
                </header>
                <div className="rd3t-tree-container">
                    <Tree data={myTreeData} orientation="vertical" nodeSvgShape={svgSquare} separation={sepDetails}/>
                </div>

            </div>

        );
    }
}

export default App;
