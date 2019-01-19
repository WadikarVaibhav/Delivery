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
import Papa from 'papaparse';

export default class Records extends React.Component {

    constructor() {
        super();
        this.read = this.read.bind(this);
        this.state = {
            records: [],
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

    componentWillMount() {
        Papa.parse('../data/data.csv', {
          header: true,
          download: true,
          skipEmptyLines: true,
          complete: this.read
        });
      }

    read(records) {
        this.setState({
            records: records.data
        }); 
        this.sortHighToLow();
    }

    sortHighToLow() {
        var records = this.state.records;
        records.sort((record1, record2) => {
            return record2.load - record1.load;
        })
        this.setState({
            records: records
        })
    }

    sortLowToHigh() {
        var records = this.state.records;
        records.sort((record1, record2) => {
            return record1.load - record2.load;
        })
        this.setState({
            records: records
        })
    }

    getLoadStatus(option, load) {

        var threshold = 75;
        var totalCap = 100;

        if (option === 'overload') {
            return load - threshold > 0 ? load - threshold : 0;
        } else if (option === 'space') {
            return threshold - load > 0 ? (totalCap)-(threshold-load) : totalCap;

        }
        return 0;
    }

    render() {
        console.log(this.state.records)
        return (
            <div className="container">
                <Paper style={{maxHeight: 500, overflow: 'auto'}} className="list">
                    <List>
                        {this.state.records.map(person => {
                            return (
                                <ListItem key={person.id}>
                                    <Checkbox disableRipple />
                                    <ListItemAvatar><Avatar src={'../images/'+person.name+'.jpg'}/></ListItemAvatar>
                                    <ListItemText className="list-item" primary={person.name} />
                                    <ListItemText className="list-item-percentage" disableTypography primary={<Typography style={{ color: '#1C86EE', fontSize: 16, fontWeight: 'bold' }}>{parseInt(person.load)+'%'}</Typography>}/>
                                    <Line className="progress-bar" percent={this.getLoadStatus('space', person.load)} trailWidth="4" strokeWidth="4" strokeColor= "#E1E1E1" trailColor="#58E8C2"/>
                                    <Line className="progress-bar" percent={this.getLoadStatus('overload', person.load)} trailWidth = "4" strokeWidth="4" strokeColor="#F13564" trailColor="#FFFFFF"/>
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

