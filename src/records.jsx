import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Paper from '@material-ui/core/Paper';
import { Line } from 'rc-progress';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Constants from '../constants/constants';

export default class Records extends React.Component {

    getLoadStatus(option, load) {
        if (option === Constants.OVERLOAD) {
            return load - Constants.THRESHOLD_CAPACITY > 0 ? load - Constants.THRESHOLD_CAPACITY : 0;
        } else if (option === Constants.SPACE) {
            return Constants.THRESHOLD_CAPACITY - load > 0 ? (Constants.TOTAL_CAP)-(Constants.THRESHOLD_CAPACITY - load) : Constants.TOTAL_CAP;
        }
        return 0;
    }

    render() {
        return (
            <div className="container">
                <Paper style={{maxHeight: 500, overflow: 'auto'}} >
                    <List>
                        {this.props.records.map(person => {
                            return (
                                <div key={person.id}>
                                    <ListItem >
                                        <Checkbox disableRipple />
                                        <ListItemAvatar><Avatar src={'../images/'+person.name+'.jpg'}/></ListItemAvatar>
                                        <ListItemText className="list-item"  disableTypography primary={<Typography style={{ fontSize: 15, fontFamily:'sans-serif' }}>{person.name}</Typography>} />
                                        <ListItemText className="list-item-percentage" disableTypography primary={<Typography style={{ color: '#1C86EE', fontSize: 16, fontWeight: 'bold' }}>{parseInt(person.load)+'%'}</Typography>}/>
                                        <Line className="progress-bar" percent={this.getLoadStatus(Constants.SPACE, person.load)} trailWidth="4" strokeWidth="4" strokeColor= "#E1E1E1" trailColor="#58E8C2"/>
                                        <Line className="progress-bar" percent={this.getLoadStatus(Constants.OVERLOAD, person.load)} trailWidth = "4" strokeWidth="4" strokeColor="#F13564" trailColor="#FFFFFF"/>
                                    </ListItem>
                                    <Divider />
                                </div>
                            );                        
                        })}
                    </List>
                </Paper>                
                <button className="merge" >Merge</button>
            </div>
        )
    }
}