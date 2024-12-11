import HeaderApp from "../HeaderApp";
import NavbarTrainer from "../NavbarTrainer";

function DashboardT() {
    return (
        <>
        <HeaderApp />
        <NavbarTrainer />
            <article className="ml-[100px] p-5 w-[calc(100%-100px)]">
                <header>
                    <h1 className="text-center mb-5 text-black">Resultado estadístico mensual por posición</h1>
                </header>
                <section className="flex flex-col gap-10">
                    <section className="mb-10">
                        <h2 className="mb-2 text-black">Estadísticas de defensores mes de Noviembre</h2>
                        <img src="./public/estadistica1.png" alt="Estadísticas de defensores mes de Noviembre" className="w-full max-w-[600px] mx-auto border border-gray-300 rounded-lg" />
                    </section>
                    <section className="mb-10">
                        <h2 className="mb-2 text-black">Estadísticas de arqueros mes de Noviembre</h2>
                        <img src="./public/estadistica2.png" alt="Estadísticas de arqueros mes de Noviembre" className="w-full max-w-[600px] mx-auto border border-gray-300 rounded-lg" />
                    </section>
                </section>
            </article>
        </>
    );
}

export default DashboardT;