import Dispatcher from "../dispatcher/dispatcher";
import {EventEmitter} from "events";
import Constants from '../../constants/constants';
import Options from '../../constants/options.jsx';

class Store extends EventEmitter {

    constructor() {
        super();
        this.records = this.getInitialRecords();
        this.sort = Options.SORT_OPTIONS[0];
        this.filter = Options.FILTER_OPTIONS[0];
    }

    getInitialRecords() {
        var records = [];
        records[0] = {id: 1, name: 'Vaibhav', load: 89, merge: false};
        records[1] = {id: 2, name: 'Ana', load: 29, merge: false};
        records[2] = {id: 3, name: 'Dana', load: 69, merge: false};
        records[3] = {id: 4, name: 'Andrew', load: 39, merge: false};
        records[4] = {id: 5, name: 'John', load: 100, merge: false};
        records[5] = {id: 6, name: 'Ricky', load: 85, merge: false};
        return records;
    }

    handleSort(order) {
        if (order == Constants.LOW_TO_HIGH) {
            this.sortLowToHigh()
        } else if (order === Constants.HIGH_TO_LOW) {
            this.sortHighToLow()
        }
    }

    handleMerge(selectedRecords, selectedLoad, selectedCount) {
        for (var index = 0; index < selectedRecords.length; index++) {
            let index2 = this.records.findIndex(record => record.id === selectedRecords[index].id);
            if (this.records[index2].merge === true) {
                this.records[index2].merge = false;
                this.records[index2].load = Math.round(selectedLoad/selectedCount);
            }
        }
        if (this.sort == Options.SORT_OPTIONS[0]) {
            this.sortHighToLow();
        } else {
            this.sortLowToHigh();
        }
    }

    handleAction(action) {
        switch(action.type) {
            case Constants.SORT:
                this.handleSort(action.order);
                this.emit(Constants.CHANGE);
                break;
            case Constants.MERGE:
                this.handleMerge(action.records, action.selectedLoad, action.selectedCount);
                this.emit(Constants.CHANGE);
                break;
            default:
                break;
        }
    }

    sortHighToLow() {
        this.records.sort((record1, record2) => {
            return record2.load - record1.load;
        });
        this.sort = Options.SORT_OPTIONS[0];
    }

    sortLowToHigh() {
        this.records.sort((record1, record2) => {
            return record1.load - record2.load;
        });
        this.sort = Options.SORT_OPTIONS[1];
    }

    getRecords() {
        return this.records;
    }

    getSort() {
        return this.sort;
    }

    getFilter() {
        return this.filter;
    }

}

const store = new Store();
Dispatcher.register(store.handleAction.bind(store));
export default store;