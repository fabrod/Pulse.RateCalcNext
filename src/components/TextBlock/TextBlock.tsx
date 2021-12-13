import {useRecoilState} from 'recoil';

import Typography from '@material-ui/core/Typography';

import { themeState } from '../../Atom/atoms';

import useStyles from './TextBlock.styles';

const TextBlock = (props: any) => {
    
    const classes = useStyles()
    const [theme] = useRecoilState(themeState);

    return (
        <div>
            {props.type === 'white' ?
                <Typography component="div" className={classes.white} >
                    <p className={classes.title}>{props.title}</p>
                    <h2 className={classes.value}>
                        <sup className={classes.sup}>{props.unit}</sup>
                        {props.value1}
                        <sup className={classes.sup}>{props.value2}</sup>
                    </h2>
                    {props.description !== '' ?
                        <p className={classes.description}>
                            {props.description}
                        </p>
                        :
                        ''
                    }
                </Typography>
                :
                <Typography component="div" className={theme ? classes.yellow : classes.green} >
                    <p className={classes.whitetitle}>Gross Profit Margin</p>
                    <h2 className={classes.whitevalue}>28.08%</h2>
                    <h3 className={classes.whitedescription}>$28.30 per hour</h3>
                </Typography>
            }
        </ div>
    );
}

export default TextBlock;