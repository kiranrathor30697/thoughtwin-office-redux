import React, { Component } from 'react'
import Footer from '../../components/rcc/Layouts.js/Footer'
import Header from '../../components/rcc/Layouts.js/Header'

export default class Logout extends Component {
  render() {
    return (
      <div>
        <Header />
          <main className='main_height'>
            <h1 className='App'>Logout</h1>
          </main>
        <Footer />
      </div>
    )
  }
}
