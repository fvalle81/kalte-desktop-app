import ContentHead from './../ui/ContentHead';

import { useQuery } from '@tanstack/react-query';
import { useConfig } from '../../providers/config/configContext';


export default function Inspections() {
  const config = useConfig();

  // Fetch con useQuery
  const { data: items = [], isLoading, isError } = useQuery({
    queryKey: ['inspections'],
    queryFn: async () => {
      const res = await fetch(config.api.endpoints.inspections);
      if (!res.ok) throw new Error('Error al cargar inspecciones');
      return res.json();
    }
  });

  if (isLoading) return <div className="p-6">Cargando inspecciones...</div>;
  if (isError) return <div className="p-6 text-red-500">Error al cargar inspecciones.</div>;

  // Función simple para filtrar por estado (case sensitive, verifica que venga igual desde el backend)
  console.log('Datos recibidos de inspecciones:', items);

  const byStatus = (estado) => {
  const filtered = items.filter(i => {
      console.log(`Filtrando por estado: "${estado}", estado del item: "${i.inspection_status}"`);
      return i.inspection_status === estado;
    });
    console.log(`Resultado filtro para estado "${estado}":`, filtered);
    return filtered;
  };
  const badgeClass = (estado) => {
    if (estado === "registrado") return "bg-purple-100 text-purple-700";
    if (estado === "En atención") return "bg-yellow-100 text-yellow-700";
    if (estado === "Terminada") return "bg-green-100 text-green-700";
    return "bg-gray-100 text-gray-700";
  };

  const iconForType = (t) => {
    const map = {
      camion: "bx-truck",
      camioneta: "bx-car",
      sedan: "bx-car",
      minivan: "bx-bus",
      moto: "bx-cycling",
      default: "bx-car",
    };
    return map[t] || map.default;
  };

  const ListPanel = ({ title, estado, hint }) => {
    const list = byStatus(estado);
    return (
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-sm font-semibold text-gray-900">{title} ( {list.length} )</h3>
          <span className="text-xs text-gray-500">{hint}</span>
        </div>

        <div className="p-4 space-y-3">
          {list.length > 0 ? (
            list.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => console.log('Detalle:', item.id)}
                className="w-full group flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 text-left
                  hover:border-purple-300 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gray-100 grid place-items-center
                    group-hover:bg-white border border-gray-200">
                    <i className={`bx ${iconForType(item.tipoVeh)} text-2xl text-gray-700 group-hover:text-purple-700`} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.vehicle_plate}</p>
                    <p className="text-xs text-gray-500">{item.vehicle_make} · {item.vehicle_model}</p>
                    <p className="text-xs text-gray-600 mt-1">Inició: <span className="font-medium">{item.inspection_date}</span></p>
                  </div>
                </div>

                <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeClass(item.estado)}`}>
                  {item.inspection_status}
                </span>
              </button>
            ))
          ) : (
            <div className="text-xs text-gray-500 py-6 text-center">
              Sin registros en “{estado}”.
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <ContentHead title="Inspecciones" subtitle="Listado por estado" />

      <section className="flex-1 overflow-auto max-h-full p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ListPanel title="Registradas" estado="registrado" hint="Actualizado hace 1 min" />
          <ListPanel title="En atención" estado="En atención" hint="En proceso" />
          <ListPanel title="Terminadas" estado="Terminada" hint="Hoy" />
        </div>
      </section>
    </div>
  );
}
