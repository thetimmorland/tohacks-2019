import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@material-ui/core';

class PostInfoDialog extends React.Component {
    render() {
        return (
            <Dialog open={this.props.open}>
                <DialogTitle>{this.props.post.title}</DialogTitle>
                <DialogContent>
                    <Typography>{this.props.post.description}</Typography>
                    <Typography>Contact: {this.props.poster.email}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button>Close</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default PostInfoDialog