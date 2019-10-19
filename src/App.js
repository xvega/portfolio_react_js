import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpg';

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
                <p>My name is Xavi. I'm a software engineer</p>
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
            </div>
        )
    }
}

export default App;