import Dispatcher from "../dispatcher/dispatcher";
import Constants from '../../constants/constants';

export function sort(order) {
    Dispatcher.dispatch({
        order: order,
        type: 'sort'
    })
}

export function merge(records, selectedLoad, selectedCount) {
    Dispatcher.dispatch({
        type: 'merge',
        records: records,
        selectedLoad: selectedLoad,
        selectedCount: selectedCount,
    })
}

export function filter() {

}