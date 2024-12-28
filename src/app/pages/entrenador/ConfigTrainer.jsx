import Info from '../../components/entrenador/PerfilEntrenador'
import Configuracion from '../../components/entrenador/configuracionEntrenador'
import NavbarTrainer from '../../components/entrenador/NavbarTrainer'
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