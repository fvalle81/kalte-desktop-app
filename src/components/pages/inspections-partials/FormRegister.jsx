import { useState } from 'react';

export default function FormRegister({ onCancel }) {
  const [formData, setFormData] = useState({
    placa: '',
    tipoServicio: '',
    clase: '',
    subclase: '',
    ambito: '',
    tipoDocumento: '',
    documentoNum: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    direccion: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    try {
      const res = await fetch('/api/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Error en el servidor');

      const data = await res.json();
      setSuccessMsg('Registro exitoso');
      // Puedes limpiar el formulario si quieres:
      // setFormData({ placa: '', tipoServicio: '', ... });

      // O después de unos segundos, llamar a onCancel para cerrar modal
      setTimeout(() => {
        setSuccessMsg(null);
        onCancel();
      }, 1500);

    } catch (err) {
      setError(err.message || 'Error inesperado');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="placa"
        value={formData.placa}
        onChange={handleChange}
        placeholder="Placa"
        className="border px-2 py-1 rounded w-full"
        
      />

      <input
        name="tipoServicio"
        value={formData.tipoServicio}
        onChange={handleChange}
        placeholder="Tipo de Servicio"
        className="border px-2 py-1 rounded w-full"
        
      />

      <input
        name="clase"
        value={formData.clase}
        onChange={handleChange}
        placeholder="Clase"
        className="border px-2 py-1 rounded w-full"
      />

      <input
        name="subclase"
        value={formData.subclase}
        onChange={handleChange}
        placeholder="Subclase"
        className="border px-2 py-1 rounded w-full"
      />

      <input
        name="ambito"
        value={formData.ambito}
        onChange={handleChange}
        placeholder="Ámbito"
        className="border px-2 py-1 rounded w-full"
      />

      <input
        name="tipoDocumento"
        value={formData.tipoDocumento}
        onChange={handleChange}
        placeholder="Tipo de Documento"
        className="border px-2 py-1 rounded w-full"
      />

      <input
        name="documentoNum"
        value={formData.documentoNum}
        onChange={handleChange}
        placeholder="Número de Documento"
        className="border px-2 py-1 rounded w-full"
      />

      <input
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        className="border px-2 py-1 rounded w-full"
      />

      <input
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        placeholder="Apellido"
        className="border px-2 py-1 rounded w-full"
      />

      <input
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        placeholder="Teléfono"
        className="border px-2 py-1 rounded w-full"
      />

      <input
        name="correo"
        type="email"
        value={formData.correo}
        onChange={handleChange}
        placeholder="Correo electrónico"
        className="border px-2 py-1 rounded w-full"
      />

      <input
        name="direccion"
        value={formData.direccion}
        onChange={handleChange}
        placeholder="Dirección"
        className="border px-2 py-1 rounded w-full"
      />

      {error && <p className="text-red-600">{error}</p>}
      {successMsg && <p className="text-green-600">{successMsg}</p>}

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 px-4 py-2 rounded"
          disabled={loading}
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Guardando...' : 'Guardar'}
        </button>
      </div>
    </form>
  );
}
