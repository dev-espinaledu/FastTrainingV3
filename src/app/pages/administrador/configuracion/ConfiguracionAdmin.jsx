import Info from '../../../components/Perfiladministrador/cuadro1'
import Configuracion from '../../../components/configuraciónAdministrador/cuadro2'
import NavbarAdmin from '../../../components/Navbar/NavbarAdmin'
import Logo from '../../../components/Logo'

export default function ConfiguracionTrainer(){
    return <>
    <div className='px-32 py-4'>
        <Logo/>
    </div>
    
    <div className='ml-28 w-11/12 h-11/12'>
        <Info/>
        <hr className='mx-8' />
        <Configuracion />    
    </div>
        <NavbarAdmin/>
    </>
}