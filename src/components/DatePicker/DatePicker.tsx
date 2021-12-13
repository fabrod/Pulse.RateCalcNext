import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import {Grid, } from '@material-ui/core';

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {/* <Grid container justifyContent="space-around"> */}
            <Grid container>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

export default DatePicker;