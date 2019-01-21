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
import Constants from '../../constants/constants';
import * as Actions from "../actions/action";
import Store from '../stores/store';

export default class Records extends React.Component {

    constructor() {
        super();
        this.state = {
            records: Store.getRecords(),
            selectedLoad: 0,
            selectedCount: 0
        }
        this.onSelect = this.onSelect.bind(this);
        this.merge = this.merge.bind(this);
    }

    componentDidMount() {
        Store.on("change", this.showResult.bind(this));
    }

    componentWillUnmount() {
        Store.removeListener("change", this.showResult.bind(this));
    }

    getLoadStatus(option, load) {
        if (option === Constants.OVERLOAD) {
            return load - Constants.THRESHOLD_CAPACITY > 0 ? load - Constants.THRESHOLD_CAPACITY : 0;
        } else if (option === Constants.SPACE) {
            return Constants.THRESHOLD_CAPACITY - load > 0 ? (Constants.TOTAL_CAP)-(Constants.THRESHOLD_CAPACITY - load) : Constants.TOTAL_CAP;
        }
        return 0;
    }

    onSelect(event, isChecked) {
        let selectedLoad = this.state.selectedLoad;
        const selectedRecords = this.state.records;
        let selectedCount = this.state.selectedCount;
        let index = this.state.records.findIndex(record => record.id === parseInt(event.target.value));
        if (isChecked) {
            selectedLoad += this.state.records[index].load;
            selectedRecords[index].merge = true;
            selectedCount++;
        } else {
            selectedRecords[index].merge = false;
            selectedCount--;
        }
        this.setState({
            records: selectedRecords,
            selectedLoad: selectedLoad,
            selectedCount: selectedCount
        })
    }

    showResult() {
        this.setState({
            records: Store.getRecords(),
            selectedLoad: 0,
            selectedCount: 0
        })    
    }

    merge() {
        Actions.merge(this.state.records, this.state.selectedLoad, this.state.selectedCount);
    }

    render() {
        return (
            <div className="container">
                <Paper style={{maxHeight: 500, overflow: 'auto'}} >
                    <List>
                        {this.state.records.map(person => {
                            return (
                                <div key={person.id}>
                                    <ListItem >
                                        <Checkbox checked={person.merge} onChange={this.onSelect} value={person.id+''} />
                                        <ListItemAvatar><Avatar src={Constants.IMAGE_PATH + person.name + Constants.JPG}/></ListItemAvatar>
                                        <ListItemText className="list-item"  disableTypography primary={<Typography style={{ fontSize: 15, fontFamily:'sans-serif' }}>{person.name}</Typography>} />
                                        <ListItemText className="list-item-percentage" disableTypography primary={<Typography style={{ color: '#1C86EE', fontSize: 16, fontWeight: 'bold' }}>{person.load+Constants.PERCENT}</Typography>}/>
                                        <Line className="progress-bar" percent={this.getLoadStatus(Constants.SPACE, person.load)} trailWidth={Constants.PROGRESS_BAR_WIDTH} strokeWidth={Constants.PROGRESS_BAR_WIDTH} strokeColor={Constants.PRIMARY_STROKE_COLOR_LEFT_BAR}  trailColor={Constants.SECONDARY_STROKE_COLOR_LEFT_BAR}/>
                                        <Line className="progress-bar" percent={this.getLoadStatus(Constants.OVERLOAD, person.load)} trailWidth = {Constants.PROGRESS_BAR_WIDTH} strokeWidth={Constants.PROGRESS_BAR_WIDTH} strokeColor={Constants.PRIMARY_STROKE_COLOR_RIGHT_BAR} trailColor={Constants.SECONDARY_STROKE_COLOR_RIGHT_BAR}/>
                                    </ListItem>
                                    <Divider />
                                </div>
                            );                        
                        })}
                    </List>
                </Paper>                
                <button className="merge" onClick={this.merge} >Merge</button>
            </div>
        )
    }
}