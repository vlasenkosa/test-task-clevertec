import fetch from 'isomorphic-fetch';

const parseResponse = response => response.json();
const logError = error => console.log(error);
const fetchThenDispatch = (dispatch, url, method, signal, body) => {
    fetch(
        url,
        {
            method,
            body,
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            signal
        }
    ).then(parseResponse)
        .then(dispatch)
        .catch(logError);
};

export default fetchThenDispatch;