import React from 'react';

import Spin from 'arui-feather/spin';

import Button from 'arui-feather/button';

import Plate from 'arui-feather/plate';

import Heading from 'arui-feather/heading';

import CONFIG from "../Config/Config";

const DialogWindow = ({ message ,onClickCancel, spin = true }) => (
        <Plate className={'center'}>
            <Spin visible={spin} size={'xl'}/>
            <Heading size={'xl'}>
                {message}
            </Heading>
            <Button onClick={onClickCancel} text={CONFIG.buttons.cancel} size={'l'} view={'extra'}/>
        </Plate>
);

export default DialogWindow;