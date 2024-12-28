import { HomeIcon, IncidentsIcon, FolderIcon, ConfigIcon, ThemeIcon, HelpIcon, ExitIcon } from "../Icons"
import { Link } from "react-router-dom"

export default function NavbarAdmin() {
    return (
        <aside className="w-16 ml-3 my-3 p-1.5 bg-white/50 h-[96vh] fixed top-0 flex justify-center rounded ">
            <nav className="flex flex-col justify-between items-center w-full rounded bg-slate-50 group-hover:items-baseline group-hover:pl-4">
                <ul className="flex gap-2 flex-col justify-center py-2">
                    <li className="w-full h-fit list-none">
                        <Link href={"/admin/home"} className="hover:bg-neutral-300 text-center flex justify-center items-center w-12 h-12 group-hover:w-full gap-4 group-hover:justify-start rounded" >
                            <HomeIcon />
                            {/* <span className="hidden opacity-0 group-hover:inline group-hover:visible transition-opacity group-hover:opacity-100 duration-300 text-neutral-500">Inicio</span> */}
                        </Link>
                    </li>
                    <li className="w-fit h-fit">
                        <Link href={"/admin/incidents"} className="flex hover:bg-neutral-300 rounded justify-center items-center w-12 h-12 group-hover:w-full gap-4" >
                            <IncidentsIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Equipo</span> */}
                        </Link>
                    </li>
                    <li className="w-fit h-fit">
                        <Link href={"/admin/documents"} className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" >
                            <FolderIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Documentos</span> */}
                        </Link >
                    </li>
                    <li className="w-fit h-fit" >
                        <Link href={"/admin/config"} className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" >
                            <ConfigIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Configuración</span> */}
                        </Link >
                    </li>
                </ul>

                <ul className="flex gap-2 flex-col py-2">
                    <li className="w-fit h-fit" >
                        <button className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" >
                            <ThemeIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Tema</span> */}
                        </button >
                    </li>
                    <li className="w-fit h-fit" >
                        <Link href={"/admin/help"} className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" >
                            <HelpIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Ayuda</span> */}
                        </Link >
                    </li>
                    <li className="w-fit h-fit" >
                        <Link href={"/"} className="flex hover:bg-neutral-300 justify-center items-center w-12 h-12 group-hover:w-full rounded gap-4" >
                            <ExitIcon />
                            {/* <span className="hidden group-hover:inline text-neutral-500">Cerrar Sesión</span> */}
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}