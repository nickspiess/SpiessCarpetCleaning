import React from 'react';
import "./home.css"

//import VideoLanding from './components/VideoLanding/VideoLanding'
import SecondLanding from './components/SecondLanding/SecondLanding'
import FirstLanding from './components/FirstLanding/FirstLanding'
import ThirdLanding from './components/ThirdLanding/ThirdLanding'
import FourthLanding from './components/FourthLanding/FourthLanding'
import Navbar from './components/Navbar/Nav'
import Footer from './components/Footer/footer'
import './home.css'


const Home = () => {
    return (
        <div class='main_container background_photo font-face-gm'>
            <div class="body">
                <div class="wrapper">
                    <FirstLanding />
                    <SecondLanding />
                    <ThirdLanding />
                    <FourthLanding />
                </div>
            </div>
        </div>
    );
};

export default Home;