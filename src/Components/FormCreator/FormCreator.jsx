import React from 'react';

import Button from 'arui-feather/button';

import Heading from 'arui-feather/heading';

import Form from 'arui-feather/form';

import FormRow from "../FormRow/FormRow";

import DialogWindow from '../DialogWindow/DialogWindow';

import './FormCreator.scss';

import {isEmpty} from "../../utils/utils";

import CONFIG from "../Config/Config";

const FormCreator = ({ sending, form, onChange, onSubmit, onClickCancel }) => (
    isEmpty(form) ? null :
        sending ?  <DialogWindow message={CONFIG.app.uploadMessage} onClickCancel={onClickCancel}/>
            :
        <div>
            <Form onSubmit={onSubmit}>
                <div className={'center'}>
                    <Heading>{form.title}</Heading>
                    {
                        form.fields.map(item => (
                            <FormRow item={item} onChange={onChange}/>
                        ))
                    }
                    <div className={'submit'}>
                        <Button
                            type={'submit'}
                            view={'extra'}
                            width={'available'}
                            text={CONFIG.buttons.submit}
                            size={'m'}
                        />
                    </div>
                </div>
            </Form>
        </div>
);

export default FormCreator;
