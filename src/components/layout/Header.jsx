// src/components/layout/Header.jsx

export default function Header() {
  return (
    <header className="flex justify-between items-center h-10   px-2  ">
      
      {/* IZQUIERDA: Dropbutton */}
      <div>
        <button className="flex items-center gap-1 text-sm px-2  font-bold bg-gray-100 hover:bg-gray-200 rounded">
          Centro de revisiones tecnicas pedrito
          <i className="bx bx-chevron-down text-lg"></i>
        </button>
      </div>

      {/* CENTRO: Buscador */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full max-w-md px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* DERECHA: Botones */}
      <div className="flex items-center gap-2">
        <button className="p-1 rounded hover:bg-gray-100">
          <i className="bx bx-bell text-xl text-gray-600"></i>
        </button>
        <button className="p-1 rounded hover:bg-gray-100">
          <i className="bx bx-cog text-xl text-gray-600"></i>
        </button>
      </div>
    </header>
  );
}
