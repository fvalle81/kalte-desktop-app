// src/components/layout/Layout.jsx
import Sidebar from './Sidebar.jsx';

import Header from './Header.jsx';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen"> {/* Contenedor principal */}
      <Header />

        
      <div className="wrapper border rounded-lg border-gray-200 flex-1 overflow-auto  flex  m-1  "> {/* Wrapper-content */}
        <aside className="w-64    p-4"> {/* Sidebar a la derecha */}
          <Sidebar />
        </aside>
        <main className="flex-1 overflow-hidden flex flex-col">
          {children}
        </main>

      </div>
    </div>
  );
}
