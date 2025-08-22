// src/components/layout/Sidebar.jsx
import { NavLink } from 'react-router-dom';

const menuItems = [
  { name: 'Inspecciones', route: '/' },
  { name: 'Atendidas', route: '/completed' },
  { name: 'Facturación', route: '/invoices' },
  { name: 'Caja', route: '/cashflow' },
  { name: 'Reportes', route: '/reports' },
];

export default function Sidebar() {
  return (
    <nav className="flex flex-col space-y-2">
      {menuItems.map(({ name, route }) => (
        <NavLink
          key={route}
          to={route}
          className={({ isActive }) =>
            `block px-3 py-2  ${
              isActive ? 'active' : 'inactive'
            }`
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
}
