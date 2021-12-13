/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useStyles from './RightPanel.styles';

import Button from '@material-ui/core/Button';


export default function RightPanelLinks(props: any) {
    const classes = useStyles();
    //const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    //onClick={preventDefault}
    
    return (
        <div>
            <div>
                <Button className={`${classes.button}  ${classes.textwhite}`}>{props.traveler}</Button>
                <Button className={`${classes.button}  ${classes.textwhite}`}>{props.summary}</Button>
                <Button className={`${classes.button}  ${classes.textwhite}`}>{props.proposal}</Button>
                <Button className={`${classes.button}  ${classes.textwhite}`}>{props.deal}</Button>
            </div>

            <div>
                <Button className={`${classes.button}  ${classes.textwhite}`}>{props.profitability}</Button>
                <Button className={`${classes.button}  ${classes.textwhite}`}>{props.breakdown}</Button>
            </div>
        </div>
       
         
    );
}



