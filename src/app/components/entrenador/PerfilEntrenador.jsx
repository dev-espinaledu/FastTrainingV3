function IconPerfil() {
    return (
      <svg className="h-72   w-72 " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="black"><path d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128" opacity={1}></path><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0M96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32m97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0"></path></g></svg>
    )
  }
  
  function IconPencil() {
    return (
      <svg className="h-4 w-4 m-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21A1 1 0 0 0 4 21M18 4.41L19.59 6L18 7.59L16.42 6zM5.91 16.51L15 7.41L16.59 9l-9.1 9.1l-2.11.52z"></path></svg>
    )
  }
  
  function IconTrainer() {
    return (
        <img className="h-16 w-15" src="/public/entrenador.png" alt="personal-trainer"/>
    )
  }
  
  function Titulo() {
    return <h2 className="font-bold text-4xl flex flex-col items-start p-5">Mi Cuenta</h2>;
  }
  
  function Foto() {
    return (
      <div >
        <h2 className="text-center text-3xl font-bold">Foto de perfil</h2>
        <IconPerfil />
      </div>
    );
  }
  
  
  function Nombre() {
    return (
      <div className="mb-9 flex flex-col items-start ">
        <h2 className="font-bold text-2xl">Nombre</h2>
        <p className="font-light text-1xl">Raúl Gómez Salazar</p>
      </div>
  
    );
  }
  
  
  function Email() {
    return (
      <div className="mb-9 flex flex-col items-start">
        <h2 className="font-bold text-2xl">Correo electrónico</h2>
        <div className="flex font-light">
          <p className="text-1xl">rau1g0m3x@gmail.com</p>
          <IconPencil />
        </div>
      </div>
    );
  }
  
  function Rol() {
    return (
      <div className="mb-9 flex flex-col items-start">
        <h2 className="font-bold text-2xl">Rol</h2>
        <div className="flex flex-col items-center w-fit font-light">
          <IconTrainer />
          <p className="text-1xl">Entrenador</p>
        </div>
      </div>
  
    );
  }
  
  export default function Info() {
    return (
      <div className=" bg-white">
        <Titulo />
        <section className="flex ml-44">
          <section className="m-7">
            <Foto />
          </section>
          <section className="mt-14 ml-96" >
            <Nombre />
            <Email />
            <Rol />
          </section>
        </section>
      </div>
    )
  }