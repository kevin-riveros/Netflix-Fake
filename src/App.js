import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import UserProfile from './components/UserProfile/UserProfile';
import Hero from './containers/Hero/Hero';
import './App.css';



class App extends Component {

  state = {
    searchTerm: ""
  }
  handleKeyUp=(e)=>{
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      //var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
      //this.setState({searchUrl:searchUrl});
      alert("search: "+this.state.searchTerm);
      this.setState({searchTerm : ""});  

    }
  }

  handleChange = (e)=>{
      this.setState({searchTerm : e.target.value});  
      //alert("HI");
  
  }

  render() {
    return (
      <div >
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a title..." value={this.state.searchTerm}/>
          </div>
          <UserProfile />
        </header>
        
        <Hero />
        <div>Solo vista de escritorio disponible...</div>
      </div>
    );
  }
}

export default App;
