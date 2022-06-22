import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import '../../../App.css'
export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
            <h1 className='App main_height'>This is My Home Page </h1>
        <Footer />
      </>
    )
  }
}
