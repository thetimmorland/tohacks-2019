import React from 'react'
import TopBar from '../components/TopBar'
import '../App.css';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className="flex-container">
                    <div className="Green"></div>
                    <div className="Red" />
                </div>
            </div>
        )
    }
}

export default HomePage