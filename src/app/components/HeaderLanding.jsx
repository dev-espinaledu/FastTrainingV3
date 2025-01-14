import React from 'react';
import Link from 'next/link'; // Importa el componente Link de Next.js
import Logo from './Logo'; // Asume que el Logo ya está implementado correctamente

function HeaderLanding() {
    return (
        <header className="flex w-screen px-8 h-24 fixed items-center justify-between flex-wrap top-0 z-10 backdrop-blur">
            <nav className="flex">
                <Logo />

                <ul className="flex items-center gap-8 mx-20">
                    {/* Enlaces internos usando # para anclajes */}
                    <li>
                        <a className="text-zinc-50" href="#">Características</a>
                    </li>
                    <li>
                        <a className="text-zinc-50" href="/">Acerca de</a>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-4">
                {/* Usa Link de Next.js para navegación interna */}
                <Link className="text-zinc-50 mx-4 hover:text-gray-300 font-bold" href="/login/">Iniciar Sesión</Link>
                <Link className="text-zinc-50 mx-4 hover:text-gray-300 font-bold" href="/register">Regístrate</Link>
            </div> 
        </header>
    );
}


export default HeaderLanding;
