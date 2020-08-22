import React from 'react'
import './Home.css'
import sounds from './images/sounds.png'
import tracker from './images/tracker.png'
import logo from './images/logo.png'

class Home extends React.Component {


    render() {
        return ( <
            div >
            <
            div class = 'container-logo' >
            <
            img class = 'image-logo'
            src = {
                logo
            }
            /> <
            /div>



            <
            div class = 'container-arrows' >
            <
            img class = 'arrow-left arrow'
            src = {
                sounds
            }
            /> <
            img class = 'arrow-right arrow'
            src = {
                tracker
            }
            /> <
            /div> <
            /div>
        )
    }

}

export default Home
