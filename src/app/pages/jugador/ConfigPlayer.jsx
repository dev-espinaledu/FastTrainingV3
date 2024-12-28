import Info from '../../components/jugador/PerfilJugador'
import Configuracion from '../../components/jugador/ConfiguracionJugador'
import NavbarPlayer from '../../components/jugador/NavbarJugador'
import HeaderApp from '../../components/HeaderApp'

export default function ConfiguracionPlayer(){
    return <>
        <div className='flex p-3 w-screen h-screen'>
            <NavbarPlayer/>
            <div className=" w-full h-full flex flex-col">
                <HeaderApp/>
                <main className='w-full h-[90vh] rounded-md bg-white overflow-y-scroll flex'>
                    <div>
                        <Info/>
                        <hr className='mx-8' />
                        <Configuracion />    
                    </div>
                </main>
            </div>
        </div>
    </>
}