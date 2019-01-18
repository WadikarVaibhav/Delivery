import React from 'react';
import ReactDOM from 'react-dom';
import Records from './records';

class Home extends React.Component {
    render() {
        return (
            <Records/>
            )
    }
}

ReactDOM.render(<Home/>, document.getElementById('container'));