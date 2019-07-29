import React, { Component } from 'react'
import './UserProfile.css';
export default class UserProfile extends Component {
  render() {
    return (
        <div className="UserProfile">
            <div className="User">
            <div className="name">Jack Oliver</div>
            <div className="image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtG08A1ldEO-Un90tewZZdVyGBA2Ci9O-w-FZDNMCX2mCorEBs" alt="profile" /></div>
            </div>
      </div>
    )
  }
}
