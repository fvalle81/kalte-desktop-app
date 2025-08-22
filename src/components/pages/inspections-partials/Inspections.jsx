import ContentHead from './../ui/ContentHead';
export default function Inspections() {
  return (
    <div className="flex flex-col h-full"> {/* Ocupa todo el alto del main */}
       <ContentHead title="Inspecciones Registradas" subtitle="Aquí va el subtítulo o descripción" />


      <section className="flex-1 overflow-auto max-h-full">
        {/* Aquí va la tabla o contenido que puede desbordar */}
        <div className="flex ">
          <div className="w-1/3 border rounded-lg border-gray-200 bg-white m-3 p-3">
            <h1 className="text-base font-semibold">Registradas</h1>
            <div>
                <i className='bx  bx-car'  ></i>  D1W148

                
            </div>
          </div>
          <div className="w-1/3 border rounded-lg border-gray-200 bg-white m-3 p-3">
            <h1 className="text-base font-semibold">En atención</h1>
            <div>
              <div><i className='bx  bx-clipboard-detail'  ></i>   D1W148</div>
            </div>
          </div>
          <div className="w-1/3 border rounded-lg border-gray-200 bg-white m-3 p-3">
            <h1 className="text-base font-semibold">Terminadas</h1>
            <div>
              <div><i className='bx  bx-clipboard-check'  ></i>    D1W148</div>
            </div>
          </div> 
        </div>
         
      </section>
    </div>
  );
}
