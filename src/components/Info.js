import { Container, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    infoBlock: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white'
    }
})

const Info = () => {

    const classes = useStyles()

    return (
        < Container maxWidth="xl" >
            <Grid container direction="column">
                <Grid item xs={12} className={classes.infoBlock}>
                    Vegnerd is a Web app with the target of making some bookkeeping within gardening less painful. You can add and modify layouts and place garden plants there as well as information about their care in the app. Especially in the initial growing phase of vegetables and fruit it may be difficult to distinguish different plants from each other and it is this area that the app targets.  
                </Grid>
                <Grid item xs={12} className={classes.infoBlock}>
                    You can create flexible layouts and place plants and set useful information on each plant to make the care an easier task.
                </Grid>
            </Grid>
        </Container>
    )
}
export default Info