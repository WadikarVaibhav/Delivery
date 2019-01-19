import React from 'react';
import Select from 'react-select';
import Options from '../../constants/options.jsx';
import Constants from '../../constants/constants.jsx';

export default class Menus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: Options.FILTER_OPTIONS[0],
            sort: Options.SORT_OPTIONS[0]
        }
        this.handleSorting = this.handleSorting.bind(this);
    }

    handleSorting (option) {
        if (option.value == Constants.HIGH_TO_LOW) {
            this.props.sort.highToLow();
        } else if (option.value == Constants.LOW_TO_HIGH) {
            this.props.sort.lowToHigh();
        }
        this.setState({
            sort: option
        })
    }

    render() {

        return (
            <div className = "menus">
                <Select className="select" options={Options.FILTER_OPTIONS} value={this.state.filter} onChange={this.handleFilterChange}/>
                <Select className="select2" options={Options.SORT_OPTIONS} value={this.state.sort} onChange={this.handleSorting}/>
            </div>        
        )
    }
}