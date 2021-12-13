import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'float',
        flexDirection: 'column',
        width: 'calc(100%  - 300px)',
        padding: '10px',
        float: 'left',
        boxSizing: 'border-box',
    },
    half: {
        width: '50%',
        display: 'float',
        float: 'left',
        paddingRight: '5px',
        boxSizing: 'border-box',
    },
    halfDiv: {
        width: '50%',
        display: 'float',
        float: 'left',
    },
    textSixteen: {
        fontSize: '16px',
        margin: '0px',
    },
    textSixteenCenter: {
        fontSize: '16px',
    },
    textTwelve: {
        fontSize: '12px',
        margin: '0px',
        color: 'darkgray',
    },
    div3Over2: {
        width: '66%',
        display: 'float',
        float: 'left',
    },
    div3Over1: {
        width: '34%',
        display: 'float',
        float: 'left',
    },
    avatar: {
        backgroundColor: '#038387',
        width: '60px',
        height: '60px',
        marginRight: '10px',
        display: 'float',
        float: 'left',
    },
    avatarPink: {
        backgroundColor: '#E3008C',
        width: '60px',
        height: '60px',
        marginRight: '10px',
        display: 'float',
        float: 'left',
    },
    divFull: {
        width: '100%',
        display: 'float',
        float: 'left',
        border: '1px solid gray',
    },
    divHalfPadding: {
        width: 'calc(50% - 2px)',
        display: 'float',
        float: 'left',
        padding: '5px',
        boxSizing: 'border-box',
    },
    textfield: {
        margin: '0px',
        width: '100%',
        fontSize: '12px',
    },
    divider: {
        backgroundColor: 'lightgray',
        width: '2px',
        height: '105px',
        margin: '1px',
        display: 'float',
        float: 'left',
    },
    divHalfPadding5: {
        width: 'calc(50% - 5px)',
        marginTop: '10px',
        display: 'float',
        float: 'left',
        border: '1px solid gray',
    },
    divPadding5: {
        width: '100%',
        display: 'float',
        float: 'left',
        padding: '5px',
        boxSizing: 'border-box',
    },
    InfoOutlinedIcon: {
        width: '15px',
        height: '15px',
        color: '#337dcf',
        marginLeft: '5px',
    },
    charge: {
        margin: '0px',
        fontSize: '12px',
        color: 'gray',
    },
    divHousing: {
        width: 'calc(50% - 5px)',
        marginTop: '10px',
        display: 'float',
        float: 'right',
        border: '1px solid gray',
    },
    housingType: {
        margin: '0px',
        marginBottom: '5px',
        fontSize: '12px',
        fontWeight: 'bold',
    },
    button: {
        marginLeft: '5px',
    },
    divFullMarginTop: {
        width: '100%',
        marginTop: '10px',
        display: 'float',
        float: 'left',
        border: '1px solid gray',
    },
    addicon: {
        display: 'float',
        float: 'right',
        color: '#337DCF',
    },
    divFullMarginTopNoborder: {
        width: '100%',
        display: 'float',
        float: 'left',
        marginTop: '10px',
    },
    buttonSwitch: {
        display: 'float',
        float: 'left',
    },
    buttonSubmit: {
        display: 'float',
        float: 'right',
    },
    buttonSave: {
        marginRight: '5px',
        display: 'float',
        float: 'right',
    },
}));

export default useStyles;
