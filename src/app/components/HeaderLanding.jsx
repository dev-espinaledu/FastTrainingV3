import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

function HeaderLanding() {
    return (
        <header className="flex w-screen px-8 h-24 fixed items-center justify-between flex-wrap top-0 z-10 backdrop-blur ">
            <nav className='flex '>
                <Logo />
                
                <ul className='flex items-center gap-8 mx-20'>
                    <li><a className='text-zinc-50' href="#features">Características</a></li>
                    <li><a className='text-zinc-50' href="#about">Acerca de</a></li>
                </ul>
            </nav>
            <div className='flex gap-4 '>
                <Link className="text-zinc-50 mx-4 hover:text-gray-300 font-bold" to="/login">Iniciar Sesión</Link>
                <Link className="text-zinc-50 mx-4 hover:text-gray-300 font-bold" to="/register">Regístrate</Link>
            </div>
        </header>
    );
}

export default HeaderLanding;