import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import LinearProgress from '@material-ui/core/LinearProgress';

export default class Records extends React.Component {

    constructor() {
        super();
        this.state = {
            people: [
                {
                    id: 1,
                    name: 'Vaibhav',
                    loadPercentage: '80%',
                    picture: 'C:/Users/vaibh/Pictures/vaibhav'
                },
                {
                    id: 2,
                    name: 'Jack',
                    loadPercentage: '80%',
                    picture: 'C:/Users/vaibh/Pictures/vaibhav'
                },
                {
                    id: 3,
                    name: 'Daniel',
                    loadPercentage: '80%',
                    picture: 'C:/Users/vaibh/Pictures/vaibhav'
                },
                {
                    id: 4,
                    name: 'William',
                    loadPercentage: '80%',
                    picture: 'C:/Users/vaibh/Pictures/vaibhav'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <List>
                <ListItem>
                    <Checkbox  tabIndex={-1} disableRipple />
                    <ListItemAvatar>
                        <Avatar src={`vaibhav.jpg`} />
                    </ListItemAvatar>
                    <ListItemText primary={'Vaibhav'} />
                    <ListItemText primary={'80%'} />
                    <LinearProgress variant="determinate"  />
                </ListItem>
            </List>
            <LinearProgress variant="determinate"  value={90}/>
            </div>
            
        )
    }
}
