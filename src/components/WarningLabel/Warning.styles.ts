import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'float',
        flexDirection: 'column',
        width: '200px',
        backgroundColor: '#3C3C3C',
        padding: '10px',
        float: 'left',
    },
    label: {
        padding: '10px', 
        backgroundColor: '#FBD9CC'
    },
    icon: {
        width: '16px', 
        height: '16px', 
        color: '#A80000', 
        marginRight: '20px',
    },
}))

export default useStyles