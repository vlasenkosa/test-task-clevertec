import React from 'react';

import Heading from 'arui-feather/heading';

import { FormContainer, ResultContainer, LoadButtonContainer } from '../Containers/index';

import './App.scss';

import CONFIG from "../Config/Config";

const App = () => (
    <div className="page">
        <Heading size={'xl'}>
            {CONFIG.app.title}
        </Heading>
        <LoadButtonContainer/>
        <FormContainer/>
        <ResultContainer/>
    </div>
);

export default App;
