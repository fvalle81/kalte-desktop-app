import { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import Dropdown from '../../utils/dropdown'; // o donde tengas Dropdown.jsx
import MenuList from '../../utils/menulist';
import Modal from '../../utils/modal';    
 
import FormRegister from '../pages/inspections-partials/FormRegister';



const menuItems = [
  { name: 'Inspecciones', route: '/' },
  { name: 'Atendidas', route: '/completed' },
  { name: 'Facturación', route: '/invoices' },
  { name: 'Caja', route: '/cashflow' },
  { name: 'Reportes', route: '/reports' },
];

const dropdownItems = [
  { id: 'new-inspection', label: 'Nueva inspeccion' },
  { id: 'new-invoice', label: 'Nueva Factura' },
];

export default function Sidebar() {
  const [modalId, setModalId] = useState(null);

  function closeModal() {
    setModalId(null);
  }

  return (
    <nav className="flex flex-col space-y-2 relative">

      <Dropdown
        button={
          <button
            className="flex items-center gap-2 bg-white text-gray-800 font-medium px-4 py-2 rounded-md shadow hover:shadow-md transition"
          >
            <span className="text-xl">+</span>
            <span>Nuevo</span>
          </button>
        }
      >
        <MenuList
          items={dropdownItems.map(item => ({
            ...item,
            onClick: () => setModalId(item.id),
          }))}
        />
      </Dropdown>

      {/* Modales */}
      <Modal isOpen={modalId === 'new-inspection'} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Registrar Servicio</h2>
        <div className="max-h-[80vh] overflow-y-auto" >
          <FormRegister onCancel={closeModal} />
      
        </div>
      </Modal>
      <Modal isOpen={modalId === 'new-invoice'} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Nueva Tarea</h2>
        <textarea
          placeholder="Descripción de la tarea"
          className="border border-gray-300 rounded px-2 py-1 mb-4 w-full"
        />
        <button
          onClick={closeModal}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Crear
        </button>
      </Modal>

      {/* Menú principal */}
      {menuItems.map(({ name, route }) => (
        <NavLink
          key={route}
          to={route}
          className={({ isActive }) =>
            `block px-3 py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
          }
        >
          {name}
        </NavLink>
      ))}

    </nav>
  );
}
