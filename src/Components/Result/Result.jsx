import React from 'react';

import DialogWindow from '../DialogWindow/DialogWindow';

import {isEmpty} from "../../utils/utils";

const Result = ({result, onClickCancel}) => (
    isEmpty(result) ? null : <DialogWindow message={result.result} onClickCancel={onClickCancel} spin={false}/>
);

export default Result;
