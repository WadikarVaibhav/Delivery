import React from 'react';
import ReactDOM from 'react-dom';
import Records from './records';
import Menus from './menus';
import Papa from 'papaparse';
import Constants from '../constants/constants';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            records: []
        }
        this.read = this.read.bind(this);
        this.sortHighToLow = this.sortHighToLow.bind(this);
        this.sortLowToHigh = this.sortLowToHigh.bind(this);
    }

    componentWillMount() {
        Papa.parse(Constants.FILE_PATH, {header: true,
          download: true,
          skipEmptyLines: true,
          complete: this.read
        });
    }

    read(records) {
        this.setState({
            records: records.data
        }); 
        this.sortHighToLow();
    }

    sortHighToLow() {
        const records = this.state.records;
        records.sort((record1, record2) => {
            return record2.load - record1.load;
        })
        this.setState({
            records: records
        })
    }

    sortLowToHigh() {
        const records = this.state.records;
        records.sort((record1, record2) => {
            return record1.load - record2.load;
        })
        this.setState({
            records: records
        })
    }

    render() {
        return (
            <div className="main">
                <Menus sortOptions = {{lowToHigh: this.sortLowToHigh, highToLow: this.sortHighToLow}} />
                <Records records={this.state.records}/>
            </div>                
        )
    }
}

ReactDOM.render(<Home/>, document.getElementById('container'));