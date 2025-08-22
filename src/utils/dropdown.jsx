import { useState, useRef, useEffect } from 'react';
import React from 'react';
export default function Dropdown({ button, children }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={wrapperRef}>
      {/* Renderizamos el botón, pero le inyectamos la función para toggle */}
      {React.cloneElement(button, { onClick: () => setOpen(!open) })}

      {open && (
        <div className="absolute left-0 mt-1 bg-white shadow rounded-md p-4 z-20 min-w-[200px]">
          {children}
        </div>
      )}
    </div>
  );
}
