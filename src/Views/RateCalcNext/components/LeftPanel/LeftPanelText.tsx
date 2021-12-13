/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useStyles from './LeftPanel.styles';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

export default function LeftPanelText(props: any) {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid item>
                <Typography className={classes.textwhite}>{props.deal}</Typography>
                <Typography className={classes.textwhite}>{props.submit}</Typography>
                <Typography className={classes.textgray}>{props.dealId}</Typography>
                <Typography className={classes.textgray}>{props.create}</Typography>
                <Typography className={classes.textgray}>{props.date}</Typography>
            </Grid>

            <Grid item>
                <Typography className={classes.textwhite}>{props.career}</Typography>
                <Typography className={classes.textgray}>{props.pulse}</Typography>
                <Typography className={classes.textwhite}>{props.client}</Typography>
                <Typography className={classes.textgray}>{props.pulseClient}</Typography>
            </Grid>

            <Grid item>
                <Typography className={classes.textgray}>{props.job}</Typography>
                <Typography className={classes.textwhite}>{props.medsurg}</Typography>
                <Typography className={classes.textwhite}>{props.Bay}</Typography>
            </Grid>

            <Grid item>
                <Typography className={classes.textgray}>{props.unit}</Typography>
                <Typography className={classes.textwhite}>{props.telemetry}</Typography>
                <Typography className={classes.textwhite}>{props.hours}</Typography>
            </Grid>

            <Grid item>
                <Typography className={classes.textgray}>{props.shift}</Typography>
                <Typography className={classes.textwhite}>{props.dayEvening}</Typography>
            </Grid>

            <Grid item>
                <Typography className={classes.textgray}>{props.vendor}</Typography>
                <Typography className={classes.textwhite}>{props.minus}</Typography>
                <Typography className={classes.textgray}>{props.vendorFee}</Typography>
                <Typography className={classes.textgray}>{props.rebate}</Typography>
                <Typography className={classes.textwhite}>{props.percent}</Typography>
                <Typography className={classes.textgray}>{props.state}</Typography>
            </Grid>

            <Grid item>
                <Typography className={classes.textwhite}>{props.percent2}</Typography>
                <Typography className={classes.textgray}>{props.travelers}</Typography>
                <Typography className={classes.textwhite}>{props.count}</Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.textgray}>{props.regular}</Typography>
                <Typography className={classes.textwhite}>{props.amount}</Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.textgray}>{props.overtime}</Typography>
                <Typography className={classes.textwhite}>{props.amount2}</Typography>
            </Grid>

            <Grid item>
                <Typography className={classes.textgray}>{props.call}</Typography>
                <Typography className={classes.textwhite}>{props.amount3}</Typography>
            </Grid>

            <Grid item>
                <Typography className={classes.textgray}>{props.charge}</Typography>
                <Typography className={classes.textwhite}>{props.amount4}</Typography>
            </Grid>
        </Grid>
    );
}
