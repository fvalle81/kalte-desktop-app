import React, { createContext, useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useConfig } from '../config/configContext'; // tu config provider

const InspectionsContext = createContext();

export function useInspections() {
  return useContext(InspectionsContext);
}

export function InspectionsProvider({ children }) {
  const config = useConfig();
  const queryClient = useQueryClient();

  // Fetch lista de inspecciones
  const { data: inspections = [], isLoading, isError } = useQuery(
    ['inspections'],
    async () => {
      const res = await fetch(config.api.endpoints.inspections);
      if (!res.ok) throw new Error('Error cargando inspecciones');
      return res.json();
    }
  );

  // Mutación para crear nueva inspección
  const createInspectionMutation = useMutation(
    async (newInspection) => {
      const res = await fetch(config.api.endpoints.inspections, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInspection),
      });
      if (!res.ok) throw new Error('Error creando inspección');
      return res.json();
    },
    {
      onSuccess: (createdInspection) => {
        // Actualiza cache añadiendo la nueva inspección
        queryClient.setQueryData(['inspections'], (old = []) => [...old, createdInspection]);
      },
    }
  );

  // Mutación para editar inspección
  const updateInspectionMutation = useMutation(
    async (updatedInspection) => {
      const res = await fetch(`${config.api.endpoints.inspections}/${updatedInspection.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedInspection),
      });
      if (!res.ok) throw new Error('Error actualizando inspección');
      return res.json();
    },
    {
      onSuccess: (updatedInspection) => {
        // Actualiza cache reemplazando inspección editada
        queryClient.setQueryData(['inspections'], (old = []) =>
          old.map((insp) => (insp.id === updatedInspection.id ? updatedInspection : insp))
        );
      },
    }
  );

  const value = {
    inspections,
    isLoading,
    isError,
    createInspection: createInspectionMutation.mutate,
    createLoading: createInspectionMutation.isLoading,
    updateInspection: updateInspectionMutation.mutate,
    updateLoading: updateInspectionMutation.isLoading,
  };

  return <InspectionsContext.Provider value={value}>{children}</InspectionsContext.Provider>;
}
