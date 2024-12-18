import React from 'react';
import FormInput from './FormInput';
import Button from '../SecondaryButton';
import WarningMessage from './WarningMessage';

const ChangePassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-semibold mb-2">Raúl Goméz Arboleda - Fast Traning</h2>
        <h1 className="text-3xl font-bold mb-4">Cambiar contraseña</h1>
        <p className="text-gray-600 mb-6">
          La contraseña debe tener al menos seis caracteres e incluir una combinación de números y letras para mayor seguridad.
        </p>
        <form>
          <FormInput label="Contraseña actual" />
          <FormInput label="Nueva contraseña" />
          <FormInput label="Confirmar contraseña" />
          <WarningMessage message="Al continuar se cerrará sesión en todos los dispositivos" />
          <Button text="Continuar" />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;