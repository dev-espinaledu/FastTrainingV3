import { BackIcon, MagicIcon,TextIcon, BoldIcon, EraserIcon, ScissorsIcon, ZoomIcon, ZoomOutIcon, SaveIcon, DeleteIcon } from "../Icons"

export default function NavbarEdicion() {
    return (
        <aside className="w-16 mr-3 p-1.5 bg-white/50 h-[96vh]  flex justify-center rounded ">
            <nav className="flex flex-col justify-between items-center w-full rounded bg-slate-50 group-hover:items-baseline group-hover:pl-4">
                <ul className="flex gap-11 flex-col  py-px ">
                    <li className="w-full h-fit list-none">
                        <button className="hover:bg-neutral-300 text-center flex justify-center items-center w-12 h-12 group-hover:w-full gap-4 group-hover:justify-start rounded" href="">
                            <BackIcon />
                            {/* <span className="hidden opacity-0 group-hover:inline group-hover:visible transition-opacity group-hover:opacity-100 duration-300 text-neutral-500">Inicio</span> */}
                        </button>
                    </li>
                    <li className="w-fit h-fit">
                        <button  className="flex hover:bg-neutral-300 rounded justify-center items-center w-12 h-12 group-hover:w-full gap-4" href="">
                            <MagicIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Equipo</span> */}
                        </button>
                    </li>
                    <li className="w-fit h-fit">
                        <button  className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <TextIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Documentos</span> */}
                        </button >
                    </li>
                    <li className="w-fit h-fit" >
                        <button className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <BoldIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Configuración</span> */}
                        </button >
                    </li>
                    <li className="w-fit h-fit" >
                        <button className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <EraserIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Tema</span> */}
                        </button >
                    </li>
                    <li className="w-fit h-fit" >
                        <button className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <ScissorsIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Ayuda</span> */}
                        </button >
                    </li>
                    <li className="w-fit h-fit" >
                        <button className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <ZoomIcon/>
                            {/* <span className="hidden group-hover:inline text-neutral-500">Cerrar Sesión</span> */}
                        </button>
                    </li>
                    <li className="w-fit h-fit" >
                        <button  className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <ZoomOutIcon/>
                            {/* <span className="hidden group-hover:inline text-neutral-500">Cerrar Sesión</span> */}
                        </button>
                    </li>
                    <li className="w-fit h-fit" >
                        <button className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <SaveIcon/>
                            {/* <span className="hidden group-hover:inline text-neutral-500">Cerrar Sesión</span> */}
                        </button>
                    </li>
                    <li className="w-fit h-fit" >
                        <button  className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" href="">
                            <DeleteIcon/>
                            {/* <span className="hidden group-hover:inline text-neutral-500">Cerrar Sesión</span> */}
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}