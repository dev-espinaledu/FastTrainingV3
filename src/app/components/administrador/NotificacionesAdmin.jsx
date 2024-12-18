import { useNavigate } from "react-router-dom";

function NotificacionesAdmin() {
    const navigate = useNavigate();
    const closeModal = () => {
        navigate(-1);
    };

    return (
        <div className="w-full fixed inset-0 h-full flex items-center justify-center bg-gray-800/50">
            <div className="bg-white z-10 fixed p-6 w-full max-w-md rounded shadow-md">
                {/* Botón para cerrar notificaciones */}
                <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 mt-3" onClick={closeModal}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold">Notificaciones</h2>
                    {/* Basurero (no funcional) */}
                    <button className="text-gray-600 mr-3">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>

                {/* Notificación 1 */}
                <article className="border-b border-gray-200 p-4">
                    <section className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center">
                            <i className="fas fa-comment"></i>
                        </div>
                        <div className="flex-1">
                            <h1 className="font-bold text-base">Preguntas, quejas, reclamos o sugerencias</h1>
                            <p className="text-sm text-gray-600">El administrador ha dado respuesta a tu pregunta.</p>
                        </div>
                        <h3 className="text-xs text-gray-500 mt-2 ml-auto">03/02/2024</h3>
                    </section>
                </article>

                {/* Notificación 2 */}
                <article className="border-b border-gray-200 p-4">
                    <section className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center">
                            <i className="fas fa-comment"></i>
                        </div>
                        <div className="flex-1">
                            <h1 className="font-bold text-base">Preguntas, quejas, reclamos o sugerencias</h1>
                            <p className="text-sm text-gray-600">El administrador ha dado respuesta a tu queja.</p>
                        </div>
                        <h3 className="text-xs text-gray-500 mt-2 ml-auto">17/01/2024</h3>
                    </section>
                </article>

                {/* Notificación 3 */}
                <article className="border-b border-gray-200 p-4">
                    <section className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center">
                            <i className="fas fa-chart-bar"></i>
                        </div>
                        <div className="flex-1">
                            <h1 className="font-bold text-base">Estadísticas</h1>
                            <p className="text-sm text-gray-600">
                                Los resultados de los mesociclos asignados a tus jugadores ya están disponibles. Ayúdalos a potenciar su rendimiento en la cancha.
                            </p>
                        </div>
                        <h3 className="text-xs text-gray-500 mt-2 ml-auto">09/01/2024</h3>
                    </section>
                </article>
            </div>
        </div>
    );
}
export default NotificacionesAdmin;