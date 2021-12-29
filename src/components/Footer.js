import Copyright from "./Copyright"
import { Grid, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    headerSection: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white'
    }
})

const Footer = () => {
    const classes = useStyles()


    return (
        <Container maxWidth="xl">
            <Grid container direction="column" justifyContent="center">
                <Grid item xs={12} className={classes.headerSection}>
                    <Copyright />
                </Grid>
            </Grid>

        </Container>
    )
}
export default Footer