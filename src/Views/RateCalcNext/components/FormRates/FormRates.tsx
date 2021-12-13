import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import useStyles from './FormRates.styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

export default function FormRates() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <form>
            <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginTop: '20px' }}>
                Edit Rates and Fees
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Contractual Rates and Fees</DialogTitle>
                <DialogContent>
                    <Typography className={classes.root}>Rebate % </Typography>
                    <TextField autoFocus margin="dense" id="rebatePercent" label="0.00" type="number" variant="outlined" fullWidth />
                    <Typography className={classes.root}>Actual Regular Rate</Typography>

                    <TextField autoFocus margin="dense" id="actBill" label="$ 0.00" type="number" variant="outlined" fullWidth />
                    <Typography className={classes.root}>Actual Overtime Rate</Typography>

                    <TextField autoFocus margin="dense" id="actOvertime" label="$ 0.00" type="number" variant="outlined" fullWidth />
                    <Typography className={classes.root}>Actual Call Rate</Typography>

                    <TextField autoFocus margin="dense" id="actCall" label="$ 0.00" type="number" variant="outlined" fullWidth />
                    <Typography className={classes.root}>Actual Charge Rate</Typography>

                    <TextField autoFocus margin="dense" id="chargeRateActual" label="$ 0.00" type="number" variant="outlined" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained">
                        Cancel
                    </Button>
                    <Button className={classes.button} onClick={handleClose} color="primary" variant="contained">
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>
        </form>
    );
}
