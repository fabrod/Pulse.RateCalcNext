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
    textblack: {
        fontFamily: 'Arial',
        fontSize: '14px',
        color: 'black',
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
    yellow: {
        backgroundColor: '#CE8D23',
    },
    green: {
        backgroundColor: '#6BA543',
    },
    icon: {
        width: '15px',
        height: '15px',
        color: 'white',
        marginLeft: '55px',
    },
    button: {
        textTransform: "none"
      }
  
}));

export default useStyles;
