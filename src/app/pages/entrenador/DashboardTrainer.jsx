import NavbarTrainer from '../../components/Navbar/NavbarTrainer';
import HeaderApp from '../../components/HeaderApp'

function DashboardTrainer() {
    return (
        <div className="flex p-3 w-screen h-screen">
            <NavbarTrainer />
            <div className=" w-full h-full flex flex-col">
                <HeaderApp />
                <main className="w-full h-[90vh] rounded-md bg-white overflow-y-scroll">
                    <h1 className='text-3xl font-bold py-4'>Resultados del entrenamiento del mes</h1>
                    <section className='flex flex-wrap'>
                        <section id='group-stats-def' className='flex flex-col gap-4 w-2/5 items-center mt-4' >
                            <h2 className='text-xl font-bold'>Estadísticas defensores del mes de enero</h2>
                            <figure className='h-72'>
                                <img className='h-full' src="/public/stats-def.png" alt="Estadisticas" />
                            </figure>
                        </section>
                        <section className='flex flex-col gap-4 w-2/5 items-center mt-4'>
                            <h2 className='text-xl font-bold'>Estadísticas arqueros del mes de enero</h2>
                            <figure className='h-72'>
                                <img className='h-full' src="/public/stats-def.png" alt="Estadisticas" />
                            </figure>
                        </section>
                        <section id='group-stats-def' className='flex flex-col gap-4 w-2/5 items-center mt-4' >
                            <h2 className='text-xl font-bold'>Estadísticas delanteros del mes de enero</h2>
                            <figure className='h-72'>
                                <img className='h-full' src="/public/stats-def.png" alt="Estadisticas" />
                            </figure>
                        </section>
                        <section className='flex flex-col gap-4 w-2/5 items-center mt-4'>
                            <h2 className='text-xl font-bold'>Estadísticas mediocampistas del mes de enero</h2>
                            <figure className='h-72'>
                                <img className='h-full' src="/public/stats-def.png" alt="Estadisticas" />
                            </figure>
                        </section>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default DashboardTrainer;