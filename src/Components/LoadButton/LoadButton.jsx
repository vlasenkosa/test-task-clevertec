import React from 'react';

import Button from 'arui-feather/button';

import DialogWindow from '../DialogWindow/DialogWindow';

import {isEmpty} from "../../utils/utils";

import CONFIG from "../Config/Config";

const LoadButton = ({loading, result, form, onClickLoad, onClickCancel}) => (
    loading ?
        <DialogWindow message={CONFIG.app.loadMessage} onClickCancel={onClickCancel}/>
        :
        isEmpty(form) && isEmpty(result) ?
            <Button onClick={onClickLoad} text={CONFIG.buttons.generateForm} size={'m'} view={'action'}/>
            :
            null
);

export default LoadButton;