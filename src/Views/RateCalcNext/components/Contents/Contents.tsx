

import { Avatar, Switch, FormControlLabel, Divider, TextField, Button } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Addicon from '@material-ui/icons/Add';

import { MSAmountTextField } from '../../../../components/AmountTextField/AmountTextField';
import DatePicker from '../../../../components/DatePicker/DatePicker';
import MyTable from '../../../../components/MyTable/MyTable';
import WarningLabel from '../../../../components/WarningLabel/WarningLabel';
import GrayLabel from '../../../../components/GrayLabel/GrayLabel';
import RequiredLabel from '../../../../components/RequiredLabel/RequiredLabel';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import useStyles from './Contents.styles';
import { Tooltip } from '@material-ui/core';

const Contents = () => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            taxed: false,
            stipendTravel: false,
            hourlyWages: 16.50
        },
        validationSchema: RateCalcSchema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      
    return (
        <div className={classes.root}>
            <form onSubmit={formik.handleSubmit}>
                <WarningLabel label="The traveler associated with this deal does not have a valid permanent address." />

                <div className={classes.halfDiv}>
                    <Avatar className={classes.avatar}>A</Avatar>
                    <p className={classes.textSixteen}>Alta Bates Summit Medical ...</p>
                    <p className={classes.textTwelve}>350 Hawthorne Avenue</p>
                    <p className={classes.textTwelve}>Okland, CA 94609</p>
                </div>

                <div className={classes.halfDiv}>
                    <div className={classes.div3Over2}>
                        <Avatar className={classes.avatarPink}>JS</Avatar>
                        <p className={classes.textSixteenCenter}>jpop secrettest</p>
                    </div>
                    <div className={classes.div3Over1}>
                        <FormControlLabel
                            control={<Switch checked={formik.values.taxed} onChange={formik.handleChange} name="taxed" color="primary" />}
                            label="Taxed"
                        />

                        <FormControlLabel
                            control={<Switch checked={formik.values.stipendTravel} onChange={formik.handleChange} name="stipendTravel" color="primary" />}
                            label="Stipend Travel"
                        />
                    </div>
                </div>

                <div className={classes.divFull}>
                    <GrayLabel label="Assignment Details" />
                    <div className={classes.divHalfPadding}>
                        <div className={classes.half}>
                            <RequiredLabel label="Start" mark="*" />
                            <DatePicker />
                            <RequiredLabel label="Assignment Length (weeks)" mark="*" />
                            <TextField label="" className={classes.textfield} />
                        </div>

                        <div className={classes.half}>
                            <RequiredLabel label="End" mark="*" />
                            <DatePicker />
                            <RequiredLabel label="Work Week End Day (MedSol)" mark="*" />
                            <TextField label="" className={classes.textfield} />
                        </div>
                    </div>

                    <Divider orientation="vertical" className={classes.divider}></Divider>

                    <div className={classes.divHalfPadding}>
                        <div className={classes.half}>
                            <RequiredLabel label="Regular Hours" mark="*" />
                            <TextField label="" className={classes.textfield} />
                            <RequiredLabel label="Call Hours" mark="" />
                            <TextField label="" className={classes.textfield} />
                        </div>

                        <div className={classes.half}>
                            <RequiredLabel label="Overtime Hours" mark="" />
                            <TextField label="" className={classes.textfield} />
                            <RequiredLabel label="Orientation Hours" mark="" />
                            <TextField label="" className={classes.textfield} />
                        </div>
                    </div>
                </div>

                <div className={classes.divHalfPadding5}>
                    <GrayLabel label="Wages" />
                    <div className={classes.divPadding5}>
                        <div className={classes.half}>
                            <RequiredLabel label="Regular (Minimum: $16.50)" mark="*" />
                            <MSAmountTextField value={formik.values.hourlyWages} onChange={formik.handleChange} name="hourlyWages" error={formik.errors.hourlyWages} />
                            <RequiredLabel label="Call" mark="*" />
                            <MSAmountTextField value={0} name="overtimeWages" error={undefined} />
                        </div>

                        <div className={classes.half}>
                            <RequiredLabel label="Overtime (Minimum $24.75)" mark="" />
                            <MSAmountTextField value={0} name="callPay" error={undefined} />
                            <p className={classes.charge}>
                                Charge
                                <Tooltip title="If there is no Charge Bill Rate, this field will not be editable" placement="top">
                                    <InfoOutlinedIcon className={classes.InfoOutlinedIcon} />
                                </Tooltip>
                            </p>
                            <MSAmountTextField value={0} name="chargePay" error={undefined} />
                        </div>
                    </div>
                </div>

                <div className={classes.divHousing}>
                    <GrayLabel label="Housing and Per Diem" />
                    <div className={classes.divPadding5}>
                        <p className={classes.housingType}>
                            Housing Type
                            <InfoOutlinedIcon className={classes.InfoOutlinedIcon} />
                        </p>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Stipend
                        </Button>
                        <Button variant="contained" className={classes.button}>
                            MS Provided
                        </Button>
                        <Button variant="contained" className={classes.button}>
                            Hospital Provided
                        </Button>
                    </div>

                    <div className={classes.divPadding5}>
                        <div className={classes.half}>
                            <RequiredLabel label="Regular (Minimum: $16.50)" mark="*" />
                            <MSAmountTextField value={0} name="hourlyWages" error={undefined} />
                        </div>

                        <div className={classes.half}>
                            <RequiredLabel label="Overtime (Minimum $24.75)" mark="" />
                            <MSAmountTextField value={0} name="overtimeWages" error={undefined} />
                        </div>
                    </div>
                </div>

                <div className={classes.divFullMarginTop}>
                    <Addicon className={classes.addicon} />
                    <GrayLabel label="Additional Costs" />
                    <MyTable />
                </div>

                <div className={classes.divFullMarginTopNoborder}>
                    <Button variant="contained" color="primary" className={classes.buttonSwitch}>
                        Switch to PlayCalc
                    </Button>
                    <Button type="submit" variant="contained" className={classes.buttonSubmit}>
                        Submit
                    </Button>
                    <Button type="submit" variant="contained" color="primary" className={classes.buttonSave}>
                        Save
                    </Button>
                </div>
            </form>
        </div>
    );
};

const RateCalcSchema = Yup.object().shape({
    hourlyWages: Yup.number()
      .min(16.50, 'Hourly wage must be greater than $16.50')
      .required('Required'),
  });

export default Contents;
