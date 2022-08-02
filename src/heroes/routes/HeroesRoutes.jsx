import React from 'react'
import {Route,Routes,Navigate} from 'react-router-dom'
import {Navbar} from '../../ui'
import { MarvelPage,DcPage,HeroPage,SearchPage } from '../pages'
export const HeroesRoutes = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='container animate__animated animate__backInDown'>
        <Routes>
            <Route path='marvel' element={<MarvelPage></MarvelPage>} />
            <Route path='dc' element={<DcPage></DcPage>} />
            <Route path='search' element={<SearchPage></SearchPage>} />
            <Route path='hero/:id' element={<HeroPage/>} />
            <Route path='/' element={<Navigate to='/marvel'/>} />
            
        </Routes>
    </div>
    </>
  )
}

