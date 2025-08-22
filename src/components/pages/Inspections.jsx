import ContentHead from './../ui/ContentHead';

export default function Inspections() {
  // Mock de datos (ajústalos según tu API)
  const items = [
    { id: 1, placa: "ALA725", estado: "Registrada", empresa: "Evergreen", tipoVeh: "sedan", horaInicio: "08:13 AM" },
    { id: 2, placa: "PED492", estado: "En atención", empresa: "Maersk", tipoVeh: "minivan", horaInicio: "09:45 AM" },
    { id: 3, placa: "D1W148", estado: "Terminada", empresa: "Scania", tipoVeh: "camion", horaInicio: "07:20 AM" },
    { id: 3, placa: "D1W148", estado: "Terminada", empresa: "Scania", tipoVeh: "camion", horaInicio: "07:20 AM" },
    { id: 3, placa: "D1W148", estado: "Terminada", empresa: "Scania", tipoVeh: "camion", horaInicio: "07:20 AM" },
    { id: 3, placa: "D1W148", estado: "Terminada", empresa: "Scania", tipoVeh: "camion", horaInicio: "07:20 AM" },
    { id: 3, placa: "D1W148", estado: "Terminada", empresa: "Scania", tipoVeh: "camion", horaInicio: "07:20 AM" },
    { id: 3, placa: "D1W148", estado: "Terminada", empresa: "Scania", tipoVeh: "camion", horaInicio: "07:20 AM" },
    { id: 3, placa: "D1W148", estado: "Terminada", empresa: "Scania", tipoVeh: "camion", horaInicio: "07:20 AM" },
    { id: 3, placa: "D1W148", estado: "Terminada", empresa: "Scania", tipoVeh: "camion", horaInicio: "07:20 AM" },
    { id: 3, placa: "D1W148", estado: "Terminada", empresa: "Scania", tipoVeh: "camion", horaInicio: "07:20 AM" },
    { id: 3, placa: "D1W148", estado: "Terminada", empresa: "Scania", tipoVeh: "camion", horaInicio: "07:20 AM" },
    { id: 3, placa: "D1W148", estado: "Terminada", empresa: "Scania", tipoVeh: "camion", horaInicio: "07:20 AM" },

  ];

  const byStatus = (estado) => items.filter(i => i.estado === estado);

  const badgeClass = (estado) => {
    if (estado === "Registrada") return "bg-purple-100 text-purple-700";
    if (estado === "En atención") return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-700";
  };

  const iconForType = (t) => {
    const map = {
      camion: "bx-truck",
      camioneta: "bx-car", // puedes cambiar si tienes otro ícono más preciso
      sedan: "bx-car",
      minivan: "bx-bus",
      moto: "bx-cycling",
      default: "bx-car",
    };
    return map[t] || map.default;
  };

  const ListPanel = ({ title, estado, hint }) => (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <span className="text-xs text-gray-500">{hint}</span>
      </div>

      <div className="p-4 space-y-3">
        {byStatus(estado).map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => console.log('Detalle:', item.id)}
            className="w-full group flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 text-left
                       hover:border-purple-300 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          >
            {/* Izquierda: icono + info */}
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gray-100 grid place-items-center
                              group-hover:bg-white border border-gray-200">
                <i className={`bx ${iconForType(item.tipoVeh)} text-2xl text-gray-700 group-hover:text-purple-700`} />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">{item.placa}</p>
                <p className="text-xs text-gray-500">{item.empresa} · {item.tipoVeh}</p>
                {/* 👇 Ahora muestra la hora de inicio */}
                <p className="text-xs text-gray-600 mt-1">Inició: <span className="font-medium">{item.horaInicio}</span></p>
              </div>
            </div>

            {/* Derecha: badge estado */}
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeClass(item.estado)}`}>
              {item.estado}
            </span>
          </button>
        ))}

        {byStatus(estado).length === 0 && (
          <div className="text-xs text-gray-500 py-6 text-center">
            Sin registros en “{estado}”.
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <ContentHead title="Inspecciones" subtitle="Listado por estado" />

      <section className="flex-1 overflow-auto max-h-full p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ListPanel title="Registradas" estado="Registrada" hint="Actualizado hace 1 min" />
          <ListPanel title="En atención" estado="En atención" hint="En proceso" />
          <ListPanel title="Terminadas" estado="Terminada" hint="Hoy" />
        </div>
      </section>
    </div>
  );
}