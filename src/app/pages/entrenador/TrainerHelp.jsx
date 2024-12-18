import HeaderApp from '../../components/HeaderApp';
import NavbarTrainer from '../../components/Navbar/NavbarTrainer';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';

function TrainerHelp() {
  return (
    <div className="flex p-3 w-screen h-screen">
      <NavbarTrainer />

      <section className="w-full h-full flex flex-col">
        <HeaderApp />
        <div className="h-[90vh] rounded-md bg-white p-4 overflow-y-scroll">
            <header>
              <h3 className='text-start text-2xl'>¿Tienes sugerencias, quejas o reclamos?</h3>
            </header>
            <section className='w-3/6'>
              <input className='bg-gray-100 p-2 w-full h-24 border-b border-r border-gray-300 flex justify-between text-blue-600 no-underline list-none my-2' type="text" />
              <section className='flex justify-between'>
                <section className='h-full flex gap-2'>
                  <SecondaryButton text="Sugerencias" className="w-auto" />
                  <SecondaryButton text="Quejas" className="w-auto" />
                  <SecondaryButton text="Reclamos" className="w-auto" />
                </section>
                <PrimaryButton className="w-auto" text="Enviar" />
              </section>
            </section>
              <hr className='my-8 ' />
            <section>
              <h3 className='text-start text-2xl'>¿Necesitas ayuda con la app?</h3>
              <ul className='text-start pl-4 flex flex-col gap-2'>
                <li>¿Cómo descargar el menú?</li>
                <li>¿Cómo puedo agregar un nuevo jugador?</li>
                <li>¿Cómo puedo cambiar mi número de cuenta?</li>
                <li>¿Cómo puedo desactivar las notificaciones?</li>
                <li>¿Cómo puedo desactivar la habitación Wi-Fi?</li>
                <li>¿Cómo puedo desactivar el modo de entrenamiento?</li>
                <li>¿Cómo puedo desactivar los colores de la habitación?</li>
              </ul>
            </section>
        </div>
      </section>
    </div>
  );
}

export default TrainerHelp;