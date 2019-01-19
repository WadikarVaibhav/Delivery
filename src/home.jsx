import React from 'react';
import ReactDOM from 'react-dom';
import Records from './records';
import Menus from './menus';

class Home extends React.Component {
    render() {
        return (
            <div className="main">
                <Menus/>
                <Records/>
            </div>
                
            )
    }
}

ReactDOM.render(<Home/>, document.getElementById('container'));