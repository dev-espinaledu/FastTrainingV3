import React from "react";
export default function Codigo() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <button className="text-left mb-4  w-full focus:outline-none">
            <svg
              className="h-6 text-black "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <h1 className="text-3xl font-bold mb-4 text-center text-black">
            Recuperación de Contraseña
          </h1>

          <p className="mb-6 text-center text-black">
            Para proteger tu cuenta ingresa el código de 6 dígitos que acabamos
            de enviar a tu correo.
          </p>

          <form>
            <div className="mb-4">
              <label
                htmlFor="code"
                className="block text-lg font-medium text-gray-700 text-left"
              >
                Código
              </label>
              <input
                type="text"
                id="code"
                className="mt-2 block w-full px-4 py-3 border border-gray-300  shadow-sm focus:outline-none bg-slate-200  sm:text-lg"
                placeholder="Introduce el código"
              />
            </div>
            <div className="mb-4 text-center">
              <p className="text-sm  text-yellow-400 border border-yellow-300 rounded-md  bg-yellow-100">
                <span className="inline-block mr-1">⚠️</span>
                Al continuar se cerrará sesión en todos los dispositivos.
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-naranja text-white py-3 px-4  hover:bg-naranja text-lg mb-2"
            >
              Continuar
            </button>
            <div className="text-center mr-3 mb-3">
              ¿No recibiste el codigo?
              <br />
              <button
                type="button"
                className="text-naranja text-sm  hover:text-naranja"
              >
                Reenviar código
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}