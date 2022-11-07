import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-secondary-100 tracking-[5px] p-8 rounded-xl shadow-xl w-auto lg:w-[450px]">
      <h1 className="text-3xl text-center uppercase font-bold text-white mb-8">
        Iniciar sesión
      </h1>
      <form className="mb-8"> 
        <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100">
          <img
            className="w-4 h-4"
            src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
            alt="Logo de google"
          />
          Ingresa con google
        </button>
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
        <div>
          <button
            type="submit"
            className="bg-primary/80 text-white text-sm uppercase font-bold w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
          >
            Ingresar
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-4 text-left text-sm items-center">
        <Link className="hover:text-primary/80 transition-colors" to="/auth/recovery">
          ¿Olvidaste tu contraseña?
        </Link>
        <span className="flex items-center gap-2">
        ¿No tienes cuenta? <Link to="/auth/register" className="text-primary/80 hover:text-gray-100 transition-colors">Regístrate</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
