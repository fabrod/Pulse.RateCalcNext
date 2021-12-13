import React, { ChangeEvent } from 'react';
import useStyles from './AmountTextField.styles'
import { FormControl, InputAdornment, Input } from '@material-ui/core';
import { FunctionComponent } from 'react';

type MSAmountTextFieldProps = {
    value: number,
    name: string,
    error: string | undefined,
    onChange?: (e: React.ChangeEvent<any>) => void
}

export const MSAmountTextField: FunctionComponent<MSAmountTextFieldProps> = ({ value, name, error, onChange }) => {
    const classes = useStyles()

    return <div className={classes.root}>
        <FormControl fullWidth className={classes.margin}>
            <Input
                id="standard-adornment-amount"
                type="number"
                value={value.toFixed(2)}
                name={name}
                error={error !== undefined}
                onChange={onChange!}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
        </FormControl>
    </div>
}