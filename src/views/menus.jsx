import React from 'react';
import Select from 'react-select';
import Options from '../../constants/options.jsx';
import Constants from '../../constants/constants.jsx';
import * as Actions from "../actions/action";
import Store from '../stores/store';

export default class Menus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: Store.getFilter(),
            sort: Store.getSort()
        }
        this.handleSorting = this.handleSorting.bind(this);
    }

    componentWillMount() {
        if (this.state.sort == Options.SORT_OPTIONS[0]) {
            Actions.sort(Constants.HIGH_TO_LOW);
        } else {
            Actions.sort(Constants.LOW_TO_HIGH);
        }
    }

    handleSorting (option) {
        if (option.value == Constants.HIGH_TO_LOW) {
            Actions.sort(Constants.HIGH_TO_LOW);
        } else if (option.value == Constants.LOW_TO_HIGH) {
            Actions.sort(Constants.LOW_TO_HIGH);
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