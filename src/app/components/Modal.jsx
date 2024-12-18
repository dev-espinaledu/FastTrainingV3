function Modal() {
 

    return (
  <div className="flex flex-col items-center justify-center h-screen">
  <img className="w-32" src="../public/Coa_Illustration_Shield_Triangular.svg" alt="" />
  <h1 className="text-2xl font-bold mt-4">Acceso restringido</h1>
  <div className="flex mt-8 gap-4">
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Reenviar certificado
    </button>
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Salir de Fast Training
    </button>
  </div>
  </div>
  );
  }
  
  
  export default Modal