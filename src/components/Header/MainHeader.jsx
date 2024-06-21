import React from 'react'
import Logo from '../../assets/Logo/logo.png'
import { Link } from 'react-router-dom'
import SearchBar from './Search/SearchBar'
import Cart from './Cart/Page'


export default function MainHeader() {
  return (
    <>
      <div>
        <div className=' flex items-center gap-10 ml-9 mt-2'>
          <div>
            <Link to='/'>
              <img src={Logo} alt='Logo' width={200} />
            </Link>
          </div>

          <div>
            <SearchBar />
          </div>

          <div className='flex items-center gap-3 ml-7'>
            <div className='flex gap-8 text-[1.2rem]'>
              <Link
                to='/News'
                className='hover:text-light-blue duration-[0.3s]'
              >
                News
              </Link>

              <Link
                to='/About'
                className=' hover:text-light-blue duration-[0.3s]'
              >
                About
              </Link>

              <Link
                to='/Sell'
                className='hover:text-light-blue duration-[0.3s]'
              >
                Sell
              </Link>

              <Link
                to='/Help'
                className='hover:text-light-blue duration-[0.3s]'
              >
                Help
              </Link>
            </div>

            <div className='ml-10'>
              <Cart />
            </div>

            <div className='text-[1.1rem] flex gap-5 ml-7'>
              <Link to='/LogPage' className='log-link'>
                <button className='login-sign'>Sign Up</button>
              </Link>
              <Link to='/LogPage' className='log-link log-link-s'>
                <button className='login'>Log In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
