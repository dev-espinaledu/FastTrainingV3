import { Link } from 'react-router-dom';

function MainLanding() {
    return (
        <main className="main-content">
            <section className='w-screen h-screen bg-cover bg-center' style={{backgroundImage:'url("/public/soccer-ball-stadium.jpeg")'}}>
                <div className='bg-cyan-800/50 z-10 w-full h-full flex justify-center items-center'>
                    <section className='backdrop-blur-sm text-center flex flex-col w-full justify-center items-center text-white h-full'>
                        <h1 className='font-racing text-7xl mb-4'>Fast Training</h1>
                        <h2 className='text-5xl font-black w-1/2 mb-4'>Revoluciona tus entrenamientos de fútbol</h2>
                        <p className='text-2xl w-2/3'>Planifica, administra y visualiza el progreso de tu equipo con estadísticas detalladas, todo desde una sola aplicación.</p>

                        <Link to="/register"><button className='border text-2xl font-normal py-2 px-4  mt-4'>Registrarse</button></Link>
                    </section>
                </div>
            </section>
            {/* Beneficios */}
        <section id="features" className='h-fit bg-sky-950 flex flex-col items-center'>
            <section className='w-fit '>
                <h2 className='text-white font-black text-4xl pt-16'>Beneficios Principales</h2>
                <div className='h-2 w-full bg-sky-500 mx-auto'></div>
            </section>
            <section className='flex my-16 gap-16'>
                <div className='flex flex-col w-56 h-72 justify-evenly items-center gap-4 border rounded-2xl'>
                    <figure className='w-36'>
                        <img src="/public/personalization-icon.png" alt="" />
                    </figure>
                    <h3 className='text-white font-black text-xl'>Entrenamientos Personalizados</h3>
                </div>
                <div className='flex flex-col w-56 h-72 justify-evenly items-center gap-4 border rounded-2xl'>
                    <figure className='w-36'>
                        <img src="/public/stats.png" alt="" />
                    </figure>
                    <h3 className='text-white font-black text-xl'>Estadisticas Detalladas</h3>
                </div>
                <div className='flex flex-col w-56 h-72 justify-evenly items-center gap-4 border rounded-2xl'>
                    <figure className='w-36'>
                        <img src="/public/maps-and-location.png" alt="" />
                    </figure>
                    <h3 className='text-white font-black text-xl'>Acceso desde cualquier lugar</h3>
                </div>
                <div className='flex flex-col w-56 h-72 justify-evenly items-center gap-4 border rounded-2xl'>
                    <figure className='w-36'>
                        <img src="/public/facil-de-usar.png" alt="" />
                    </figure>
                    <h3 className='text-white font-black text-xl'>Fácil de Usar</h3>
                </div>
            </section>
        </section>
        
        <section id="about" className='w-screen h-fit bg-cover bg-no-repeat bg-bottom bg-fixed' style={{backgroundImage:'url("/public/soccer-player.jpeg")'}}>
            <div className='bg-cyan-800/50 grayscale-0 z-10 w-full h-full flex flex-col justify-center items-center'>
            <section className='w-fit '>
                <h2 className='text-white font-black text-4xl pt-16'>Sobre nosotros</h2>
                <div className='h-2 w-full bg-sky-500 mx-auto'></div>
            </section>
                <section className='flex w-full justify-evenly m-4 mb-12'>
                    <section className='flex items-center h-fit w-5/12 p-4 gap-4'>
                        <section className='w-2/3'>
                            <h3 className='text-white font-black text-2xl my-4'>Misión</h3>
                            <p className='text-xl text-white'>Nuestra misión es optimizar el rendimiento de cada futbolista mediante un seguimiento exhaustivo y personalizado de su evolución durante el proceso de entrenamiento. Nos dedicamos a impulsar el máximo potencial de los jugadores en el campo, fomentando la mejora continua y el éxito sostenido de los equipos.</p>
                        </section>
                        <figure className='w-1/3'>
                            <img src="/public/objective.png" alt="" />
                        </figure>
                    </section>
                    <section className='flex items-center h-fit w-5/12 p-4 gap-4'>
                        <section className='w-2/3'>
                            <h3 className='text-white font-black text-2xl my-4'>Visión</h3>
                            <p className='text-xl text-white'>Para 2030 la app deportiva será reconocida a nivel nacional como potencia en software de creación de mesociclos. Recopilando las estadísticas para transformarlas en mejoras tangibles en el rendimiento individual y colectivo de los equipos de fútbol Colombiano. Se estima que para 2030 el aproximado de usuarios sea el 80% de escuelas de fútbol del país.</p>
                        </section>
                        <figure className='w-1/3'>
                            <img src="/public/vision.png" alt="" />
                        </figure>
                    </section>
                </section>
            </div>
        </section>

        <section className='h-fit bg-gradient-to-b  from-sky-800 to-sky-950 pb-16' id="team">
            <section className='w-fit mx-auto'>
                <h2 className='text-white font-black text-4xl pt-16'>Nuestro Equipo</h2>
                <div className='h-2 w-full bg-sky-500'></div>
            </section>
            <section className='flex flex-wrap w-10/12 justify-center mt-8 mx-auto gap-4'>

                {/* Danllely Card */}
                <article className='flex flex-col items-center justify-evenly w-56 h-80 border bg-slate-950/25 rounded-2xl border-sky-800 shadow-2xl'>
                    <figure className='w-44 h-44 overflow-hidden rounded-full'>
                        <img src="/public/da-avatar.jpg" alt="" />
                    </figure>
                    <section className='text-white '>
                        <h3 className='font-black text-xl'>Danllely Ñañez</h3>
                        <p>Scrum Master</p>
                        <p>Frontend-backend-design</p>
                    </section>
                </article>

                {/* Johansit0 card */}
                <article className='flex flex-col items-center justify-evenly w-56 h-80 border bg-slate-950/25 rounded-2xl border-sky-800 shadow-2xl'>
                    <figure className='w-44 h-44 overflow-hidden rounded-full'>
                        <img className='h-full' src="/public/j-avatar.jpg" alt="" />
                    </figure>
                    <section className='text-white '>
                        <h3 className='font-black text-xl'>Johan Muñoz</h3>
                        <p>Product Owner</p>
                        <p>Frontend-backend-design</p>
                    </section>
                </article>

                {/* Edu Card */}
                <article className='flex flex-col items-center justify-evenly w-56 h-80 border bg-slate-950/25 rounded-2xl border-sky-800 shadow-2xl'>
                    <figure className='w-44 h-44 overflow-hidden rounded-full'>
                        <img src="/public/e-avatar.jpg" alt="" />
                    </figure>
                    <section className='text-white '>
                        <h3 className='font-black text-xl'>Eduardo Espinal</h3>
                        <p>Developer Team</p>
                        <p>Frontend-backend-design</p>
                    </section>
                </article>

                {/* Maria card */}
                <article className='flex flex-col items-center justify-evenly w-56 h-80 border bg-slate-950/25 rounded-2xl border-sky-800 shadow-2xl'>
                    <figure className='w-44 h-44 overflow-hidden rounded-full'>
                        <img src="/public/m-avatar.jpg" alt="" />
                    </figure>
                    <section className='text-white '>
                        <h3 className='font-black text-xl'>Maria del Mar Rincón</h3>
                        <p>Developer Team</p>
                        <p>Frontend-backend-design</p>
                    </section>
                </article>

                {/* Catalina card */}
                <article className='flex flex-col items-center justify-evenly w-56 h-80 border bg-slate-950/25 rounded-2xl border-sky-800 shadow-2xl'>
                    <figure className='w-44 h-44 overflow-hidden rounded-full'>
                        <img src="/public/user.png" alt="" />
                    </figure>
                    <section className='text-white '>
                        <h3 className='font-black text-xl'>Catalina Ortiz</h3>
                        <p>Developer Team</p>
                        <p>Frontend-backend-design</p>
                    </section>
                </article>

                {/* Andres card */}
                <article className='flex flex-col items-center justify-evenly w-56 h-80 border bg-slate-950/25 rounded-2xl border-sky-800 shadow-2xl'>
                    <figure className='w-44 h-44 overflow-hidden rounded-full'>
                        <img src="/public/user.png" alt="" />
                    </figure>
                    <section className='text-white '>
                        <h3 className='font-black text-xl'>Andres Rivera</h3>
                        <p>Developer Team</p>
                        <p>Frontend-backend-design</p>
                    </section>
                </article>

                {/* Jhon Mario card */}
                <article className='flex flex-col items-center justify-evenly w-56 h-80 border bg-slate-950/25 rounded-2xl border-sky-800 shadow-2xl'>
                    <figure className='w-44 h-44 overflow-hidden rounded-full'>
                        <img src="/public/user.png" alt="" />
                    </figure>
                    <section className='text-white '>
                        <h3 className='font-black text-xl'>Jhon Mario Benavides</h3>
                        <p>Developer Team</p>
                        <p>Frontend-backend-design</p>
                    </section>
                </article>

                {/* Henry card */}
                <article className='flex flex-col items-center justify-evenly w-56 h-80 border bg-slate-950/25 rounded-2xl border-sky-800 shadow-2xl'>
                    <figure className='w-44 h-44 overflow-hidden rounded-full'>
                        <img src="/public/user.png" alt="" />
                    </figure>
                    <section className='text-white '>
                        <h3 className='font-black text-xl'>Henry Castillo</h3>
                        <p>Developer Team</p>
                        <p>Frontend-backend-design</p>
                    </section>
                </article>
            </section>
        </section>
        </main>
    );
}

export default MainLanding;