import React, { Fragment } from 'react'
import Footer from './footer'
import Navbar from './navbar'

const DefaultLayout = (props) => {
  return (
    <Fragment>
      <div className='w-full flex items-start justify-center'>
        <div className='w-full max-w-[2700px] flex items-center justify-start flex-col overflow-hidden'>
          <Navbar />

          <main className='w-full h-full min-h-[80vh] flex items-center justify-start flex-col z-10 overflow-hidden'>
            {props.children}
          </main>

          <Footer />
        </div>
      </div>
    </Fragment>
  )
}

export default DefaultLayout