import React, { Component } from 'react'
import Footer from '../../components/rcc/Layouts.js/Footer'
import Header from '../../components/rcc/Layouts.js/Header'

export default class Register extends Component {
  render() {
    return (
        <div>
        <Header />
        <main className='main_height p-5' >         
            <form className='border bg-dark w-25 p-4 offset-4 rounded'>
                <h2 className='text-white mb-4'>Register Form</h2>
                <input type='text' name='userName' className='d-block form-control mb-3' placeholder='Enter user Name' />
                <input type='email' name='email' className='d-block form-control mb-3' placeholder='Enter Email' />
                <input type='password' name='password' className='d-block form-control mb-3' placeholder='Enter Password' />
                <input type='password' name='confirmPassword' className='d-block form-control mb-3' placeholder='Enter Confirm password' />
                <button type='submit' name='submit' className='btn btn-success'>Register Form</button>
            </form>
        </main>
        <Footer />
      </div>
    )
  }
}
