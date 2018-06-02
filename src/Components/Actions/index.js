import fetchThenDispatch from '../../utils/fetchThenDispatch';
import 'abortcontroller-polyfill'

export const FETCH_FORM_BEGIN   = 'FETCH_FORM_BEGIN';
export const FETCH_FORM_SUCCESS = 'FETCH_FORM_SUCCESS';
export const FETCH_FORM_FAILURE = 'FETCH_FORM_FAILURE';
export const FETCH_DATA_BEGIN   = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const SAVE_FORM_VALUE = 'SAVE_FORM_VALUE';
export const RESTART_APPLICATION = 'RESTART_APPLICATION';

let controller;
let signal;

export const fetchForm = () => dispatch =>{
    controller = new AbortController();
    signal = controller.signal;
    dispatch(fetchFormBegin());
    setTimeout(() => fetchThenDispatch(
        dispatch,
        '/api/meta',
        'POST',
        signal
    ), 2500);
};

export const fetchFormBegin = () => ({
    type: FETCH_FORM_BEGIN,
    loading: true
});

export const fetchFormSuccess = form => ({
    type: FETCH_FORM_SUCCESS,
    loading: false,
    form: form
});

export const fetchFormError = () => {
    controller.abort();
    return {
        type: FETCH_FORM_FAILURE,
        loading: false,
        form: {}
    }
};

export const saveFormValue = (name, value) => ({
    type: SAVE_FORM_VALUE,
    key: name,
    value: value
});


export const fetchData = () => (dispatch, getState) => {
    controller = new AbortController();
    signal = controller.signal;
    dispatch(fetchDataBegin());
    setTimeout(() => fetchThenDispatch(
        dispatch,
        '/api/data',
        'POST',
        signal,
        JSON.stringify(getState().appReducer.data)
    ), 2500);
};

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN,
    sending: true
});

export const fetchDataSuccess = result => ({
    type: FETCH_DATA_SUCCESS,
    sending: false,
    result: result,
    form: {},
    data: {
        form: {}
    }
});

export const fetchDataError = () => {
    controller.abort();
    return {
        type: FETCH_DATA_FAILURE,
        sending: false,
        result: {}
    }
};

export const restartApplication = () => {
    return {
        type: RESTART_APPLICATION,
        loading: false,
        sending: false,
        form: {},
        data: {
            form: {}
        },
        result: {}
    }
};

