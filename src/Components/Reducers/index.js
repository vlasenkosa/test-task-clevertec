import * as Action from '../Actions/index';

import initialState from '../StoreFactory/initialState';

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case Action.FETCH_FORM_BEGIN:
            return {
                ...state,
                loading: action.loading
            };
        case Action.FETCH_FORM_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                form: action.form
            };
        case Action.FETCH_FORM_FAILURE:
            return {
                ...state,
                loading: false,
                form: {},
                data: {}
            };
        case Action.SAVE_FORM_VALUE:
            return {
                ...state,
                data: {
                    form: {
                        ...state.data.form,
                        [action.key]: action.value
                    }
                }
            };
        case Action.FETCH_DATA_BEGIN:
            return {
                ...state,
                sending: action.sending
            };
        case Action.FETCH_DATA_SUCCESS:
            return {
                ...state,
                sending: action.sending,
                form: action.form,
                result: action.result,
                data: action.data
            };
        case Action.FETCH_DATA_FAILURE:
            return {
                ...state,
                sending: action.sending,
                result: action.result
            };
        case Action.RESTART_APPLICATION:
            return {
                ...state,
                loading: action.loading,
                sending: action.sending,
                form: action.form,
                data: action.data,
                result: action.result
            };
        default:
            return state;
    }
};