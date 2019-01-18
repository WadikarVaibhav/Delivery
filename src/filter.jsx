import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'Volume', label: 'Volume' },
    { value: 'Time', label: 'Time' },
    { value: 'Distance', label: 'Distance' }
  ];

export default class Filter extends React.Component {
    render() {
        return (
            <Select className="select" value={options} options={options} />  
        )
    }
}