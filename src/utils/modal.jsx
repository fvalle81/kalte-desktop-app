// src/components/ui/Modal.jsx
import React, { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  // Cierra el modal si se presiona Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Fondo oscuro, clic para cerrar */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      ></div>

      {/* Contenido del modal */}
      <div className="relative z-10 bg-white rounded-md p-6 shadow-lg w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
