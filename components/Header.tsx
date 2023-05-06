import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex flex-row justify-between items-center py-5 sm:px-12 px-4 shadow-md bg-white">
      <h1 className="sm:text-3xl text-xl font-bold text-gray-900 cursor-pointer font-epilogue">
        Instituto Leyers
      </h1>
      <ul className="sm:flex hidden flex-row font-noto justify-center">
        <li>
          <h1 className="px-4 cursor-pointer text-gray-700 hover:text-gray-900">
            Quiénes somos
          </h1>
        </li>
        <li>
          <h1 className="px-4 cursor-pointer text-gray-700 hover:text-gray-900">
            Testimonios
          </h1>
        </li>
        <li>
          <h1 className="px-4 cursor-pointer text-gray-700 hover:text-gray-900">
            Visítanos
          </h1>
        </li>
      </ul>
      <button className="bg-red-600 p-3 text-white rounded-lg font-noto font-bold text-sm sm:flex hidden">
        Enviar mensaje
      </button>
      <div className="sm:hidden flex">
        <i
          className={`fa-solid ${
            menuOpen ? "fa-xmark" : "fa-bars"
          } sm:hidden flex text-lg cursor-pointer`}
          onClick={toggleMenu}
        ></i>
      </div>
      {menuOpen && (
        <div className="fixed top-0 left-0 h-screen w-3/5 bg-white shadow-md p-5">
          <ul className="flex flex-col justify-center font-epilogue text-xl py-[20%]">
            <li className="my-2">
              <h1 className="text-black cursor-pointer font-bold hover:text-red-700">
                Quiénes somos
              </h1>
            </li>
            <li className="my-2">
              <h1 className="text-black cursor-pointer font-bold hover:text-red-700">
                Testimonios
              </h1>
            </li>
            <li className="my-2">
              <h1 className="text-black cursor-pointer font-bold hover:text-red-700">
                Visítanos
              </h1>
            </li>
            <li className="my-2">
              <button className="bg-black p-3 text-white rounded-lg font-noto font-bold text-sm sm:flex hidden">
                Enviar mensaje
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
