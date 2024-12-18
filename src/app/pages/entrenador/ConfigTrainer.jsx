import Info from '../../components/perfilEntrenador/cuadro3'
import Configuracion from '../../components/configuracionEntrenador/cuadro4'
import NavbarTrainer from '../../components/Navbar/NavbarTrainer'
import HeaderApp from '../../components/HeaderApp'

export default function ConfigurationTrainer(){
    return (
        <div className="flex p-3 w-screen h-screen">
            <NavbarTrainer />
            
            <section className="w-full h-full flex flex-col">
                <HeaderApp />
                <section className="w-full h-[90vh] rounded-md bg-white overflow-y-scroll">
                    <Info/>
                    <hr className='mx-8' />
                    <Configuracion />    
                </section>
            </section>
        </div>
    )
}