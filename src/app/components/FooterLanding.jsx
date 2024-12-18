import React from 'react';
import { Link } from 'react-router-dom';

function FooterLanding() {
    return (
    <footer className="flex w-screen flex-col items-center justify-between h-fit pt-8 gap-8">
        <section className='flex justify-around w-full '>
            <figure>
                <img src="/public/logotipo.png" alt="" />
            </figure>
            <section>
                <ul className='flex text-4xl gap-1'>
                    <li>
                        <Link><i class="fa-brands fa-square-facebook"></i></Link>
                    </li>
                    <li>
                        <Link>
                            <i class="fa-brands     fa-square-instagram"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i class="fa-brands fa-square-x-twitter"></i>  
                        </Link>
                    </li>
                </ul>
                <p>@Fast_training</p>
            </section>
            <section className='text-zinc-500 font-bold text-left'>
                <h3>Contáctanos:</h3>
                <p>+57 312 345 6789</p>
                <p>fast@training.com</p>
            </section>
        </section>
        <p className='text-zinc-500 text-sm'>&copy; 2024 Mi Landing Page. Todos los derechos reservados.</p>
    </footer>
    );
}

export default FooterLanding;