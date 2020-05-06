import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import AppIcon from '../images/icon.png'

//MUI Stuff
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const styles = {
    form: {
        textAlign: 'center'
    },
    image: {
        margin: '20px auto 20px auto'
    }
}

class login extends Component {

    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
            loading:false,
            errors:{}
        }
    }

    handleSubmit = (event) => {
        console.log("Hi")
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.form}>
                <Grid item sm></Grid>
                <Grid item sm>
                    <img src={AppIcon} alt="" monkey className={classes.image}></img>
                    <Typography variant="h2" className={classes.pageTitle}>Login</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id="email" name="email" type="email" label="Email"
                        className={classes.textField} value={this.state.email} onChange={this.handleChange}
                        fullWidth></TextField>

                        <TextField id="password" name="password" type="password" label="Password"
                        className={classes.textField} value={this.state.email} onChange={this.handleChange}
                        fullWidth></TextField>
                    </form>
                </Grid>
                <Grid item sm></Grid>
            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login)
