import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Blog from './Blog';

const Header = () => {
    return (
        <div>
            <Link className='home' to='/'>Home</Link>
            <Link className='about' to='/About'>About</Link>
            <Link className='projects' to='/Projects'>Projects</Link>
            <Link className='blog' to="/Blog">Blog</Link>
            <Routes>
                <Route path='/Blog' element={<Blog />} />
            </Routes>
            <Link className='contact' to='/Contact'>Contact</Link>        
        </div>
    )
}

export default Header;