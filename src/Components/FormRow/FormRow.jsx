import React from 'react';

import Input from 'arui-feather/input';

import Label from 'arui-feather/label';

import Select from 'arui-feather/select';

import './FormRow.scss';

import { getOptionsFromObject } from '../../utils/utils';

import CONFIG from "../Config/Config";

const FormRow = ({ item, onChange }) => (
    <div className={'formRow'}>
        <div className={'leftItem'}>
            <Label size={'l'}>{item.title}</Label>
        </div>
        <div className={'rightItem'}>
            {
                item.type === CONFIG.fieldsType.LIST.toUpperCase() ?
                    <Select
                        onChange={(value) => onChange(item.name, value[0])}
                        mode={'radio'}
                        name={item.name}
                        options={getOptionsFromObject(item.values)}
                    />
                    :
                    <Input
                        onChange={(value) => onChange(item.name, value)}
                        type={CONFIG.fieldsType[item.type]}
                    />
            }
        </div>
    </div>
);

export default FormRow;