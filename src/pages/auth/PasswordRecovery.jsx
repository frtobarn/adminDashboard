import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

const PasswordRecovery = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-secondary-100 tracking-[5px] p-8 rounded-xl shadow-xl w-auto lg:w-[450px]">
      <h1 className="text-3xl text-center uppercase font-bold text-white mb-8">
        Recuperar contraseña
      </h1>
      <form className="mb-8">
        <div className="relative mb-4">
          <RiMailLine className="text-primary absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="email"
            className="pl-8 pr-4  py-3 px-5 bg-secondary-900 w-full outline-none  rounded-lg focus:border focus:border-primary"
            placeholder="Correo electrónico"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-primary/80 text-white text-sm uppercase font-bold w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
          >
            Enviar instrucciones
          </button>
        </div>
      </form>
      <span className="flex items-center justify-center gap-2">
        <Link
          to="/auth"
          className="text-primary/80 hover:text-gray-100 transition-colors"
        >
          Iniciar sesión
        </Link>
      </span>
    </div>
  );
};

export default PasswordRecovery;
