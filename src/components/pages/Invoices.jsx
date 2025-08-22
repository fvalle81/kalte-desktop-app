import { useState } from "react";

export default function Facturacion() {
  const [activeTab, setActiveTab] = useState("detalle");

  const tabs = [
    { id: "detalle", label: "Detalle" },
    { id: "vehiculo", label: "Vehículo" },
    { id: "cliente", label: "Cliente" },
    { id: "servicios", label: "Servicios" },
    { id: "historial", label: "Historial" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold">Factura #F-2025-001</h2>
          <p className="text-sm text-gray-500">
            Vehículo: Toyota Hilux 2021 - Placa ALA725
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
          Pagado
        </span>
      </div>

      {/* Tabs */}
      <div className="border-b mb-4">
        <nav className="flex gap-6 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 transition ${
                activeTab === tab.id
                  ? "border-b-2 border-purple-600 text-purple-600 font-medium"
                  : "text-gray-500 hover:text-purple-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Contenido activo */}
      <div className="space-y-4 text-sm">
        {activeTab === "detalle" && (
          <div className="grid grid-cols-2 gap-4">
            <p><span className="font-medium">Fecha emisión:</span> 22/08/2025</p>
            <p><span className="font-medium">Vencimiento:</span> 29/08/2025</p>
            <p><span className="font-medium">Método pago:</span> Transferencia</p>
            <p><span className="font-medium">Monto total:</span> S/ 350.00</p>
          </div>
        )}

        {activeTab === "vehiculo" && (
          <div className="grid grid-cols-2 gap-4">
            <p><span className="font-medium">Marca:</span> Toyota</p>
            <p><span className="font-medium">Modelo:</span> Hilux</p>
            <p><span className="font-medium">Año:</span> 2021</p>
            <p><span className="font-medium">Tipo:</span> Camioneta</p>
            <p><span className="font-medium">Kilometraje:</span> 120,000 km</p>
            <p><span className="font-medium">Combustible:</span> Diesel</p>
          </div>
        )}

        {activeTab === "cliente" && (
          <div className="grid grid-cols-2 gap-4">
            <p><span className="font-medium">Cliente:</span> Juan Pérez</p>
            <p><span className="font-medium">Documento:</span> DNI 12345678</p>
            <p><span className="font-medium">Teléfono:</span> +51 987 654 321</p>
            <p><span className="font-medium">Email:</span> juanperez@mail.com</p>
            <p><span className="font-medium">Dirección:</span> Av. Principal 123, Lima</p>
          </div>
        )}

        {activeTab === "servicios" && (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Concepto</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">Inspección técnica</td>
                  <td className="px-4 py-2">S/ 150.00</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Cambio de aceite</td>
                  <td className="px-4 py-2">S/ 120.00</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">Revisión de frenos</td>
                  <td className="px-4 py-2">S/ 80.00</td>
                </tr>
                <tr className="border-t bg-gray-50 font-medium">
                  <td className="px-4 py-2 text-right">Total</td>
                  <td className="px-4 py-2">S/ 350.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "historial" && (
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span className="text-gray-600">22/08/2025 - Factura emitida</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Sistema</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-600">23/08/2025 - Pago recibido</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Caja</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-600">24/08/2025 - Factura cerrada</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Admin</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}