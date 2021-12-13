import useStyles from './Warning.styles'
import WarningSharpIcon from '@material-ui/icons/WarningSharp';

const WarningLabel = (props: any) => {
    const classes = useStyles()

    return (
        <p className={classes.label}>
            <sub>
                <WarningSharpIcon className={classes.icon} />
            </sub>
            {props.label}
        </p>
    );
}

export default WarningLabel;