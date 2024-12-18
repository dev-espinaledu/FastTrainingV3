import NavbarJugador from "../../components/Navbar/NavbarJugador";
import HeaderApp from "../../components/HeaderApp";

function DashboardJugador() {
    return (
        <div className="flex p-3 w-screen h-screen">
            <NavbarJugador />
            <section className=" w-full h-full flex flex-col">
                <HeaderApp />
                <main className="w-full h-[90vh] pl-16 rounded-md bg-white overflow-y-scroll">
                    <h1 className="text-3xl font-bold my-4">Tu progreso en el entrenamiento</h1>
                    <section className='grid grid-cols-2 w-full'>
                        <div className="flex gap-4 my-3 justify-left items-center">
                            <figure className='h-28'>
                                <img className="h-full" src="/public/circular-stat-blue.png" alt="" />
                            </figure>
                            <p className="font-bold">Mejoraste tu velocidad un 75%</p>
                        </div>

                        <div className="flex gap-4 my-3 justify-left items-center">
                            <figure className='h-28'>
                                <img className="h-full" src="/public/circular-stat-pink.png" alt="" />
                            </figure>
                            <p className="font-bold">Mejoraste tu resistencia un 60%</p>
                        </div>

                        <div className="flex gap-4 my-3 justify-left items-center">
                            <figure className='h-28'>
                                <img className="h-full" src="/public/circular-stat-yellow.png" alt="" />
                            </figure>
                            <p className="font-bold">Mejoraste tu fuerza un 45%</p>
                        </div>

                        <div className="flex gap-4 my-3 justify-left items-center">
                            <figure className='h-28'>
                                <img className="h-full" src="/public/circular-stat-green.png" alt="" />
                            </figure>
                            <p className="font-bold">Mejoraste tu velocidad de reacción un 50%</p>
                        </div>

                        <figure>
                            <img src="/public/Bar-Chart.png" alt="" />
                        </figure>
                    </section>

                    <section className="w-full my-4">
                        <img src="/public/mesociclo5-1.png" alt="" />
                    </section>
                </main>
            </section>
        </div>
    )
}

export default DashboardJugador;