import NavbarTrainer from '../../components/Navbar/NavbarTrainer';
import HeaderApp from '../../components/HeaderApp';
import {ArchivosTrainer} from '../../components/Archivos';

export default function DocumentsTrainer() {
    return (
        <div className='flex p-3 w-screen h-screen'>
            <NavbarTrainer />
            <div className=" w-full h-full flex flex-col">
                <HeaderApp />

                <main className='w-full h-[90vh] rounded-md bg-white overflow-y-scroll flex'>
                    <ArchivosTrainer />

                </main>
            </div>
        </div>
    );
}