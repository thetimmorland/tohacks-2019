import React from 'react'
import TopBar from '../components/TopBar'
import '../App.css';
import { Typography, ListItem, ListItemText, Paper } from '@material-ui/core';
import axios from 'axios'
import List from '@material-ui/core/List'

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {}
        axios.get('http://localhost:8000/api/users/6/').then(resp => { // revise for token auth
            console.log(resp)
            this.setState({
                user: resp.data[0]
            })
        })

        // Run gets on jobs and postings
        axios.get('http://localhost:8000/api/jobs/').then(resp => {
            console.log(resp)
            this.setState({
                jobs: resp.data
            })
        })

        axios.get('http://localhost:8000/api/postings/').then(resp => {
            console.log(resp)
            this.setState({
                postings: resp.data
            })
        })
    }

    postClicked = (event) => {
        console.log(event)
    }

    getHours() {
        var sum = 0
        for (var i = 0; i < this.state.jobs.length; i++) {
            sum += this.state.jobs[i].hoursCompleted
        }
        return sum
    }

    render() {
        return (
            <div>
                {
                    this.state.user ? <TopBar user={this.state.user} /> : null
                }
                <div className="flexcontainer">
                    <div className='left'>
                        <Typography variant="h3">Completed Jobs</Typography>
                        <Paper>
                            <List>
                                {this.state.jobs ? this.state.jobs.map((job) =>
                                    <ListItem button key={job.id}>
                                        <ListItemText>{job.description}</ListItemText>
                                    </ListItem>
                                ) : null}
                            </List>
                        </Paper>
                        {this.state.jobs ? <Typography>Total Approved Hours: {this.getHours()}</Typography> : null}
                    </div>
                    <div className="Right">
                        <Typography variant='h3'>Postings</Typography>
                        <Paper>
                            <List>
                                {this.state.postings ? this.state.postings.map((posting) =>
                                    <ListItem button key={posting.id} onClick={this.postClicked}>
                                        <ListItemText>{posting.title} |  {this.state.user.email}</ListItemText>
                                    </ListItem>
                                ) : null}
                            </List>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage