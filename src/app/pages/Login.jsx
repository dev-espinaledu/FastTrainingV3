import { Route, Routes, Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import PlatformsButton from '../components/PlatformsButton';

const Login = () => {
    return (
            <>
                <section className='flex items-center h-screen w-screen fixed z-10'>
                    <section className='w-1/2 h-full bg-cover bg-center' style={{backgroundImage:'url("/public/login-img.jpeg")'}}>
                    </section>
                    <section className="bg-white w-1/2 h-full flex justify-center">
                        <section className="flex flex-col w-2/3 p-12">
                            <Link className="text-3xl self-start" to="/"><i  className="fa-solid fa-angle-left"></i></Link>
                            <h1 className='text-3xl font-bold'>Inicio de Sesión</h1>
                            <form className="flex flex-col p-4">
                                <div className="mt-4 flex flex-col self-center w-full">
                                    <label className="self-start text-zinc-800" htmlFor="email">Correo Electrónico</label>
                                    <input className="w-full mb-2 bg-zinc-200 p-2 rounded-lg" type="email" name="email" id="email" placeholder='user@gmail.com' />
                                </div>
                                <div className=" flex flex-col self-center w-full">
                                    <label className="self-start text-zinc-800" htmlFor="password">Contraseña</label>
                                    <input className="w-full mb-1 bg-zinc-200 p-2 rounded-lg" type="password" name="password" id="password" placeholder='Contraseña' />
                                    <Link className="text-right text-sky-500 text-xs" to="/recoverPass">¿Olvidaste tu contraseña?</Link>
                                </div>
                                <div>
                                    <Link to={"/trainer/home"}>
                                        <PrimaryButton clases="w-full" text="Iniciar Sesión" />
                                    </Link>
                                </div>
                            </form>
                            <section className="flex justify-between text-sm px-4">
                                <p>¿No tienes una cuenta?</p>
                                <Link className="text-sky-500" to="/register">Registrate</Link>
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

export default Login;