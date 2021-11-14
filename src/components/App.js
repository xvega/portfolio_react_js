import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.jpg';
// import Jokes from './Jokes';

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
                <p>I'm Xavi.</p>
                < Title />
                <p>I'm always looking forward to working on meaningful projects</p>
                { 
                    this.state.displayBio ? (
                        <div>
                            <p>I am from San Jose, Costa Rica, but I'm currently living in the Netherlands</p>
                            <p>My favorite programming language is Ruby. I'm currently learning React</p>
                            <p>I'm also learning AWS.</p>
                            <p>I like learning languages, playing videogames/boardgames and meeting new people</p>
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
                {/*<Jokes />*/}
            </div>
        )
    }
}

export default App;