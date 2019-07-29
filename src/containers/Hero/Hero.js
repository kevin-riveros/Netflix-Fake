import React, { Component } from 'react'
import './Hero.css';
import Button from './Button'

export default class Hero extends Component {
  render() {
    return (
        <div id="hero" className="Hero" style={{backgroundImage: 'url(https://addictedtohorrormovies.files.wordpress.com/2016/08/stranger-things-wallpaper.jpg)'}}>
        <div className="content">
            <img className="logo" src="https://vignette.wikia.nocookie.net/logopedia/images/a/ac/Stranger-things-tv-logo.png/revision/latest?cb=20170114222605" alt="narcos background" />
            <h2>Season 2 now available</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
            <div className="button-wrapper">
                <Button primary={true} text="Watch now" />
                <Button primary={false} text="+ My list" />
            </div>
            </div>
            <div className="overlay"></div>
      </div>
    )
  }
}
