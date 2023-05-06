export default function FooterSection() {
  return (
    <footer className="bg-red-600 text-white py-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-epilogue mb-5">Contáctanos</h2>
        <p className="font-noto mb-2">
          Instituto Leyers - Rehabilitación y Asistencia Social
        </p>
        <div className="flex mt-5">
          <a
            href="https://www.facebook.com/institutoleyers"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5"
          >
            <i className="fa-brands fa-facebook text-xl"></i>
          </a>
          <a
            href="https://goo.gl/maps/abcdefg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-location-arrow text-xl"></i>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-noto pt-10">
          <div className="col-span-1">
            <h2 className="text-xl font-epilogue mb-4">Contacto</h2>
            <p className="mb-4">Llamar ahora</p>
            <p className="mb-8 text-lg font-bold">222 274 2075</p>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-epilogue mb-4">Dirección</h2>
            <p className="mb-4">Cómo llegar</p>
            <p className="mb-4">Calle 15 Oriente #1025</p>
            <p className="mb-4">Motolinia</p>
            <p className="mb-4">72538 Heroica Puebla de Zaragoza, Puebla</p>
            <p className="mb-8">México</p>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-epilogue mb-4">Horario de apertura</h2>
            <table>
              <tbody>
                <tr>
                  <td className="pr-4">lun:</td>
                  <td>10:00–14:00</td>
                </tr>
                <tr>
                  <td className="pr-4">mar:</td>
                  <td>10:00–14:00</td>
                </tr>
                <tr>
                  <td className="pr-4">mié:</td>
                  <td>10:00–14:00</td>
                </tr>
                <tr>
                  <td className="pr-4">jue:</td>
                  <td>10:00–14:00</td>
                </tr>
                <tr>
                  <td className="pr-4">vie:</td>
                  <td>10:00–14:00</td>
                </tr>
                <tr>
                  <td className="pr-4">sáb:</td>
                  <td>Cerrado</td>
                </tr>
                <tr>
                  <td className="pr-4">dom:</td>
                  <td>Cerrado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </footer>
  );
}
