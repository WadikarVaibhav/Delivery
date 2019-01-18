import React from 'react';
import Select from '@material-ui/core/Select';
import Filter from './filter';
import Sort from './sort';

export default class Menus extends React.Component {
    render() {
        return (
            <div className = "container">
                <Filter/>
                <Sort/>
            </div>        
        )
    }
}