import { ArchivosJugador } from "../../components/Archivos"
import NavbarJugador from "../../components/Navbar/NavbarJugador"
import HeaderApp from "../../components/HeaderApp"

export default function PlayerDocuments() {
    return (
        <div className='flex p-3 w-screen h-screen'>
            <NavbarJugador />

            <div className=" w-full h-full flex flex-col">
                <HeaderApp />
                <main className='w-full h-[90vh] rounded-md bg-white overflow-y-scroll flex'>
                    <ArchivosJugador />
                </main>
            </div>
        </div>
    )
}