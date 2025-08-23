
import { useState } from 'react'; 
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { useConfig } from '../../../providers/config/configContext';



export default function FormRegister({ onCancel }) {
  const config = useConfig();
  const [formData, setFormData] = useState({
        i_vehicle_plate: '',
        i_vehicle_area: '',
        i_vehicle_service: '',
        i_inspection_subclass: '',
        i_inspection_class: '',
        i_driver_document_type: '',
        i_driver_document: '',
        i_driver_name: '',
        i_driver_lastname: '',
        i_driver_phone: '',
        i_driver_email: '',
        i_driver_address: '',
  });
  const queryClient = useQueryClient(); // Aquí obtienes el queryClient
  const mutation = useMutation(async (newData) => {
     console.log(config.api.endpoints.inspections);
    const res = await fetch(`${config.api.endpoints.inspections}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || 'Error en el servidor');
    }
    return res.json();
  }, {
   onSuccess: (data) => {
      
      const newItem = data.data;
      console.log('Nuevo elemento agregado al cache:', newItem);
      queryClient.setQueryData(['inspections'], (old = []) => [...old, newItem]);

      setFormData({
        i_vehicle_plate: '',
        i_vehicle_area: '',
        i_vehicle_service: '',
        i_inspection_subclass: '',
        i_inspection_class: '',
        i_driver_document_type: '',
        i_driver_document: '',
        i_driver_name: '',
        i_driver_lastname: '',
        i_driver_phone: '',
        i_driver_email: '',
        i_driver_address: '',
      });
      // cierra el modal luego de 1.5s
      setTimeout(() => onCancel(), 1500);
    }
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ... tus inputs ... */}
      
         <div className="grid grid-cols-12 gap-4 items-center">
          <div  className="col-span-6 text-right">
              <input
                name="i_vehicle_plate"
                value={formData.placa}
                onChange={handleChange}
                placeholder="Placa"
                className="border px-2 py-1 rounded w-full"
                
              />
          </div> 
        </div>
        <div className="grid grid-cols-12 gap-4 items-center">
          <div  className="col-span-6 text-right">
              <input
                  name="i_vehicle_area"
                  value={formData.ambito}
                  onChange={handleChange}
                  placeholder="Ámbito"
                  className="border px-2 py-1 rounded w-full"
                />
          </div>
          <div  className="col-span-6 text-right">
               <input
                  name="i_vehicle_service"
                  value={formData.tipoServicio}
                  onChange={handleChange}
                  placeholder="Tipo de Servicio"
                  className="border px-2 py-1 rounded w-full"
                  
                /> 
          </div>
          
       </div>
      <div className="grid grid-cols-12 gap-4 items-center">
         
          <div  className="col-span-6 text-right">
              <input
                name="i_inspection_class"
                value={formData.clase}
                onChange={handleChange}
                placeholder="Clase"
                className="border px-2 py-1 rounded w-full"
              />
          </div>
          <div  className="col-span-6 text-right">
              
                <input
                  name="i_inspection_subclass"
                  value={formData.subclase}
                  onChange={handleChange}
                  placeholder="Subclase"
                  className="border px-2 py-1 rounded w-full"
                />
          </div>
      </div>

      <h1>Datos del conductor</h1>

      <div className="grid grid-cols-12 gap-4 items-center">
          <div  className="col-span-6 text-right">
               <input
                  name="i_driver_document_type"
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  placeholder="Tipo de Documento"
                  className="border px-2 py-1 rounded w-full"
                />
          </div>
          <div  className="col-span-6 text-right">
            <input
              name="i_driver_document"
              value={formData.documentoNum}
              onChange={handleChange}
              placeholder="Número de Documento"
              className="border px-2 py-1 rounded w-full"
            />
          </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center">
          <div  className="col-span-6 text-right">
               <input
                  name="i_driver_name"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="border px-2 py-1 rounded w-full"
                />
          </div>
          <div  className="col-span-6 text-right">
               <input
                  name="i_driver_lastname"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Apellido"
                  className="border px-2 py-1 rounded w-full"
                />
          </div>
      </div>
      <div className="grid grid-cols-12 gap-4 items-center">
          <div  className="col-span-6 text-right">
               <input
                  name="i_driver_phone"
                  type="text"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Telefono"
                  className="border px-2 py-1 rounded w-full"
                />
          </div>
          <div  className="col-span-6 text-right">
               
                <input
                  name="i_driver_email"
                  type="email"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  className="border px-2 py-1 rounded w-full"
                />
          </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center">
        <div  className="col-span-12 text-right"> 
            <input
                  name="i_driver_address"
                  value={formData.direccion}
                  onChange={handleChange}
                  placeholder="Dirección"
                  className="border px-2 py-1 rounded w-full"
                />
        </div>
           
      </div>
      

      

  

      

      

      


      

     
      {/* Mensajes de estado */}
      {mutation.isError && <p className="text-red-600">{mutation.error.message}</p>}
      {mutation.isSuccess && <p className="text-green-600">Registro exitoso</p>}

      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded" disabled={mutation.isLoading}>
          Cancelar
        </button>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Guardando...' : 'Guardar'}
        </button>
      </div>
    </form>
  );
}





 