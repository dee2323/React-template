import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import Profile from '../Profile/Profile'
import SocialMedia from '../SocialMedia/SocialMedia'
import Work from '../Work/Work'

export default class Index extends Component {
  render() {
    return (
      <>
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <SocialMedia />
      <Footer /> 
      </>
    )
  }
}
