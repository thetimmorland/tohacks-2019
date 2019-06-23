import React from 'react'
import TopBar from '../components/TopBar'
import '../App.css';
import { Typography, ListItem, ListItemText } from '@material-ui/core';
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
    }

    render() {
        return (
            <div>
                {
                    this.state.user ? <TopBar user={this.state.user} /> : null
                }
                {/* <div className="flexcontainer">
                    <div>
                        <Typography variant="h3">Completed Jobs</Typography>
                        <List>
                            {this.state.jobs ? this.state.jobs.map((job) =>
                                <ListItem button key={job.id}>
                                  <ListItemText>{job.description}</ListItemText>
                                  <ListItemText>Hours Complete: {job.hoursCompleted}</ListItemText>
                                </ListItem>
                              ) : null}
                        </List>
                    </div>
                    <div></div>
                </div> */}
            </div>
        )
    }
}

export default HomePage