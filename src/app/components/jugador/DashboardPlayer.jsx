import HeaderApp from "../HeaderApp";
import NavbarJugador from "../NavbarJugador";

function DashboardJ() {
    return (
        <>
            <article className="flex">
                {/* Barra de búsqueda / lateral ya creada */}
                <HeaderApp />
                <NavbarJugador />

                {/* Contenido principal */}
                <section className="p-5 w-full">
                    <h1 className="text-center text-gray-800">Resultado estadístico mensual</h1>

                    <section className="flex justify-around mb-5">
                        <img src="public/velocidad.png" alt="Aumento del 43% en velocidad" className="w-24 h-24" />
                        <img src="public/resistencia.png" alt="Aumento del 57% en resistencia" className="w-24 h-24" />
                        <img src="public/fuerza.png" alt="Aumento del 50% en fuerza" className="w-24 h-24" />
                        <img src="public/reaction.png" alt="Aumento del 40% en velocidad de reacción" className="w-24 h-24" />
                    </section>

                    <section className="flex justify-center mb-5">
                        <img src="public/estadistica3.png" alt="Gráfico de barras mensuales" className="w-full max-w-[600px]" />
                    </section>

                    <h2 className="text-center text-gray-800">Mesociclo asignado:</h2>
                    <table className="w-full border-collapse mt-5">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 bg-[#f04e23] text-white p-2">Test</th>
                                <th className="border border-gray-300 bg-[#f04e23] text-white p-2">I</th>
                                <th className="border border-gray-300 bg-[#f04e23] text-white p-2">II</th>
                                <th className="border border-gray-300 bg-[#f04e23] text-white p-2">III</th>
                                <th className="border border-gray-300 bg-[#f04e23] text-white p-2">IV</th>
                                <th className="border border-gray-300 bg-[#f04e23] text-white p-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-gray-100">
                                <td className="border border-gray-300 p-2 text-center">Resistencia Aeróbica</td>
                                <td className="border border-gray-300 p-2 text-center">10</td>
                                <td className="border border-gray-300 p-2 text-center">12</td>
                                <td className="border border-gray-300 p-2 text-center">15</td>
                                <td className="border border-gray-300 p-2 text-center">13</td>
                                <td className="border border-gray-300 p-2 text-center">50</td>
                            </tr>
                            <tr className="odd:bg-gray-100">
                                <td className="border border-gray-300 p-2 text-center">Velocidad</td>
                                <td className="border border-gray-300 p-2 text-center">250</td>
                                <td className="border border-gray-300 p-2 text-center">300</td>
                                <td className="border border-gray-300 p-2 text-center">350</td>
                                <td className="border border-gray-300 p-2 text-center">280</td>
                                <td className="border border-gray-300 p-2 text-center">1180</td>
                            </tr>
                            <tr className="odd:bg-gray-100">
                                <td className="border border-gray-300 p-2 text-center">Fuerza Explosiva</td>
                                <td className="border border-gray-300 p-2 text-center">160</td>
                                <td className="border border-gray-300 p-2 text-center">230</td>
                                <td className="border border-gray-300 p-2 text-center">280</td>
                                <td className="border border-gray-300 p-2 text-center">200</td>
                                <td className="border border-gray-300 p-2 text-center">870</td>
                            </tr>
                            <tr className="odd:bg-gray-100">
                                <td className="border border-gray-300 p-2 text-center">Velocidad de Reacción</td>
                                <td className="border border-gray-300 p-2 text-center">12</td>
                                <td className="border border-gray-300 p-2 text-center">18</td>
                                <td className="border border-gray-300 p-2 text-center">24</td>
                                <td className="border border-gray-300 p-2 text-center">20</td>
                                <td className="border border-gray-300 p-2 text-center">74</td>
                            </tr>
                            <tr className="odd:bg-gray-100">
                                <td className="border border-gray-300 p-2 text-center">Potencia</td>
                                <td className="border border-gray-300 p-2 text-center">5</td>
                                <td className="border border-gray-300 p-2 text-center">7</td>
                                <td className="border border-gray-300 p-2 text-center">9</td>
                                <td className="border border-gray-300 p-2 text-center">8</td>
                                <td className="border border-gray-300 p-2 text-center">29</td>
                            </tr>
                            <tr className="odd:bg-gray-100">
                                <td className="border border-gray-300 p-2 text-center">Táctica</td>
                                <td className="border border-gray-300 p-2 text-center">12</td>
                                <td className="border border-gray-300 p-2 text-center">16</td>
                                <td className="border border-gray-300 p-2 text-center">20</td>
                                <td className="border border-gray-300 p-2 text-center">16</td>
                                <td className="border border-gray-300 p-2 text-center">64</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </article>
        </>
    )
}

export default DashboardJ;