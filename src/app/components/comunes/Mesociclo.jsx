function TablaMesociclo(){
    return(
    <section className="py-12 pl-24  w-full h-[90vh] flex justify-center items-center rounded-lg bg-slate-50/65 ">
        <article className="bg-white  w-4/5  text-center">
            <table className="border-collapse border border-slate-500 w-full rounded-2xl  ">
                <thead className="border-collapse border border-slate-500">
                    <tr>
                        <th className="border-solid border-black p-3 w-64 text-center border-collapse border">Test</th>
                        <th className="border-solid border-black p-3 w-64 text-center border-collapse border">I</th>
                        <th className="border-solid border-black p-3 w-64 text-center border-collapse border">II</th>
                        <th className="border-solid border-black p-3 w-64 text-center border-collapse border">III</th>
                        <th className="border-solid border-black p-3 w-64 text-center border-collapse border">IV</th>
                        <th className="border-solid border-black p-3 w-64 text-center border-collapse border">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-solid border-black p-3 w-64 text-center ">Resistencia Aeróbica</th>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                    </tr>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-solid border-black p-3 w-64 text-center ">Velocidad</th>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                    </tr>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-solid border-black p-3 w-64 text-center ">Fuerza Explosiva</th>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                    </tr>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-solid border-black p-3 w-64 text-center ">Velocidad de Reacción</th>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                    </tr>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-solid border-black p-3 w-64 text-center ">Potencia</th>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                    </tr>
                    <tr className="border-collapse border border-slate-500">
                        <th className="border-solid border-black p-3 w-64 text-center ">Táctica</th>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                        <td className="border-solid border-black p-3 w-64 border-collapse border " contentEditable="true">Ingresa los datos</td>
                    </tr>
                </tbody>
            </table>
        </article>
    </section>
    )
}
function Tabla(){
    return(
        <>
        <TablaMesociclo/>
        </>
    )
}

export default Tabla;