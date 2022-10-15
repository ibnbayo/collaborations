import React from 'react'
// import {Typography, AppBar} from '@mui/material'
// import { makeStyles } from '@mui/styles'
import Mafo from './components/Mafo'
import VideoPlayer from './components/VideoPlayer'
import Notifications from './components/Notifications'
import Options from './components/Options'

const App = () => {
    return (
        <div>
            <Mafo/>
            <div className='hd'>hdhdh</div>
            <div>Real Time Video Call</div>
            {/* <AppBar position='static' color='inherit'>
                <Typography variant='h1' align='center'>Real Time Video Call</Typography>
            </AppBar> */}
            <VideoPlayer />
            <Options>
                <Notifications/>
            </Options>

        </div>
    )
}

export default App