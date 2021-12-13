import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: '15px',
        fontWeightLight: 100,
        color: '#333333',
        fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
    },
    label: {
        padding: '5px 0px',
        display: 'block',
    },
    button: {
        marginRight: '15px',
    },
}));

export default useStyles;
