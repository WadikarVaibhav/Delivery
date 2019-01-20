import React from 'react';
import ReactDOM from 'react-dom';
import Records from '../views/records';
import Menus from '../views/menus';
import Papa from 'papaparse';
import Constants from '../../constants/constants';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            records: [],
            selectedSort: Constants.HIGH_TO_LOW
        }
        this.read = this.read.bind(this);
        this.sortHighToLow = this.sortHighToLow.bind(this);
        this.sortLowToHigh = this.sortLowToHigh.bind(this);
        this.updateRecords = this.updateRecords.bind(this);
        this.merge = this.merge.bind(this);
    }

    componentWillMount() {
        Papa.parse(Constants.FILE_PATH, {
          header: true,
          download: true,
          skipEmptyLines: true,
          complete: this.read
        });
    }

    read(records) {
        records.data.forEach(function(record) { record.merge = false; });
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
            records: records,
            selectedSort: Constants.HIGH_TO_LOW
        })
    }

    sortLowToHigh() {
        const records = this.state.records;
        records.sort((record1, record2) => {
            return record1.load - record2.load;
        })
        this.setState({
            records: records,
            selectedSort: Constants.LOW_TO_HIGH
        })
    }

    updateRecords(id, isChecked) {
        let index = this.state.records.findIndex(record => record.id === id);
        const selected = this.state.records;
        if (isChecked) {
            selected[index].merge = true;
        } else {
            selected[index].merge = false;
        }
        this.setState({
            records: selected
        })
    }

    merge() {
        let total = 0;
        let count = 0;
        const records = this.state.records;
        for (let index = 0; index < records.length; index++) {
            if (records[index].merge === true) {
                total += parseInt(records[index].load);
                count++;
            }
        }
        for (let index = 0; index < records.length; index++) {
            if (records[index].merge === true) {
                records[index].load = Math.round((total/count));
                records[index].merge = false;
            }
        }
        if (this.state.selectedSort === Constants.HIGH_TO_LOW) {
            this.sortHighToLow();
        } else {
            this.sortLowToHigh();
        }
        this.setState({
            records: records
        })
    }

    render() {
        return (
            <div className="main">
                <Menus sort={{lowToHigh: this.sortLowToHigh, highToLow: this.sortHighToLow}}/>
                <Records merge={this.merge} updateRecords={this.updateRecords} records={this.state.records}/>
            </div>                
        )
    }
}

ReactDOM.render(<Home/>, document.getElementById('container'));