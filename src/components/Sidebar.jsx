import React from "react";
import { Link } from "react-router-dom";

import {
  RiBarChart2Line,
  RiEarthLine,
  RiMessage3Line,
  RiCalendarTodoLine,
  RiLogoutCircleRLine,
  RiArrowRightSLine
} from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="xl:h-[100vh] overflow-y-scroll fixed xl:static w-full h-full -left-full top-0 bg-secondary-100 p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-center text-2xl font-bold text-white">
          GGM-Admin <span className="text-primary text-4xl mb-10">.</span>
        </h1>
        <ul>
          <li>
            <Link
              to="/"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiBarChart2Line className="text-primary " /> Estadísticas
            </Link>
          </li>

          <li>
            <button className="flex w-full items-center justify-between gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
              <span className="flex items-center gap-4">
                <RiEarthLine className="text-primary " /> Redes
              </span>
              <RiArrowRightSLine className="mt-1"/>
            </button>
            <ul className="mt-2">
              <li>
                <Link
                  className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  to="/"
                >
                  Red 1
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  to="/"
                >
                  Red 2
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  to="/"
                >
                  Red 3
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiMessage3Line className="text-primary " /> Mensajes
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiCalendarTodoLine className="text-primary " /> Calendario
            </Link>
          </li>
        </ul>
      </div>
      <nav>
        <Link
          to="/"
          className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
        >
          <RiLogoutCircleRLine className="text-primary " /> Cerrar sesión
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
