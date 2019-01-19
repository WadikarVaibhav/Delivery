import React from 'react';
import Select from 'react-select';
import Options from '../constants/options.jsx';
import Constants from '../constants/constants.jsx';


export default class Menus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: Options.FILTER_OPTIONS[0],
            selectedSort: Options.SORT_OPTIONS[0]
        }
        this.handleSorting = this.handleSorting.bind(this);
    }

    handleSorting (option) {
        if (option.value == Constants.HIGH_TO_LOW) {
            this.props.sortOptions.highToLow();
        } else if (option.value == Constants.LOW_TO_HIGH) {
            this.props.sortOptions.lowToHigh();
        }
        this.setState({
            selectedSort: option
        })
    }

    render() {
        return (
            <div className = "menus">
                <Select className="select" options={Options.FILTER_OPTIONS} value={this.state.selectedFilter} onChange={this.handleFilterChange}/>
                <Select className="select" options={Options.SORT_OPTIONS} value={this.state.selectedSort} onChange={this.handleSorting}/>
            </div>        
        )
    }
}