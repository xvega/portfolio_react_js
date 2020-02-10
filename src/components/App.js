import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.jpg';
import Jokes from './Jokes';

class App extends Component{
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    render() {
        return(
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Xavi.</p>
                < Title />
                <p>I'm always looking forward to working on meaningful projects</p>
                { 
                    this.state.displayBio ? (
                        <div>
                            <p>I live in San Jose, Costa Rica</p>
                            <p>My favorite language is Ruby but I'm learning React</p>
                            <p>Besides coding, I also love learning Russian and Polish</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                <hr />
                <Jokes />
            </div>
        )
    }
}

export default App;