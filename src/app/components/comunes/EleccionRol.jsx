import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EleccionRol() {
    const [selectedRole, setSelectedRole] = useState(null);
    const navigate = useNavigate();

    const closeModal = () => {
        navigate(-1);
    };

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const handleContinue = () => {
        if (selectedRole === "trainer") {
            navigate("/trainer/home");
        } else if (selectedRole === "player") {
            navigate("/player/home");
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <section className="flex flex-col items-center justify-center w-fit h-fit py-20 rounded-xl bg-gray-200">
            <button className="top-4 text-gray-600 hover:text-gray-900 mt-3" onClick={closeModal}>
                    <i className="fas fa-times"></i>
                </button>
                <h1 className="text-center mb-8 text-2xl font-black">Elige tu rol</h1>
                <section className="flex justify-center mb-5">
                    <button
                        onClick={() => handleRoleSelect("trainer")}
                        className={`flex flex-col items-center p-5 mx-3 ${selectedRole === "trainer" ? "bg-orange-600 text-white" : "bg-gray-300 text-black"} transition duration-300 hover:bg-orange-600`}
                    >
                        <img src="./public/entrenador.png" alt="Entrenador" className="mb-2" />
                        <p className="m-0 text-lg font-bold">Entrenador</p>
                    </button>
                    <button
                        onClick={() => handleRoleSelect("player")}
                        className={`flex flex-col items-center p-5 mx-3 ${selectedRole === "player" ? "bg-orange-600 text-white" : "bg-gray-300 text-black"} transition duration-300 hover:bg-orange-600`}
                    >
                        <img src="./public/jugador.png" alt="Jugador" className="mb-2" />
                        <p className="m-0 text-lg font-bold">Jugador</p>
                    </button>
                </section>
                <button
                    onClick={handleContinue}
                    disabled={!selectedRole}
                    className="w-64 py-2 px-5 bg-orange-600 text-white rounded-md hover:bg-orange-400 text-lg font-bold disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Continuar
                </button>
            </section>
        </div>
    );
}
export default EleccionRol;