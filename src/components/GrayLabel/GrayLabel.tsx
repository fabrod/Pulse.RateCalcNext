import useStyles from './GrayLabel.styles'

const GrayLabel = (props: any) => {
    const classes = useStyles()

    return (
        <p className={classes.label}>
            {props.label}
        </p>
    );
}

export default GrayLabel;