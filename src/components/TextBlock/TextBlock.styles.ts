import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    white: {
        backgroundColor: '#FFF',
    },
    yellow: {
        backgroundColor: '#CE8D23',
    },
    green: {
        backgroundColor: '#6BA543',
    },
    whitetitle: {
        fontFamily: 'Arial',
        fontSize: '14px',
        color: 'white',
        margin: '0px',
        textAlign: 'center',
    },
    whitedescription: {
        fontFamily: 'Arial',
        fontSize: '14px',
        color: 'white',
        margin: '0px',
        textAlign: 'center',
    },
    whitevalue: {
        fontFamily: 'Teko,sans-serif',
        fontSize: '48px',
        color: 'white',
        margin: '0px',
        textAlign: 'center',
        
    },
    title: {
        textAlign: 'center',
        margin: '0px',
    },
    value: {
        fontSize: '48px',
        fontFamily: 'Arial',
        textAlign: 'center',
        margin: '0px',
        color: 'gray',
    },
    sup: {
        fontSize: '24px',
    },
    description: {
        fontFamily: 'Arial',
        fontSize: '12px',
        color: 'gray',
        margin: '0px',
        marginLeft: '5px',
        padding: '0px',
        paddingBottom: '5px',
    },
   
}));

export default useStyles;
