import Dispatcher from "../dispatcher/dispatcher";
import Constants from '../../constants/constants';

export function sort(order) {
    Dispatcher.dispatch({
        order: order,
        type: Constants.SORT
    })
}

export function merge(records, selectedLoad, selectedCount) {
    Dispatcher.dispatch({
        type: Constants.MERGE,
        records: records,
        selectedLoad: selectedLoad,
        selectedCount: selectedCount,
    })
}

export function filter() {

}