import { connect } from 'react-redux';

import FormCreator from '../FormCreator/FormCreator';

import LoadButton from '../LoadButton/LoadButton';

import Result from '../Result/Result';

import {
    fetchForm,
    fetchFormError,
    fetchData,
    fetchDataError,
    saveFormValue,
    restartApplication} from '../Actions/index';

export const FormContainer = connect(
  state =>
    ({
      sending: state.appReducer.sending,
      form: state.appReducer.form
    }),
  dispatch => ({
    onClickCancel() {
      dispatch(fetchDataError());
    },
    onChange(name, value) {
        dispatch(saveFormValue(name,value));
    },
    onSubmit() {
        dispatch(fetchData());
    }
  }),
)(FormCreator);

export const LoadButtonContainer = connect(
    state =>
        ({
            loading: state.appReducer.loading,
            form: state.appReducer.form,
            result: state.appReducer.result
        }),
    dispatch => ({
        onClickLoad() {
            dispatch(fetchForm());
        },
        onClickCancel() {
            dispatch(fetchFormError());
        }
    }),
)(LoadButton);

export const ResultContainer = connect(
    state =>
        ({
            result: state.appReducer.result,
        }),
    dispatch => ({
        onClickCancel() {
            dispatch(restartApplication());
        },
    }),
)(Result);
