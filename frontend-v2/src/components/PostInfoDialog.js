import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@material-ui/core';

class PostInfoDialog extends React.Component {
    render() {
        return (
            <Dialog>
                <DialogTitle>{this.props.post.title}</DialogTitle>
                <DialogContent></DialogContent>
                <DialogActions>
                    <Button>Close</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default PostInfoDialog