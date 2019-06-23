import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@material-ui/core';

class UserDialog extends React.Component {
    render() {
        return (
            <Dialog>
                <DialogTitle>User</DialogTitle>
                <DialogContent>
                    <Typography>{this.props.user.firstName} {this.props.user.lastName}</Typography>
                    <Typography>{this.props.user.email}</Typography>
                    <Typography>{this.props.user.type}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button>Close</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default UserDialog