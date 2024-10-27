import React from 'react'

const Footer = () => {
  return (
    <div style={{ height: '250px', marginTop:'100px' }} className='bg-violet-600 text-white mt-5 w-full p-4'>
      <div className="flex justify-between">
        <div style={{ width: '400px' }} className='intro'>
          <h5 className="text-xl font-bold"> <i class="fa-solid fa-truck-fast me-1"></i> E Cart</h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        <div className="flex flex-col">
          <h5 className="text-xl font-bold">Links</h5>
          <a href="" style={{ textDecoration: 'none', color: 'white' }}>Landing Page</a>
          <a href="" style={{ textDecoration: 'none', color: 'white' }}>Home Page</a>
          <a href="" style={{ textDecoration: 'none', color: 'white' }}>Watch History Page </a>
        </div>
        <div className="flex flex-col">
          <h5 className="text-xl font-bold">Guides</h5>
          <a href="" style={{ textDecoration: 'none', color: 'white' }}>React</a>
          <a href="" style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</a>
          <a href="" style={{ textDecoration: 'none', color: 'white' }}>React Router</a>
        </div>
        <div className='flex flex-col'>
          <h5 className="text-xl font-bold">Contact Us</h5>
          <div className="flex">
            <input placeholder='Enter your email' type="text" className='forn-control rounded p-1' />
            <button className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right"></i></button>
          </div>

          <div className="icons flex justify-between mt-3">
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>

      </div>
      <p className='text-center mt-5'>Copyright &copy; June 2024, E Cart. Built with React Redux.</p>
    </div>
  )
}

export default Footer