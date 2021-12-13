import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'float',
        flexDirection: 'column',
        width: '200px',
        backgroundColor: '#3C3C3C',
        padding: '10px',
        float: 'left',
    },
    avatar: {
        width: '60px',
        height: '60px',
        border: '1px solid #808080',
    },
    textwhite: {
        fontFamily: 'Arial',
        fontSize: '14px',
        color: 'white',
        margin: '0px',
    },
    textgray: {
        fontFamily: 'Arial',
        fontSize: '14px',
        color: 'gray',
        margin: '0px',
    },
    textyellow: {
        fontFamily: 'Arial',
        fontSize: '14px',
        color: '#CE8D23',
        margin: '0px',
        
    },
    textgreen: {
        fontFamily: 'Arial',
        fontSize: '14px',
        color: '#6BA543',
        margin: '0px',
        fontWeight: 'bold',
    },
    gray: {
        backgroundColor: 'gray',
    },
    yellow: {
        backgroundColor: '#CE8D23',
    },
    green: {
        backgroundColor: '#6BA543',
    },
    icon: {
        width: '15px',
        height: '15px',
        color: 'gray',
        marginLeft: '3px',
    },
   
}));

export default useStyles;
