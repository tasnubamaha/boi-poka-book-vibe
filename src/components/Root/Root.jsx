import React from 'react'
import { Outlet } from 'react-router-dom'
import {NavBar} from '../NavBar/NavBar'
import {Footer} from '../Footer/Footer'


export const Root = () => {
  return (
    <div className='max-w-6xl mx-auto'>
       <NavBar></NavBar>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  );
};


