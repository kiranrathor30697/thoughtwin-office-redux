import React, { Component } from 'react'
import { connect, useSelector } from 'react-redux'
import Footer from '../../components/rcc/Layouts.js/Footer'
import Header from '../../components/rcc/Layouts.js/Header'

  const Login = () => {

    const store = useSelector(state=>state);
    console.log(store)
    return (
      <div>
        <Header />
        <main className='main_height p-5' >         
          <form className='border bg-dark w-25 p-4 offset-4 rounded  mb-5'>
              <h2 className='mb-4 text-white ms-4'>Login Form</h2>
              <input type='text' name='userName' className='d-block form-control mb-3' placeholder='Enter user Name' />
              <input type='password' name='password' className='d-block form-control mb-3' placeholder='Enter Password' />
              <button type='submit' name='submit' className='btn btn-success'>Register Form</button>
          </form>
        </main>
        <Footer />
      </div> 
    )
  }
 

export default Login;