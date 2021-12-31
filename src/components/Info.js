import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles({
    body: {
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        justifyContent: 'start'
    },
    header: {
        paddingBottom: 15,
        paddingTop: 15,
        fontSize: 20
    }
})

const Info = () => {
    const classes = useStyles()

    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <Typography variant="h3" className={classes.header}>
                            About the app
                        </Typography>
                        <Typography variant="body1" className={classes.body}>
                            Vegnerd is an app for hobby gardeners who want to manage information
                            about garden plants and their specific characteristics by using a web browser.
                            One may add notes specific to a plant, e.g. information about the
                            fertilization, plant date and a general care instructions. It is    
                            also planned that it is possible to create and manage layouts so
                            you can have the same setup as in your own garden/greenhouse.
                        </Typography>
                        <Typography variant="body1" className={classes.body}>
                            You will need a user account to be able to start using
                            the service.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}
export default Info
