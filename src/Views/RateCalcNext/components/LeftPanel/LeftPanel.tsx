import { useRecoilState } from 'recoil';

import Divider from '@material-ui/core/Divider';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import logo from '../../../../logo.svg';
import { themeState } from '../../../../Atom/atoms';
import useStyles from './LeftPanel.styles';
import { Tooltip } from '@material-ui/core';
import FormRates from '../FormRates/FormRates';
import LeftPanelText from './LeftPanelText';

const LeftPanel = () => {
    const classes = useStyles();
    const [theme] = useRecoilState(themeState);

    return (
        <div className={classes.root}>
            <img src={logo} className={classes.avatar} alt="avatar" />

            <LeftPanelText 
            deal="Deal Status:" 
            submit="Submitted" 
            dealId="Deal ID: 0639247" 
            create="Created:" 
            date="7/12/2021" 
            />

            <br />
            <LeftPanelText 
            career="Career Consultant" 
            pulse="Pulse Career Consultant" 
            client="Client Manager" 
            pulseClient="Pulse Client Manager" 
            />

            <br />
            <Divider style={{ backgroundColor: 'gray' }} />
            <br />

            <LeftPanelText 
            job="Job" 
            medsurg="Medsurg Tele 8 hour eve" 
            Bay="Bay Area of CA" 
            />

            <br />
            <LeftPanelText 
            unit="Unit" 
            telemetry="Telemetry / Med / Tele 8" 
            hours="hours shifts" 
            />

            <br />
            <LeftPanelText 
            shift="Shift" 
            dayEvening="Day, Evening" 
            />

            <br />
            <Divider style={{ backgroundColor: 'gray' }} />
            <br />

            <LeftPanelText
                vendor="Vendor"
                minus="-"
                vendorFee="Vendor Fee"
                rebate="Rebate"
                percent="0%"
                state="State Fee"
                percent2="0%"
                travelers="Travelers at Hospital"
                count="0"
            />

            <br />

            <p className={theme ? classes.textyellow : classes.textgreen}>
                Adjusted Bill Rates
                <Tooltip title="All rates display the Adjusted Bill Rate" placement="top">
                    <InfoOutlinedIcon className={classes.icon} />
                </Tooltip>
            </p>
            <br />
            {theme === true ? <Divider style={{ backgroundColor: '#CE8D23' }} /> : <Divider style={{ backgroundColor: '#6BA543' }} />}

            <br />
            <LeftPanelText 
            regular="Regular" 
            amount="$100.80" 
            />

            <br />
            <LeftPanelText 
            overtime="Overtime" 
            amount2="$151.20" 
            />

            <br />
            <LeftPanelText 
            call="Call" 
            amount3="$9.60" 
            />

            <br />
            <LeftPanelText 
            charge="Charge" 
            amount4="$0.00" 
            />

            <FormRates />
        </div>
    );
};

export default LeftPanel;
