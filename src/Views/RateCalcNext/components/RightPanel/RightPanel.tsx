import { useRecoilState } from 'recoil';

import Divider from '@material-ui/core/Divider';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Tooltip } from '@material-ui/core';
import TextBlock from '../../../../components/TextBlock/TextBlock';
import { themeState } from '../../../../Atom/atoms';
import useStyles from './RightPanel.styles';
import RightPanelLinks from './RightPanelLinks';
import Typography from '@material-ui/core/Typography';
//import  {VERSION}  from './VersionUtils';

const RightPanel = () => {
    const classes = useStyles();
    const [theme] = useRecoilState(themeState);

    return (
        
        <div className={classes.root}>
            <Typography className={theme ? classes.textyellow : classes.textgreen}>
                Pay To Traveler
                <Tooltip title="Rate Calc Version:" placement="bottom">
                    <InfoOutlinedIcon className={classes.icon} />
                </Tooltip>
            </Typography>
            <br />

            <Divider className={theme ? classes.yellow : classes.green} />
            <br />

            <TextBlock 
            type="white" 
            title="Gross Pay / week" 
            unit="$" 
            value1="2347" 
            value2=".00" 
            description="" 
            />
            <br />

            <TextBlock
                type="white"
                title="Take Home Pay / week"
                unit="$"
                value1="1538"
                value2=".46"
                description="Gross pay and take home pay are inclusive of wages and tax free reimbursements."
            />
            <br />

            <RightPanelLinks 
            traveler="Optimize Traveler Pay" 
            summary="View Pay Summary" 
            proposal="Cost Proposal" 
            deal="Split Deal" 
            />
            <br />

            <Typography className={theme ? classes.textyellow : classes.textgreen}>Costs & Revenue</Typography>
            <br />

            <Divider className={theme ? classes.yellow : classes.green} />
            <br />

            <TextBlock 
            title="Gross Profit Margin" 
            value1="28.08%" 
            description="$28.30 per hour" 
            />
            <br />

            <RightPanelLinks 
            profitability="Profitability" 
            breakdown="View Cost Breakdown" 
            />
            
            <br />

            <Typography className={classes.textgray}>Total Revenue</Typography>
            <Typography className={classes.textgray}>$52416.00</Typography>
            <br />
            <Typography className={classes.textgray}>Total Costs</Typography>
            <Typography className={classes.textgray}>$37698.38</Typography>
            <br />
            <Typography className={classes.textgray}>Profit</Typography>
            <Typography className={classes.textgray}>$14717.62</Typography>

            <br />
            
        </div>
        
    );
};

export default RightPanel;
