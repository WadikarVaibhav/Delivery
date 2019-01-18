import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'High to Low', label: 'High to Low' },
    { value: 'Low to High', label: 'Low to High' },
  ];

export default class Sort extends React.Component {
    render() {
        return (
            <Select className="select" value={options}  options={options}  />         
        )
    }
}