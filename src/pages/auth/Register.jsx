import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMailLine,
  RiUserLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine
} from "react-icons/ri";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-secondary-100 tracking-[5px] p-8 rounded-xl shadow-xl w-auto lg:w-[450px]">
      <h1 className="text-3xl text-center uppercase font-bold text-white mb-8">
        Crear cuenta
      </h1>
      <form className="mb-8">
        <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100">
          <img
            className="w-4 h-4"
            src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
            alt="Logo de google"
          />
          Registrarse con google
        </button>
        <div className="relative mb-4">
          <RiUserLine className="text-primary absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            className="pl-8 pr-4  py-3 px-5 bg-secondary-900 w-full outline-none  rounded-lg focus:border focus:border-primary"
            placeholder="Nombre"
          />
        </div>
        <div className="relative mb-4">
          <RiMailLine className="text-primary absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="email"
            className="pl-8 pr-4  py-3 px-5 bg-secondary-900 w-full outline-none  rounded-lg focus:border focus:border-primary"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="relative mb-4">
          <RiLockLine className="text-primary absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type={showPassword ? "text" : "password"}
            className="pl-8 pr-4  py-3 px-5 bg-secondary-900 w-full outline-none  rounded-lg focus:border focus:border-primary"
            placeholder="Contraseña"
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={() => setShowPassword(!showPassword)}
              className="text-primary absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={() => setShowPassword(!showPassword)}
              className="text-primary absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
            />
          )}
        </div>
        <div className="relative mb-4">
          <RiLockLine className="text-primary absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type={showPassword ? "text" : "password"}
            className="pl-8 pr-4  py-3 px-5 bg-secondary-900 w-full outline-none  rounded-lg focus:border focus:border-primary"
            placeholder="Repite tu contraseña"
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={() => setShowPassword(!showPassword)}
              className="text-primary absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={() => setShowPassword(!showPassword)}
              className="text-primary absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
            />
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-primary/80 text-white text-sm uppercase font-bold w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
          >
            Registrarme
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-4 text-sm items-center">
        <span className="flex items-center gap-2">
          ¿Tienes cuenta?{" "}
          <Link
            to="/auth"
            className="text-primary/80 hover:text-gray-100 transition-colors"
          >
            Inicia sesión
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
