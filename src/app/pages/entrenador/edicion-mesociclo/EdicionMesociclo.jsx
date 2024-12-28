/* import Tabla  from '../../../components/mesociclo/Mesociclo'; */
import NavbarEdicion from '../../../components/comunes/NavbarEdicion';

/* import HeaderApp from '../../../components/HeaderApp'; */
import Logo from '../../../components/Logo';
import NavbarTrainer from '../../../components/entrenador/NavbarTrainer';

export default function EdicionMesociclo(){
    return(
        <div className='flex p-3 w-screen h-screen'>
            <NavbarTrainer/>
            <div className='w-full h-full flex flex-col'>
                <Logo/>
                <main className='w-full h-[90vh] rounded-md overflow-hidden flex'>
                    <div>
                        <Tabla />
                    </div>
                </main>
            </div>
            <NavbarEdicion/>
        </div>
    )
}