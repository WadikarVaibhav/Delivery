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

export default class Records extends React.Component {

    constructor() {
        super();
        this.state = {
            people: [
                {
                    id: 1,
                    name: 'Vaibhav',
                    loadPercentage: '80%',
                    red: 5,
                    picture: 'vaibhav.jpg'
                },
                {
                    id: 2,
                    name: 'Jack',
                    loadPercentage: '56%',
                    green: 14,
                    picture: 'vaibhav.jpg'
                },
                {
                    id: 23,
                    name: 'Daniel',
                    loadPercentage: '90%',
                    red: 15,
                    picture: 'vaibhav.jpg'
                },
                {
                    id: 42,
                    name: 'William',
                    loadPercentage: '45%',
                    green: 25,
                    picture: 'vaibhav.jpg'
                },
                {
                    id: 25,
                    name: 'Kane',
                    loadPercentage: '40%',
                    green: 30,
                    picture: 'vaibhav.jpg'
                },
                {
                    id: 126,
                    name: 'Nil',
                    loadPercentage: '0%',
                    picture: 'vaibhav.jpg'
                },
                {
                    id: 11,
                    name: 'Vaibhav',
                    loadPercentage: '80%',
                    red: 5,
                    picture: 'vaibhav.jpg'
                },
                {
                    id: 21,
                    name: 'Jack',
                    loadPercentage: '56%',
                    green: 14,
                    picture: 'vaibhav.jpg'
                },
                {
                    id: 13,
                    name: 'Daniel',
                    loadPercentage: '90%',
                    red: 15,
                    picture: 'vaibhav.jpg'
                },
                {
                    id: 14,
                    name: 'William',
                    loadPercentage: '45%',
                    green: 25,
                    picture: 'vaibhav.jpg'
                },
                {
                    id: 51,
                    name: 'Kane',
                    loadPercentage: '40%',
                    green: 30,
                    picture: 'vaibhav.jpg'
                },
                {
                    id: 61,
                    name: 'Nil',
                    loadPercentage: '0%',
                    picture: 'vaibhav.jpg'
                }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <Paper style={{maxHeight: 500, overflow: 'auto'}} className="list">
                    <List>
                        {this.state.people.map(person => {
                            return (
                                <ListItem key={person.id}>
                                    <Checkbox disableRipple />
                                    <ListItemAvatar><Avatar src={person.picture}/></ListItemAvatar>
                                    <ListItemText className="list-item" primary={person.name} />
                                    <ListItemText className="list-item-percentage" disableTypography primary={<Typography style={{ color: '#1C86EE', fontSize: 16, fontWeight: 'bold' }}>{parseInt(person.loadPercentage)+'%'}</Typography>}/>
                                    <Line className="progress-bar" percent="10" trailWidth="4" strokeWidth="4" strokeColor="gray" trailColor="green"/>
                                    <Line className="progress-bar" percent="34" trailWidth = "4" strokeWidth="4" strokeColor="red" trailColor="white"/>
                                </ListItem>
                            );                        
                        })}
                    </List>
                </Paper>                
                <button className="merge" >Merge</button>
            </div>
        )
    }
}

