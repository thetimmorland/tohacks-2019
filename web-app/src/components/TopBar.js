import React from 'react'
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@material-ui/core'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import PropTypes from 'prop-types'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import UserDialog from './UserDialog';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 60,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
})

class TopBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
    console.log(this.state.searchText)
  }

  userClicked = () => {
    this.setState({open: true})
  }
  
  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const { classes } = this.props
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">
            VolunteerMe
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={this.handleChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              color="secondary"
            />
          </div>
          <IconButton color="inherit" onClick={this.userClicked}>
              <AccountCircle />
          </IconButton>
          {
            this.state.open ? <UserDialog handleClose={this.handleClose} open={this.state.open} user={this.props.user} /> : null
          }
        </Toolbar>
      </AppBar>
    )
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TopBar)