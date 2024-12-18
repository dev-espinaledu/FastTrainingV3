import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import PlatformsButton from '../components/PlatformsButton';

const SignUp = () => {
    const location = useLocation();

    return (
            <>
                <section className='flex items-center h-screen w-screen fixed z-10'>
                    <section className='w-1/2 h-full bg-cover bg-center' style={{backgroundImage:'url("/public/signup-img.jpg")'}}>
                    </section>
                    <section className="bg-white w-1/2 h-full flex justify-center">
                        <section className="flex flex-col w-2/3 p-12">
                            <Link className="text-3xl self-start" to="/"><i  className="fa-solid fa-angle-left"></i></Link>
                            <h1 className='text-3xl font-bold'>Registrarse</h1>
                            <form className="flex flex-col p-4">
                                <div className="mt-4 flex flex-col self-center w-full">
                                    <input className="w-full bg-zinc-200 p-2 rounded-lg" type="text" name="name" id="name" placeholder='Nombre' />
                                </div>
                                <div className="mt-2 flex flex-col self-center w-full">
                                    <input className="w-full bg-zinc-200 p-2 rounded-lg" type="email" name="email" id="email" placeholder='Email' />
                                </div>
                                <div className="mt-2 flex flex-col self-center w-full">
                                    <input className="w-full bg-zinc-200 p-2 rounded-lg" type="password" name="password" id="password" placeholder='Contraseña' />
                                </div>
                                <div className="mt-2 flex flex-col self-center w-full">
                                    <input className="w-full mb-2 bg-zinc-200 p-2 rounded-lg" type="password" name="check-password" id="check-password" placeholder='Confirma tu Contraseña' />
                                </div>
                                <div>
                                    <Link to={"/eleccionRol"}>
                                        <PrimaryButton clases="w-full " text="Registrarse" />
                                    </Link>
                                </div>
                            </form>
                            <section className="flex justify-between text-sm px-4">
                                <p>¿Ya tienes una cuenta?</p>
                                <Link className="text-sky-500" to={"/eleccionRol"} state={{ background: location }}>Iniciar Sesión</Link>
                            </section>
                            
                            {/* Seccion para iniciar sesion con otras plataformas */}
                            <section className="w-full mt-8 flex flex-col gap-2">
                                <PlatformsButton icon="fa-brands fa-google" text="Continuar con Google"/>
                                <PlatformsButton icon="fa-brands fa-apple" text="Continuar con Apple"/>
                                <PlatformsButton icon="fa-brands fa-microsoft" text="Continuar con Microsoft"/>
                            </section>
                        </section>
                    </section>
                </section>
            </>
    )
}

export default SignUp;