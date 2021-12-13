import useStyles from './RequiredLabel.styles'

const RequiredLabel = (props: any) => {
    const classes = useStyles()

    return (
        <p className={classes.label}>
            {props.label}
            <sup className={classes.mark}>
                {props.mark}
            </sup>
        </p>
    );
}

export default RequiredLabel;